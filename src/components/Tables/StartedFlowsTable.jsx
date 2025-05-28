import { DataGrid } from '@mui/x-data-grid';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function StartedFlowsTable() {
  const smetaData = useSelector(state => state.flowSliceReducer.smetaData);
  const { t } = useTranslation("flows");
  console.log(smetaData);
  
  const rows = [
    { id: 's1', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's2', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's3', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's4', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's5', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's6', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's7', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's8', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's9', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
    { id: 's10', title: 'sadas', name: 'sadasdas', email: "ukdasnk@gmail.com" },
  ];  

  const columns = Object.keys(rows[0]).map((key) => ({
    field: key,
    headerName: key.charAt(0).toUpperCase() + key.slice(1),
    flex: 1,
  }));

  const handleRowClick = (params) => {
    console.log(params);
    
    // navigate(`/flows/start`);
  };

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <div className="card pb-5 pt-4 px-4">
        <div className='d-flex align-items-center justify-content-between mb-4 mt-2'>
          <h3>{t("all_flows")}</h3>
          <div className='d-flex justify-content-end align-items-center'>
            <Link to="/flows/start" className='start-flow-button d-flex align-items-center btn btn-primary gap-1'>
              <Play width={16} color='#fff' />
              {t("flow_start")}
            </Link>
          </div>
        </div>
        <DataGrid 
          className='worksonme-table' 
          columns={columns} 
          rows={rows} 
          initialState={{
            ...rows.initialState,
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25, { value: -1, label: 'All' }]}          
          onRowClick={handleRowClick}
          showToolbar 
        />
      </div>
    </div>
  );
}