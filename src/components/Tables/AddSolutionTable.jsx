import { useSearchParams } from "react-router-dom";
import AddSolution from "../Modals/AddSolutions";
import { useSelector } from "react-redux";
import { Delete, Edit, Pencil, Trash2 } from "lucide-react";

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

  return (
    <div className="col-12 my-3">
      {solutionItems.length === 0 && <p className="error-text mb-2">Həll əlavə olunmalıdır!</p>}
      <div className="card">
        <div className="card-body">
          {step === "smeta-dizayn-formu" && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenSolutionModal}
            >
              Ekle
            </button>
          )}
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {solutionItems && solutionItems.length > 0 ? (
                solutionItems.map((solution, index) => (
                  <tr key={index}>
                    <td>{solution.hell.label}</td>
                    <td>{solution.bolge.label}</td>
                    <td>{solution.olcuVahidi}</td>
                    <td>{solution.miqdar}</td>
                    <td>{solution.deadline}</td>
                    <td>{solution.qeyd}</td>
                    <td className="d-flex align-items-center justify-content-center gap-1">
                      <button type="button" className="btn btn-warning px-2">
                        <Pencil width={20} />
                      </button>
                      <button type="button" className="btn btn-danger px-2">
                        <Trash2 width={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    Həll əlavə olunmayıb!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddSolutionTable;
