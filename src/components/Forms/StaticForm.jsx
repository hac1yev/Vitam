import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useNavigate } from "react-router-dom";
import { FlowSliceAction } from "../../store/flow-slice";

const StaticForm = () => {
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const dispatch = useDispatch();
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const { register,handleSubmit,control,watch,trigger,clearErrors,getValues,formState: { errors } } = useForm();
  const watchedFields = watch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("step")) {
      navigate("?step=helleri-elave-et-formu", { replace: true });
    }
  }, [navigate]);

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
            Həlləri əlavə et
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
            value={""}
            {...register("sorguNomresi")}
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="tarix">Tarix*</label>
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
          <label htmlFor="musteriAdi">Müştəri adı*</label>
          <Controller
            name="musteriAdi"
            control={control}
            rules={{ required: "Müştəri adı boş ola bilməz!" }}
            render={({ field }) => (
              <Select
                {...field}
                options={customerListOption}
                placeholder="Select type:"
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
          <label htmlFor="icraTarixi">İcra tarixi*</label>
          <input
            type="date"
            id="icraTarixi"
            name="icraTarixi"
            className={
              errors.icraTarixi ? "form-control error-border" : "form-control"
            }
            {...register("icraTarixi", {
              required: "İcra tarixi boş ola bilməz!",
              validate: (value) => {
                const tarixValue = getValues("tarix");
                if (!tarixValue) return true;
                return (
                  value >= tarixValue ||
                  "İcra tarixi, tarixdən kiçik ola bilməz!"
                );
              },
            })}
          />
          {errors.icraTarixi && (
            <p className="error-text">{errors.icraTarixi.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="layiheAdi">Layihə adı*</label>
          <Controller
            name="layiheAdi"
            control={control}
            rules={{ required: "Layihe adı boş ola bilməz!" }}
            render={({ field }) => (
              <Select
                {...field}
                options={projectListOption}
                placeholder="Select type:"
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
          <label htmlFor="musteriNovu">Müştəri növü*</label>
          <Controller
            name="musteriNovu"
            control={control}
            rules={{ required: "Müştəri növü boş ola bilməz!" }}
            render={({ field }) => (
              <Select
                {...field}
                options={customerTypeOption}
                placeholder="Select type:"
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
          <label htmlFor="layiheMeneceri">Layihə meneceri*</label>
          <Controller
            name="layiheMeneceri"
            id="layiheMeneceri"
            control={control}
            rules={{ required: "Layihə meneceri boş ola bilməz!" }}
            render={({ field }) => (
              <Select
                {...field}
                options={projectManagerOption}
                placeholder="Select type:"
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
          <label htmlFor="elaqeliSexs">Əlaqəli şəxs*</label>
          <input
            type="text"
            className="form-control"
            id="elaqeliSexs"
            name="elaqeliSexs"
            {...register("elaqeliSexs")}
          />
        </div>
        <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-3">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email")}
            name="email"
          />
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-3">
          <label htmlFor="telNomresi">Telefon nömrəsi*</label>
          <input
            type="text"
            className="form-control"
            id="telNomresi"
            name="telNomresi"
            {...register("telNomresi")}
          />
        </div>
        <div className="col-12 d-flex flex-column gap-1 mb-3">
          <label htmlFor="qeyd">Qeyd*</label>
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
      </form>
    </div>
  );
};

export default StaticForm;
