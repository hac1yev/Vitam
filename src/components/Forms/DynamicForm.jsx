import { useCallback, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import AddSolutionTable from "../Tables/AddSolutionTable";
import AddSmetaDesignTable from "../Tables/AddSmetaDesignTable";
import RevisionTable from "../Tables/RevisionTable";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FormDataSliceActions } from "../../store/formData-slice";
import { FlowSliceAction } from "../../store/flow-slice";
import { useTranslation } from "react-i18next";

const DynamicForm = ({ nextStep, currentStep }) => {
  const [openSolutionModal, setOpenSolutionModal] = useState(false);
  const [openSmetaDesignModal, setOpenSmetaDesignModal] = useState(false);
  const handleOpenSolutionModal = () => setOpenSolutionModal(true);
  const handleOpenSmetaDesignModal = () => setOpenSmetaDesignModal(true);
  const { register, control, trigger, clearErrors, formState: { errors } } = useForm();
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const selectedFormValues = useSelector((state) => state.formDataReducer.selectedFormValues);
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const solutionItems = useSelector((state) => state.formDataReducer.solutionItems);
  const designItems = useSelector((state) => state.formDataReducer.designItems);
  const { i18n, t } = useTranslation("flows");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const cancelListOption = useMemo(() => {
    return formDatas?.cancelList.map((item) => ({
      value: item.LEGV_ID,
      label: item.LEGV_ADI,
    }));
  }, [formDatas?.cancelList]);

  const handleCloseSolutionModal = useCallback(() => {
    setOpenSolutionModal(false);
  }, []);

  const handleCloseSmetaDesignModal = useCallback(() => {
    setOpenSmetaDesignModal(false);
  }, []);

  useEffect(() => {
    const subscription = i18n.on("languageChanged", () => {
      clearErrors();
      setValidateStatusAndCancel(false);
    });

    return () => {
      i18n.off("languageChanged", subscription);
    };
  }, [clearErrors, i18n]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (nextStep === "/flows") {
      dispatch(FormDataSliceActions.clearDesignAndSolutionItems());
      navigate(`${nextStep}`, { replace: true, state: { from: location } });
    } else {
      if (nextStep === "smetaya-gonder-formu") {
        if (solutionItems.length > 0) {
          // dispatch(FlowSliceAction.getSmetaData({ heller: solutionItems }));
          navigate(`?step=${nextStep}`, { replace: true });
        } else return;
      } else if (nextStep === "islere-start-ver-formu") {
        if (designItems.length > 0) {
          navigate(`?step=${nextStep}`, { replace: true });
        } else return;
      } else {
        navigate(`?step=${nextStep}`, { replace: true });
      }
    }
  };

  const handleAddSolutionClick = async () => {
    setValidateStatusAndCancel(false);
    clearErrors(["statusQeyd", "legvSebebi"]);
    await trigger(["musteriAdi","icraTarixi","layiheAdi","musteriNovu","layiheMeneceri"]);
  };

  const handleCancelClick = async () => {
    setValidateStatusAndCancel(true);

    setTimeout(async () => {
      const valid = await trigger(["statusQeyd", "legvSebebi"]);

      if (!valid) {
        console.log("Ləğv səbəbi və status qeydi sahələri tələb olunur!");
      }
    }, 0);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="card p-4">
        <div className="row">
          <div className="d-flex justify-content-end align-items-center gap-2 my-2">
            <button
              type="submit"
              className="btn btn-primary py-2"
              onClick={handleAddSolutionClick}
            >
              {nextStep === "smeta-dizayn-formu" &&
                t("flow_add_solution_button")}
              {nextStep === "smetaya-gonder-formu" &&
                t("flow_add_smeta_design_button")}
              {nextStep === "islere-start-ver-formu" &&
                t("flow_add_smeta_button")}
              {nextStep === "prosesi-tamamla-formu" &&
                t("flow_start_work_button")}
              {nextStep === "/flows" && t("flow_complete_process_button")}
            </button>

            <button
              type="button"
              className="btn btn-danger py-2"
              onClick={handleCancelClick}
            >
              {t("flow_table_cancel_button")}
            </button>
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mb-3">
            <label htmlFor="sorguNomresi">
              {t("flows_sorgu_nomresi_label")}
            </label>
            <input
              type="text"
              className="form-control"
              id="sorguNomresi"
              name="sorguNomresi"
              readOnly
              disabled
              value={selectedFormValues?.sorguNomresi}
            />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column mb-3">
            <label htmlFor="tarix">{t("flows_tarix_label")}</label>
            <input
              type="date"
              className="form-control"
              name="tarix"
              id="tarix"
              readOnly
              disabled
              value={selectedFormValues?.tarix}
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mb-3">
            <label htmlFor="musteriAdi">{t("flows_musteri_adi_label")}</label>
            <Select
              placeholder={t("flow_select_placeholder")}
              className="basic-multi-select"
              classNamePrefix="select"
              readOnly
              isDisabled={true}
              value={selectedFormValues?.musteriAdi}
            />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column mb-3">
            <label htmlFor="icraTarixi">{t("flows_icra_tarixi_label")}</label>
            <input
              type="date"
              id="icraTarixi"
              name="icraTarixi"
              className="form-control"
              readOnly
              disabled
              value={selectedFormValues?.icraTarixi}
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mb-3">
            <label htmlFor="layiheAdi">{t("flow_layihe_adi_label")}</label>
            <Select
              placeholder={t("flow_select_placeholder")}
              className="basic-multi-select"
              classNamePrefix="select"
              readOnly
              isDisabled={true}
              value={selectedFormValues?.layiheAdi}
            />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column mb-3">
            <label htmlFor="musteriNovu">{t("flow_musteri_novu_label")}</label>
            <Select
              placeholder={t("flow_select_placeholder")}
              className="basic-multi-select"
              classNamePrefix="select"
              readOnly
              isDisabled={true}
              value={selectedFormValues?.musteriNovu}
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mb-3">
            <label htmlFor="layiheMeneceri">
              {t("flow_layihe_meneceri_label")}
            </label>
            <Select
              placeholder={t("flow_select_placeholder")}
              className="basic-multi-select"
              classNamePrefix="select"
              readOnly
              isDisabled={true}
              value={selectedFormValues?.layiheMeneceri}
            />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column mb-3">
            <label htmlFor="elaqeliSexs">{t("flow_elaqeli_sexs_label")}</label>
            <input
              type="text"
              className="form-control"
              id="elaqeliSexs"
              name="elaqeliSexs"
              readOnly
              disabled
              value={selectedFormValues?.elaqeliSexs}
            />
          </div>
          <div className="col-12 col-lg-8 d-flex flex-column mb-3">
            <label htmlFor="email">{t("flow_email_label")}</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              readOnly
              disabled
              value={selectedFormValues.email}
            />
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column mb-3">
            <label htmlFor="telNomresi">{t("flow_telefon_label")}</label>
            <input
              type="text"
              className="form-control"
              id="telNomresi"
              name="telNomresi"
              readOnly
              disabled
              value={selectedFormValues.telNomresi}
            />
          </div>
          <div className="col-12 d-flex flex-column mb-3">
            <label htmlFor="qeyd">{t("flow_qeyd_label")}</label>
            <input
              type="text"
              className="form-control"
              id="qeyd"
              name="qeyd"
              readOnly
              disabled
              value={selectedFormValues.qeyd}
            />
          </div>
          {validateStatusAndCancel && (
            <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-5">
              <label htmlFor="statusQeyd">{t("flow_status_qeydi_label")}</label>
              <input
                type="text"
                className={
                  errors.statusQeyd
                    ? "form-control error-border"
                    : "form-control"
                }
                id="statusQeyd"
                name="statusQeyd"
                {...register("statusQeyd", {
                  required: t("flow_status_qeydi_error"),
                })}
              />
              {errors.statusQeyd && (
                <p className="error-text">{errors.statusQeyd.message}</p>
              )}
            </div>
          )}

          {validateStatusAndCancel && (
            <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-5">
              <label htmlFor="legvSebebi">{t("flow_legv_sebebi_label")}</label>
              <Controller
                name="legvSebebi"
                id="legvSebebi"
                control={control}
                rules={{
                  required: t("flow_legv_sebebi_error"),
                }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={cancelListOption}
                    placeholder={t("flow_select_placeholder")}
                    className={
                      errors.legvSebebi
                        ? "basic-multi-select error-border"
                        : "basic-multi-select"
                    }
                    classNamePrefix="select"
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                  />
                )}
              />
              {errors.legvSebebi && (
                <p className="error-text">{errors.legvSebebi.message}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {(currentStep === "islere-start-ver-formu" ||
        currentStep === "prosesi-tamamla-formu") && <RevisionTable />}
      {(currentStep === "smeta-dizayn-formu" ||
        currentStep === "smetaya-gonder-formu") && (
        <AddSolutionTable
          handleOpenSolutionModal={handleOpenSolutionModal}
          handleCloseSolutionModal={handleCloseSolutionModal}
          openSolutionModal={openSolutionModal}
        />
      )}
      {(currentStep === "smetaya-gonder-formu" ||
        currentStep === "islere-start-ver-formu" ||
        currentStep === "prosesi-tamamla-formu") && (
        <AddSmetaDesignTable
          handleOpenSmetaDesignModal={handleOpenSmetaDesignModal}
          handleCloseSmetaDesignModal={handleCloseSmetaDesignModal}
          openSmetaDesignModal={openSmetaDesignModal}
        />
      )}
    </form>
  );
};

export default DynamicForm;