
const RevisionTable = () => {
  return (
    <div className="col-12 my-3">
      <div className="card">
        <div className="card-body">
          <table
            id="datatables-buttons"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Reviziya nömrəsi</th>
                <th>Sorğu nömrəsi</th>
                <th>Status</th>
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

export default RevisionTable;
