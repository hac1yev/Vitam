import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddSolution({ handleClose, open }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSolutionModalSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="row" onSubmit={handleSubmit(handleSolutionModalSubmit)}>
            <h3 className="mb-4">Həlləri əlavə et</h3>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="hell">Həll adı*</label>
              <Controller
                name="hell"
                control={control}
                rules={{ required: "Hell adı boş ola bilməz!" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Select type:"
                    className={
                      errors.hell
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
              {errors.hell && (
                <p className="error-text">{errors.hell.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="olcuVahidi">Ölçü vahidi*</label>
              <input
                type="text"
                className="form-control"
                id="olcuVahidi"
                name="olcuVahidi"
                {...register("olcuVahidi")}
              />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="bolge">Bölgə*</label>
              <Controller
                name="bolge"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Select type:"
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                  />
                )}
              />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="miqdar">Miqdar*</label>
              <input
                type="number"
                className={errors.miqdar ? "form-control error-border" : "form-control"}
                id="miqdar"
                name="miqdar"
                {...register("miqdar", { required: 'Miqdar boş ola bilməz' })}
              />
              {errors.miqdar && (
                <p className="error-text">{errors.miqdar.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="deadline">Çatdırılma tarixi*</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className={errors.deadline ? "form-control error-border" : "form-control"}
                {...register("deadline", { required: 'Çatdırılma tarixi boş ola bilməz' })}
              />
              {errors.deadline && (
                <p className="error-text">{errors.deadline.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="miqdar">Qeyd*</label>
              <input
                type="text"
                className="form-control"
                id="qeyd"
                name="qeyd"
                {...register("qeyd")}
              />
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button className="btn btn-primary">Əlavə et</button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-light"
                style={{ color: "#666", border: "1px solid #666" }}
              >
                Ləğv et
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}