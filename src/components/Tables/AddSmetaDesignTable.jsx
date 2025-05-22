import AddSmetaDesign from "../Modals/AddSmetaDesign";

const AddSmetaDesignTable = ({ handleOpenSmetaDesignModal,handleCloseSmetaDesignModal,openSmetaDesignModal }) => {
  return (
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
  );
};

export default AddSmetaDesignTable;
