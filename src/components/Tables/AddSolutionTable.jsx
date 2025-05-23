import { useSearchParams } from "react-router-dom";
import AddSolution from "../Modals/AddSolutions";

const AddSolutionTable = ({ handleOpenSolutionModal,handleCloseSolutionModal,openSolutionModal }) => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className="col-12 mb-3">
      <div className="card">
        <div className="card-body">
          {step === "smeta-dizayn-formu" && <button
            type="button"
            className="btn btn-primary"
            onClick={handleOpenSolutionModal}
          >
            Ekle
          </button>}
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
  );
};

export default AddSolutionTable;
