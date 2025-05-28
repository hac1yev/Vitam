import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useNavigate } from "react-router-dom";
import { FlowSliceAction } from "../../store/flow-slice";
import { useTranslation } from "react-i18next";

const StaticForm = () => {
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const dispatch = useDispatch();
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const { register,handleSubmit,control,watch,trigger,clearErrors,getValues,formState: { errors } } = useForm();
  const watchedFields = watch();
  const navigate = useNavigate();
  const { i18n,t } = useTranslation('flows');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("step")) {
      navigate("?step=helleri-elave-et-formu", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const subscription = i18n.on('languageChanged', () => {
      clearErrors();
      setValidateStatusAndCancel(false);
    });

    return () => {
      i18n.off('languageChanged', subscription);
    };
  }, [clearErrors,i18n]);

  useEffect(() => {
    Object.entries(errors).forEach(([fieldName, error]) => {
      const value = watchedFields[fieldName];
      if (value && !error?.message) {
        clearErrors(fieldName);
      }
    });
  }, [watchedFields, errors, clearErrors]);

  const mapOptions = (list, valueKey, labelKey) =>
    list?.map((item) => ({
      value: item[valueKey],
      label: item[labelKey],
    })) || [];

  const customerListOption = useMemo(
    () => mapOptions(formDatas?.customerList, "MUSHTERI_ID", "MUSHTERI_ADI"),
    [formDatas?.customerList]
  );
  const projectListOption = useMemo(
    () => mapOptions(formDatas?.projectList, "PROYEKT_ID", "PROYEKT_ADI"),
    [formDatas?.projectList]
  );
  const customerTypeOption = useMemo(
    () =>
      mapOptions(
        formDatas?.customerType,
        "MUSHTERI_NOV_ID",
        "MUSHTERI_NOV_ADI"
      ),
    [formDatas?.customerType]
  );
  const projectManagerOption = useMemo(
    () => mapOptions(formDatas?.managerList, "MENECER_ID", "MENECER_ADI"),
    [formDatas?.managerList]
  );
  const cancelListOption = useMemo(
    () => mapOptions(formDatas?.cancelList, "LEGV_ID", "LEGV_ADI"),
    [formDatas?.cancelList]
  );

  const onSubmit = (data) => {
    dispatch(FormDataSliceActions.addFormValues(data));
    dispatch(FormDataSliceActions.activeLoading());
    // dispatch(FlowSliceAction.getSmetaData({
    //   ...data,
    //   step: 1
    // }));
    
    setTimeout(() => {
      dispatch(FormDataSliceActions.passiveLoading());
      navigate("?step=smeta-dizayn-formu", { replace: true });
    }, 2000);
  };

  const handleAddSolutionClick = async () => {
    setValidateStatusAndCancel(false);
    clearErrors(["statusQeyd", "legvSebebi"]);
    await trigger([
      "musteriAdi",
      "icraTarixi",
      "layiheAdi",
      "musteriNovu",
      "layiheMeneceri",
    ]);
  };

  const handleCancelClick = async () => {
    setValidateStatusAndCancel(true);

    setTimeout(async () => {
      clearErrors([
        "musteriAdi",
        "icraTarixi",
        "layiheAdi",
        "musteriNovu",
        "layiheMeneceri",
      ]);
      const valid = await trigger(["statusQeyd", "legvSebebi"]);

      if(valid){
        navigate("/flows", { replace: true });
      } 
    }, 0);
  };

  return (
    <div className="card px-4">
      <form className="row my-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-end align-items-center gap-2 my-2">
          <button
            type="submit"
            className="btn btn-primary py-2"
            onClick={handleAddSolutionClick}
          >
            {t("flow_add_solution_button")}
          </button>
          <button
            type="button"
            className="btn btn-danger py-2"
            onClick={handleCancelClick}
          >
            {t("flow_table_cancel_button")}
          </button>
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="sorguNomresi">{t("flows_sorgu_nomresi_label")}</label>
          <input
            type="text"
            className="form-control"
            id="sorguNomresi"
            name="sorguNomresi"
            readOnly
            value={""}
            {...register("sorguNomresi")}
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="tarix">{t("flows_tarix_label")}</label>
          <input
            type="date"
            className="form-control"
            defaultValue={new Date().toISOString().split("T")[0]}
            name="tarix"
            id="tarix"
            {...register("tarix")}
          />
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="musteriAdi">{t("flows_musteri_adi_label")}</label>
          <Controller
            name="musteriAdi"
            control={control}
            rules={{ required: t("flow_musteri_adi_error") }}
            render={({ field }) => (
              <Select
                {...field}
                options={customerListOption}
                placeholder={t("flow_select_placeholder")}
                className={
                  errors.musteriAdi
                    ? "basic-multi-select error-border"
                    : "basic-multi-select"
                }
                classNamePrefix="select"
                onChange={(selectedOption) => field.onChange(selectedOption)}
              />
            )}
          />
          {errors.musteriAdi && (
            <p className="error-text">{errors.musteriAdi.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="icraTarixi">{t("flows_icra_tarixi_label")}</label>
          <input
            type="date"
            id="icraTarixi"
            name="icraTarixi"
            className={
              errors.icraTarixi ? "form-control error-border" : "form-control"
            }
            {...register("icraTarixi", {
              required: t("flow_icra_tarixi_error1"),
              validate: (value) => {
                const tarixValue = getValues("tarix");
                if (!tarixValue) return true;
                return (
                  value >= tarixValue ||
                  t("flow_icra_tarixi_error2")
                );
              },
            })}
          />
          {errors.icraTarixi && (
            <p className="error-text">{errors.icraTarixi.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="layiheAdi">{t("flow_layihe_adi_label")}</label>
          <Controller
            name="layiheAdi"
            control={control}
            rules={{ required: t("flow_layihe_adi_error") }}
            render={({ field }) => (
              <Select
                {...field}
                options={projectListOption}
                placeholder={t("flow_select_placeholder")}
                className={
                  errors.layiheAdi
                    ? "basic-multi-select error-border"
                    : "basic-multi-select"
                }
                classNamePrefix="select"
                onChange={(selectedOption) => field.onChange(selectedOption)}
              />
            )}
          />
          {errors.layiheAdi && (
            <p className="error-text">{errors.layiheAdi.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="musteriNovu">{t("flow_musteri_novu_label")}</label>
          <Controller
            name="musteriNovu"
            control={control}
            rules={{ required: t("flow_musteri_novu_error") }}
            render={({ field }) => (
              <Select
                {...field}
                options={customerTypeOption}
                placeholder={t("flow_select_placeholder")}
                className={
                  errors.musteriNovu
                    ? "basic-multi-select error-border"
                    : "basic-multi-select"
                }
                classNamePrefix="select"
                onChange={(selectedOption) => field.onChange(selectedOption)}
              />
            )}
          />
          {errors.musteriNovu && (
            <p className="error-text">{errors.musteriNovu.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="layiheMeneceri">{t("flow_layihe_meneceri_label")}</label>
          <Controller
            name="layiheMeneceri"
            id="layiheMeneceri"
            control={control}
            rules={{ required: t("flow_layihe_meneceri_error") }}
            render={({ field }) => (
              <Select
                {...field}
                options={projectManagerOption}
                placeholder={t("flow_select_placeholder")}
                className={
                  errors.layiheMeneceri
                    ? "basic-multi-select error-border"
                    : "basic-multi-select"
                }
                classNamePrefix="select"
                onChange={(selectedOption) => field.onChange(selectedOption)}
              />
            )}
          />
          {errors.layiheMeneceri && (
            <p className="error-text">{errors.layiheMeneceri.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="elaqeliSexs">{t("flow_elaqeli_sexs_label")}</label>
          <input
            type="text"
            className="form-control"
            id="elaqeliSexs"
            name="elaqeliSexs"
            {...register("elaqeliSexs")}
          />
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="email">{t("flow_email_label")}</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email")}
            name="email"
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="telNomresi">{t("flow_telefon_label")}</label>
          <input
            type="text"
            className="form-control"
            id="telNomresi"
            name="telNomresi"
            {...register("telNomresi")}
          />
        </div>
        <div className="col-12 d-flex flex-column gap-1 mb-3">
          <label htmlFor="qeyd">{t("flow_qeyd_label")}</label>
          <input
            type="text"
            className="form-control"
            id="qeyd"
            name="qeyd"
            {...register("qeyd")}
          />
        </div>
        {validateStatusAndCancel && (
          <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-5">
            <label htmlFor="statusQeyd">{t("flow_status_qeydi_label")}</label>
            <input
              type="text"
              className={
                errors.statusQeyd ? "form-control error-border" : "form-control"
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
                  onChange={(selectedOption) => field.onChange(selectedOption)}
                />
              )}
            />
            {errors.legvSebebi && (
              <p className="error-text">{errors.legvSebebi.message}</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default StaticForm;