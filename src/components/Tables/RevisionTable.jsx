import { useTranslation } from "react-i18next";

const RevisionTable = () => {
  const { t } = useTranslation('flows');

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
                <th>{t("flow_revision_table_col1")}</th>
                <th>{t("flow_revision_table_col2")}</th>
                <th>{t("flow_revision_table_col3")}</th>
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