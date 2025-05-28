import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

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
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { i18n,t } = useTranslation('flows'); 

  const handleSmetaDesignModalSubmit = (data) => {
    dispatch(FormDataSliceActions.getDesignItems(data));
    reset();
    handleClose();
  };

  useEffect(() => {
     const subscription = i18n.on('languageChanged', () => {
        clearErrors()  
      });

      return () => {
        i18n.off('languageChanged', subscription);
      };
  }, [clearErrors, i18n]);

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
            <h3 className="mb-4">{t("flow_table_add_design")}</h3>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="fileUrl">{t("flow_design_table_col1")}*</label>
              <input
                type="url"
                className={
                  errors.fileUrl ? "form-control error-border" : "form-control"
                }
                id="fileUrl"
                name="fileUrl"
                {...register("fileUrl", {
                  required: t("flow_design_col1_error"),
                })}
              />
              {errors.fileUrl && (
                <p className="error-text">{errors.fileUrl.message}</p>
              )}
            </div>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="fileTitle">{t("flow_design_table_col2")}*</label>
              <input
                type="text"
                className={
                  errors.fileTitle
                    ? "form-control error-border"
                    : "form-control"
                }
                id="fileTitle"
                name="fileTitle"
                {...register("fileTitle", {
                  required: t("flow_design_col2_error"),
                })}
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
                {t("flow_table_add_button")}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-light"
                style={{ color: "#666", border: "1px solid #666" }}
              >
                {t("flow_table_cancel_button")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
