import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { deleteCoupon } from '../helpers';

// import { deleteUser, } from '../helpers';
// import './tableUI.css'

export const Table = ({ coupons, title, getCoupons }) => {

  const navigate = useNavigate()
  const toast = useRef(null);

  const handleUpdate = (rowData) => {
    // console.log('handleUpdate ', rowData);
    navigate(`update/${rowData._id}`)
  }

  const handleDeleteCoupon = async (rowData) => {
    const response = await deleteCoupon(rowData._id)
    // console.log('response handleDeleteCoupon ', response)
    toast.current.show({severity:'success', summary: 'Success', detail:'Coupon deleted', life: 3000});
    getCoupons();
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button icon="pi pi-pencil" className=" p-button-text p-button-primary mr-2" onClick={() => handleUpdate(rowData)} />
        <Button icon="pi pi-trash" className="p-button-text p-button-danger" onClick={() => handleDeleteCoupon(rowData)} />
      </>
    );
  }

  return (
    <>
      <Toast ref={toast} />

        <Card title={title} className="w-full lg:w-10">
        {/* <Card title={title}> */}
          <DataTable
            value={coupons}
            size="small"
            // responsiveLayout="scroll"
            // scrollable
            selectionMode="single"
            selection
            stripedRows
            dataKey="id"
            // scrollHeight="400px"
            breakpoint="950px"
            paginator
            rows={8}
            rowsPerPageOptions={[8,15,20]}
          >
              {/* <Column field="_id" header="ID"></Column> */}
              <Column sortable field="code" header="Code"></Column>
              <Column field="discount" header="Discount"></Column>
              <Column body={actionBodyTemplate} header="Actions"></Column>
          </DataTable>
        </Card>
    </>
  )
}
