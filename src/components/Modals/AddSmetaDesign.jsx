import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";

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

export default function AddSmetaDesign({ handleClose, open }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSmetaDesignModalSubmit = (data) => {
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
          <div className="row">
            <h3 className="mb-4">Smeta dizayn əlavə et</h3>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="fileUrl">Fayl linki*</label>
              <input
                type="url"
                className={errors.fileUrl ? "form-control error-border" : "form-control"}
                id="fileUrl"
                name="fileUrl"
                {...register("fileUrl", { required: "Fayl linki boş ola bilməz" })}
              />
              {errors.fileUrl && (
                <p className="error-text">{errors.fileUrl.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="fileTitle">Fayl başlığı*</label>
              <input
                type="text"
                className={errors.fileTitle ? "form-control error-border" : "form-control"}
                id="fileTitle"
                name="fileTitle"
                {...register("fileTitle", { required: 'Fayl başlığı boş ola bilməz' })}
              />
              {errors.fileTitle && (
                <p className="error-text">{errors.fileTitle.message}</p>
              )}
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button
                className="btn btn-primary"
                onClick={handleSubmit(handleSmetaDesignModalSubmit)}
              >
                Əlavə et
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-light"
                style={{ color: "#666", border: "1px solid #666" }}
              >
                Ləğv et
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
