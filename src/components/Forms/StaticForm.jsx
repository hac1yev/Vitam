import { useCallback, useEffect, useState } from "react";
import BreadcrumbNav from "../Breadcrumb/BreadcrumbNav";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import AddSolutionTable from "../Tables/AddSolutionTable";
import AddSmetaDesignTable from "../Tables/AddSmetaDesignTable";
import RevisionTable from "../Tables/RevisionTable";

const StaticForm = ({ setActiveStep,step }) => {
  const [openSolutionModal, setOpenSolutionModal] = useState(false);
  const [openSmetaDesignModal, setOpenSmetaDesignModal] = useState(false);
  const handleOpenSolutionModal = () => setOpenSolutionModal(true);
  const handleOpenSmetaDesignModal = () => setOpenSmetaDesignModal(true);
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const { register, handleSubmit, control, watch, trigger, clearErrors, getValues, formState: { errors } } = useForm();
  const watchedFields = watch();

  useEffect(() => {
    Object.entries(errors).forEach(([fieldName, error]) => {
      const value = watchedFields[fieldName];
      if (value && !error?.message) {
        clearErrors(fieldName);
      }
    });
  }, [watchedFields, errors, clearErrors]);

  const handleCloseSolutionModal = useCallback(() => {
    setOpenSolutionModal(false);
  }, []);

  const handleCloseSmetaDesignModal = useCallback(() => {
    setOpenSmetaDesignModal(false);
  }, []);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleAddSolutionClick = async () => {
    setValidateStatusAndCancel(false);
    clearErrors(["statusQeyd", "legvSebebi"]);
    await trigger(["musteriAdi","icraTarixi","layiheAdi","musteriNovu","layiheMeneceri"]);
  };

  const handleCancelClick = async () => {
    setValidateStatusAndCancel(true);

    setTimeout(async () => {
      clearErrors(["musteriAdi", "icraTarixi", "layiheAdi", "musteriNovu", "layiheMeneceri"]);
      const valid = await trigger(["statusQeyd", "legvSebebi"]);

      if (!valid) {
        console.log("Ləğv səbəbi və status qeydi sahələri tələb olunur!");
      }
    }, 0);
  };

  return (
    <main className="content px-4">
      <BreadcrumbNav />
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
            value={"S-AZ-101438"}
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
                options={options}
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
                return value >= tarixValue || "İcra tarixi, tarixdən kiçik ola bilməz!";
              }

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
                options={options}
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
                options={options}
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
                options={options}
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
        {validateStatusAndCancel && <div className="col-12 col-lg-8 d-flex flex-column gap-1 mb-5">
          <label htmlFor="statusQeyd">Sənəd üzrə status qeydi*</label>
          <input
            type="text"
            className={
              errors.statusQeyd ? "form-control error-border" : "form-control"
            }
            id="statusQeyd"
            name="statusQeyd"
            {...register("statusQeyd", {
              required: "Sənəd üzrə status qeydi boş ola bilməz!"
            })}
          />
          {errors.statusQeyd && (
            <p className="error-text">{errors.statusQeyd.message}</p>
          )}
        </div>}
        {validateStatusAndCancel && <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-5">
          <label htmlFor="legvSebebi">Ləgv səbəbi*</label>
          <Controller
            name="legvSebebi"
            id="legvSebebi"
            control={control}
            rules={{
              required: "Ləğv səbəbi boş ola bilməz!"
            }}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
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
        </div>}
        {step === 'start-to-work-form' && <RevisionTable />}
        {step === 'smeta-design-form' && <AddSolutionTable 
          handleOpenSolutionModal={handleOpenSolutionModal}
          handleCloseSolutionModal={handleCloseSolutionModal}
          openSolutionModal={openSolutionModal}
        />}
        {step === 'send-to-smeta-form' && <AddSmetaDesignTable
          handleOpenSmetaDesignModal={handleOpenSmetaDesignModal}
          handleCloseSmetaDesignModal={handleCloseSmetaDesignModal}
          openSmetaDesignModal={openSmetaDesignModal}
        />}
      </form>
    </main>
  );
};

export default StaticForm;