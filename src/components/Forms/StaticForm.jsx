import { useCallback, useState } from "react";
import BreadcrumbNav from "../Breadcrumb/BreadcrumbNav";
import Select from "react-select";
import AddSolution from "../Modals/AddSolutions";
import AddSmetaDesign from "../Modals/AddSmetaDesign";
import { Controller, useForm } from "react-hook-form";

const StaticForm = ({ setActiveStep }) => {
  const [openSolutionModal, setOpenSolutionModal] = useState(false);
  const [openSmetaDesignModal, setOpenSmetaDesignModal] = useState(false);
  const handleOpenSolutionModal = () => setOpenSolutionModal(true);
  const handleOpenSmetaDesignModal = () => setOpenSmetaDesignModal(true);
  const [validateStatusAndCancel, setValidateStatusAndCancel] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const tarix = watch("tarix");

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

  const handleCancelClick = async () => {
    setValidateStatusAndCancel(true);
    const valid = await trigger(["statusQeyd", "legvSebebi"]);
    if (valid) {
      console.log("These fields are valid!");
    }
  };

  return (
    <main className="content px-4">
      <BreadcrumbNav />
      <form className="row my-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-end align-items-center gap-2 my-2">
          <button className="btn btn-primary py-2">Həlləri əlavə et</button>
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
                if (!tarix) return true; // if tarix is empty, skip comparison
                return (
                  value >= tarix || "İcra tarixi, tarixdən kiçik ola bilməz!"
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
              required: validateStatusAndCancel
                ? "Sənəd üzrə status qeydi boş ola bilməz!"
                : false,
            })}
          />
          {errors.statusQeyd && (
            <p className="error-text">{errors.statusQeyd.message}</p>
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column gap-1 mb-5">
          <label htmlFor="legvSebebi">Ləgv səbəbi*</label>
          <Controller
            name="legvSebebi"
            id="legvSebebi"
            control={control}
            rules={{
              required: validateStatusAndCancel
                ? "Ləğv səbəbi boş ola bilməz!"
                : false,
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
        </div>
        <div className="col-12 mb-3">
          <div className="card">
            <div className="card-body">
              <table
                id="datatables-buttons"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Reviziya nömrəsi</th>
                    <th>Sorğu nömrəsi</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOpenSolutionModal}
              >
                Ekle
              </button>
              <AddSolution
                handleClose={handleCloseSolutionModal}
                open={openSolutionModal}
              />
              <table
                id="datatables-buttons"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Həll adı</th>
                    <th>Bölgə</th>
                    <th>Ölçü vahidi</th>
                    <th>Miqdar</th>
                    <th>Çatdırılma tarixi</th>
                    <th>Qeyd</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOpenSmetaDesignModal}
              >
                Ekle
              </button>
              <AddSmetaDesign
                handleClose={handleCloseSmetaDesignModal}
                open={openSmetaDesignModal}
              />
              <table
                id="datatables-buttons"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Fayl linki</th>
                    <th>Fayl başlığı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default StaticForm;
