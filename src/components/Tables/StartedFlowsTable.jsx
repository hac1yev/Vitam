import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const VISIBLE_FIELDS = ['id', 'avatar', 'website', 'email', 'name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function StartedFlowsTable() {

  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <div style={{ height: 600, width: '100%' }}>
      <div className='d-flex justify-content-end align-items-center my-3 w-100'>
        <Link to="/flows/" className='start-flow-button d-flex align-items-center btn btn-primary gap-1'>
            <Play width={16} color='#fff' />
            Başlat
        </Link>
      </div>
      <DataGrid className='worksonme-table' {...data} loading={loading} showToolbar />
    </div>
  );
}