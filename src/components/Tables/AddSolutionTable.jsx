import { useSearchParams } from "react-router-dom";
import AddSolution from "../Modals/AddSolutions";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import EditSolution from "../Modals/EditSolution";
import { FormDataSliceActions } from "../../store/formData-slice";
import { useTranslation } from "react-i18next";

const AddSolutionTable = ({
  handleOpenSolutionModal,
  handleCloseSolutionModal,
  openSolutionModal,
}) => {
  const solutionItems = useSelector(
    (state) => state.formDataReducer.solutionItems
  );
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");
  const [openEditSolutionModal, setOpenEditSolutionModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const dispatch = useDispatch();
  const { t } = useTranslation("flows");

  const handleCloseSolutionEditModal = useCallback(() => {
    setOpenEditSolutionModal(false);
  }, []);

  const handleEditItem = (item) => {
    setOpenEditSolutionModal(true);
    setItemToEdit(item);
  };

  const handleDeleteItem = (id) => {
    dispatch(FormDataSliceActions.deleteSolutionItem({ id }));
  };

  return (
    <>
      <div className="col-12 my-3">
        {solutionItems.length === 0 && (
          <p className="error-text mb-2">{t("flow_solution_required")}</p>
        )}
        <div className="card">
          <div className="card-body">
            {step === "smeta-dizayn-formu" && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleOpenSolutionModal}
              >
                {t("flow_table_add_button")}
              </button>
            )}
            <table
              id="datatables-buttons"
              className="table table-striped"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>{t("flow_solution_table_col1")}</th>
                  <th>{t("flow_solution_table_col2")}</th>
                  <th>{t("flow_solution_table_col3")}</th>
                  <th>{t("flow_solution_table_col4")}</th>
                  <th>{t("flow_solution_table_col5")}</th>
                  <th>{t("flow_solution_table_col6")}</th>
                  {step === "smeta-dizayn-formu" && <th></th>}
                </tr>
              </thead>
              <tbody>
                {solutionItems && solutionItems.length > 0 ? (
                  solutionItems.map((solution) => (
                    <tr key={solution.hell.value}>
                      <td>{solution.hell.label}</td>
                      <td>{solution?.bolge?.label || ""}</td>
                      <td>{solution.olcuVahidi}</td>
                      <td>{solution.miqdar}</td>
                      <td>{solution.deadline}</td>
                      <td>{solution.qeyd}</td>
                      {step === "smeta-dizayn-formu" && (
                        <td className="d-flex align-items-center justify-content-center gap-1">
                          <button
                            onClick={handleEditItem.bind(null, solution)}
                            className="btn btn-warning px-2"
                            type="button"
                          >
                            <Pencil width={20} />
                          </button>
                          <button
                            onClick={handleDeleteItem.bind(
                              null,
                              solution.hell.value
                            )}
                            className="btn btn-danger px-2"
                            type="button"
                          >
                            <Trash2 width={20} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">
                      {t("flow_solution_no_row")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openSolutionModal && (
        <AddSolution
          handleClose={handleCloseSolutionModal}
          open={openSolutionModal}
        />
      )}
      {openEditSolutionModal && (
        <EditSolution
          handleClose={handleCloseSolutionEditModal}
          open={openEditSolutionModal}
          itemToEdit={itemToEdit}
        />
      )}
    </>
  );
};

export default AddSolutionTable;
