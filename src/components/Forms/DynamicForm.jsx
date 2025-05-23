import { useCallback, useMemo, useState } from "react";
import Select from "react-select";
import AddSolutionTable from "../Tables/AddSolutionTable";
import AddSmetaDesignTable from "../Tables/AddSmetaDesignTable";
import RevisionTable from "../Tables/RevisionTable";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormDataSliceActions } from "../../store/formData-slice";

const DynamicForm = ({ nextStep, currentStep }) => {
  const [openSolutionModal, setOpenSolutionModal] = useState(false);
  const [openSmetaDesignModal, setOpenSmetaDesignModal] = useState(false);
  const handleOpenSolutionModal = () => setOpenSolutionModal(true);
  const handleOpenSmetaDesignModal = () => setOpenSmetaDesignModal(true);
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = useForm();
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const selectedFormValues = useSelector(
    (state) => state.formDataReducer.selectedFormValues
  );
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const solutionItems = useSelector((state) => state.formDataReducer.solutionItems);
  const designItems = useSelector((state) => state.formDataReducer.designItems);

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

  const onSubmit = (e) => {
    e.preventDefault();

    if (nextStep === "/flows") {
      dispatch(FormDataSliceActions.clearDesignAndSolutionItems());
      navigate(`${nextStep}`, { replace: true });
    } else {
      if(nextStep === 'smetaya-gonder-formu') {
        if(solutionItems.length > 0) {
          navigate(`?step=${nextStep}`, { replace: true });
        }else return;
      }else if(nextStep === 'islere-start-ver-formu') {
        if(designItems.length > 0) {
          navigate(`?step=${nextStep}`, { replace: true });
        }else return;
      }else{
          navigate(`?step=${nextStep}`, { replace: true });
      }
    }
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
    <form className="row my-4" onSubmit={onSubmit}>
      <div className="d-flex justify-content-end align-items-center gap-2 my-2">
        <button type="submit" className="btn btn-primary py-2">
          {nextStep === "smeta-dizayn-formu" && "Həlləri əlavə et"}
          {nextStep === "smetaya-gonder-formu" && "Smeta dizayn göndər"}
          {nextStep === "islere-start-ver-formu" && "Smetaya göndər"}
          {nextStep === "prosesi-tamamla-formu" && "İşlərə start ver"}
          {nextStep === "/flows" && "Prosesi tamamla"}
        </button>

        <button
          type="button"
          className="btn btn-danger py-2"
          onClick={handleCancelClick}
        >
          Ləğv et
        </button>
      </div>
      <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
        <label htmlFor="sorguNomresi">Sorğu nömrəsi*</label>
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
      <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
        <label htmlFor="tarix">Tarix*</label>
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
      <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
        <label htmlFor="musteriAdi">Müştəri adı*</label>
        <Select
          placeholder="Select type:"
          className="basic-multi-select"
          classNamePrefix="select"
          readOnly
          isDisabled={true}
          value={selectedFormValues?.musteriAdi}
        />
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
        <label htmlFor="icraTarixi">İcra tarixi*</label>
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
      <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
        <label htmlFor="layiheAdi">Layihə adı*</label>
        <Select
          placeholder="Select type:"
          className="basic-multi-select"
          classNamePrefix="select"
          readOnly
          isDisabled={true}
          value={selectedFormValues?.layiheAdi}
        />
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
        <label htmlFor="musteriNovu">Müştəri növü*</label>
        <Select
          placeholder="Select type:"
          className="basic-multi-select"
          classNamePrefix="select"
          readOnly
          isDisabled={true}
          value={selectedFormValues?.musteriNovu}
        />
      </div>
      <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
        <label htmlFor="layiheMeneceri">Layihə meneceri*</label>
        <Select
          placeholder="Select type:"
          className="basic-multi-select"
          classNamePrefix="select"
          readOnly
          isDisabled={true}
          value={selectedFormValues?.layiheMeneceri}
        />
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
        <label htmlFor="elaqeliSexs">Əlaqəli şəxs*</label>
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
      <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
        <label htmlFor="email">Email*</label>
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
      <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
        <label htmlFor="telNomresi">Telefon nömrəsi*</label>
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
      <div className="col-12 d-flex flex-column gap-1 mb-3">
        <label htmlFor="qeyd">Qeyd*</label>
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
          <label htmlFor="statusQeyd">Sənəd üzrə status qeydi*</label>
          <input
            type="text"
            className={
              errors.statusQeyd ? "form-control error-border" : "form-control"
            }
            id="statusQeyd"
            name="statusQeyd"
            {...register("statusQeyd", {
              required: "Sənəd üzrə status qeydi boş ola bilməz!",
            })}
          />
          {errors.statusQeyd && (
            <p className="error-text">{errors.statusQeyd.message}</p>
          )}
        </div>
      )}
      {validateStatusAndCancel && (
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-5">
          <label htmlFor="legvSebebi">Ləgv səbəbi*</label>
          <Controller
            name="legvSebebi"
            id="legvSebebi"
            control={control}
            rules={{
              required: "Ləğv səbəbi boş ola bilməz!",
            }}
            render={({ field }) => (
              <Select
                {...field}
                options={cancelListOption}
                placeholder="Select type:"
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
      {(currentStep === "islere-start-ver-formu" || currentStep === "prosesi-tamamla-formu") && <RevisionTable />}
      {(currentStep === "smeta-dizayn-formu" || currentStep === "smetaya-gonder-formu") && (
        <AddSolutionTable
          handleOpenSolutionModal={handleOpenSolutionModal}
          handleCloseSolutionModal={handleCloseSolutionModal}
          openSolutionModal={openSolutionModal}
        />
      )}
      {(currentStep === "smetaya-gonder-formu" || currentStep === "islere-start-ver-formu" || currentStep === "prosesi-tamamla-formu") && (
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
