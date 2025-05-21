import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = ['id', 'avatar', 'website', 'email', 'name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function WorksonmeTable() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid className='worksonme-table' {...data} loading={loading} showToolbar />
    </div>
  );
}