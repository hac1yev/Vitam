import { DataGrid } from '@mui/x-data-grid';
// import { useNavigate } from 'react-router-dom';

export default function WorksonmeTable() {
  // const navigate = useNavigate();

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
  ];

  const handleRowClick = (params) => {
    console.log(params);
    
    // navigate(`/flows/start`);
  };

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <div className="card pb-5 pt-4 px-4">
        <h3 className='mb-4 mt-2'>Üzerimdeki İşler</h3>
        <DataGrid 
          className='worksonme-table' 
          columns={[
            { field: 'id' },
            { field: 'title' },
            { field: 'name' },
            { field: 'email' }
          ]} 
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