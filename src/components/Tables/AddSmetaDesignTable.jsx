import { useSelector } from "react-redux";
import AddSmetaDesign from "../Modals/AddSmetaDesign";
import { Pencil, Trash2 } from "lucide-react";

const AddSmetaDesignTable = ({
  handleOpenSmetaDesignModal,
  handleCloseSmetaDesignModal,
  openSmetaDesignModal,
}) => {
  const designItems = useSelector((state) => state.formDataReducer.designItems);

  return (
    <div className="col-12 mb-3">
      {designItems.length === 0 && <p className="error-text mb-2">Smeta dizayn əlavə olunmalıdır!</p>}
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {designItems && designItems.length > 0 ? (
                designItems.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.fileUrl}</td>
                    <td>{item.fileTitle}</td>
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
                  <td colSpan="4" className="text-center text-muted">
                    Fayl əlavə olunmayıb!
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

export default AddSmetaDesignTable;
