import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EditSolution = ({ handleClose, open, itemToEdit }) => {
  const { register,handleSubmit,control,reset,formState: { errors } } = useForm({
    defaultValues: {
        hell: itemToEdit?.hell || null,
        bolge: itemToEdit?.bolge || null,
        miqdar: itemToEdit?.miqdar || "",
        deadline: itemToEdit?.deadline || "",
        qeyd: itemToEdit?.qeyd || "",
    }
  });
  const dispatch = useDispatch();
  const formDatas = useSelector((state) => state.formDataReducer.formDatas);
  const [solutionUnit,setSolutionUnit] = useState({});
  const { t } = useTranslation('flows');

  const mapOptions = (list, valueKey, labelKey) =>
    list?.map(item => ({
      value: item[valueKey],
      label: item[labelKey],
  })) || [];

  const regionListOption = useMemo(() => mapOptions(formDatas?.regionList, 'BOLGE_KOD', 'BOLGE_ADI'), [formDatas?.regionList]);
  const solutionListOption = useMemo(() => mapOptions(formDatas?.solutionList, 'heller_KOD', 'heller_ADI'), [formDatas?.solutionList]);

  const handleEditSolutionModalSubmit = (data) => {    
    dispatch(FormDataSliceActions.editSolutionItems({ hell_kod: itemToEdit.hell.value, data: { ...data, olcuVahidi: solutionUnit.heller_VAHID_KOD } }));
    reset();
    setSolutionUnit(null);
    handleClose();
  };

  useEffect(() => {
    if (itemToEdit?.hell?.value) {
        const matched = formDatas.solutionList.find(
        (item) => item.heller_KOD === itemToEdit.hell.value
        );
        setSolutionUnit(matched);
    }
  }, [itemToEdit, formDatas.solutionList]);
  
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
              <label htmlFor="hell">{t("flow_solution_table_col1")}</label>
              <Controller
                name="hell"
                control={control}
                rules={{ required: t("flow_solution_col1_error") }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={solutionListOption}
                    placeholder="Select type:"
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
              <label htmlFor="olcuVahidi">{t("flow_solution_table_col3")}</label>
              <input
                type="text"
                className="form-control"
                id="olcuVahidi"
                name="olcuVahidi"
                readOnly
                value={solutionUnit.heller_VAHID_KOD || ""}
            />
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="bolge">{t("flow_solution_table_col2")}</label>
              <Controller
                name="bolge"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={regionListOption}
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
              <label htmlFor="miqdar">{t("flow_solution_table_col4")}</label>
              <input
                type="number"
                className={errors.miqdar ? "form-control error-border" : "form-control"}
                id="miqdar"
                name="miqdar"
                {...register("miqdar", { required: t("flow_solution_col5_error" )})}
              />
              {errors.miqdar && (
                <p className="error-text">{errors.miqdar.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="deadline">{t("flow_solution_table_col5")}</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className={
                  errors.deadline ? "form-control error-border" : "form-control"
                }
                {...register("deadline", {
                  required: t("flow_solution_col3_error"),
                })}
              />
              {errors.deadline && (
                <p className="error-text">{errors.deadline.message}</p>
              )}
            </div>
            <div className="col-sm-6 d-flex flex-column gap-1 mb-3">
              <label htmlFor="miqdar">{t("flow_solution_table_col6")}</label>
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
                onClick={handleSubmit(handleEditSolutionModalSubmit)}
              >
                {t("flow_table_edit_button")}
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
};

export default EditSolution;