import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

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
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const [solutionUnit, setSolutionUnit] = useState(null);
  const { t } = useTranslation('flows');

  const mapOptions = (list, valueKey, labelKey) =>
    list?.map((item) => ({
      value: item[valueKey],
      label: item[labelKey],
    })) || [];

  const regionListOption = useMemo(
    () => mapOptions(formDatas?.regionList, "BOLGE_KOD", "BOLGE_ADI"),
    [formDatas?.regionList]
  );
  const solutionListOption = useMemo(
    () => mapOptions(formDatas?.solutionList, "heller_KOD", "heller_ADI"),
    [formDatas?.solutionList]
  );

  const handleSolutionModalSubmit = (data) => {
    dispatch(
      FormDataSliceActions.getSolutionItems({
        ...data,
        olcuVahidi: solutionUnit.heller_VAHID_KOD,
      })
    );
    reset();
    setSolutionUnit(null);
    handleClose();
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
            <h3 className="mb-4">{t("flow_table_add_title")}</h3>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="hell">{t("flow_solution_col1_label")}</label>
              <Controller
                name="hell"
                control={control}
                rules={{ required: t("flow_solution_col1_error") }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={solutionListOption}
                    placeholder={t("flow_select_placeholder")}
                    className={
                      errors.hell
                        ? "basic-multi-select error-border"
                        : "basic-multi-select"
                    }
                    classNamePrefix="select"
                    onChange={(selectedOption) => {
                      setSolutionUnit(
                        formDatas.solutionList.find(
                          (item) => item.heller_KOD === selectedOption.value
                        )
                      );
                      field.onChange(selectedOption);
                    }}
                  />
                )}
              />
              {errors.hell && (
                <p className="error-text">{errors.hell.message}</p>
              )}
            </div>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="olcuVahidi">
                {t("flow_solution_col4_label")}
              </label>
              <input
                type="text"
                className="form-control"
                id="olcuVahidi"
                name="olcuVahidi"
                readOnly
                value={solutionUnit?.heller_VAHID_KOD || ""}
              />
            </div>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="bolge">{t("flow_solution_col2_label")}</label>
              <Controller
                name="bolge"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={regionListOption}
                    placeholder={t("flow_select_placeholder")}
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
              <label htmlFor="miqdar">{t("flow_solution_col5_label")}</label>
              <input
                type="number"
                className={
                  errors.miqdar ? "form-control error-border" : "form-control"
                }
                id="miqdar"
                name="miqdar"
                {...register("miqdar", {
                  required: t("flow_solution_col5_error"),
                })}
              />
              {errors.miqdar && (
                <p className="error-text">{errors.miqdar.message}</p>
              )}
            </div>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="deadline">{t("flow_solution_col3_label")}</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className={
                  errors.deadline ? "form-control error-border" : "form-control"
                }
                {...register("deadline", {
                  required: t("flow_solution_col3_error"),
                  validate: (value) => {
                    const tarixValue = new Date().toISOString().split("T")[0];
                    if (!tarixValue) return true;
                    return value >= tarixValue || t("flow_icra_tarixi_error2");
                  },
                })}
              />
              {errors.deadline && (
                <p className="error-text">{errors.deadline.message}</p>
              )}
            </div>

            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="qeyd">{t("flow_solution_col6_label")}</label>
              <input
                type="text"
                className="form-control"
                id="qeyd"
                name="qeyd"
                {...register("qeyd")}
              />
            </div>

            <div className="d-flex justify-content-end gap-2 mt-2">
              <button
                className="btn btn-primary"
                onClick={handleSubmit(handleSolutionModalSubmit)}
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
