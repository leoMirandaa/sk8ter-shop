import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { deleteImage, deleteProduct } from '../helpers';

// import { deleteUser } from '../helpers';
// import './tableUI.css'

export const TableUI = ({ products, title, getProducts }) => {

  const navigate = useNavigate()
  const toast = useRef(null);

  const handleUpdate = (rowData) => {
    // console.log('handleUpdate ', rowData);
    navigate(`update/${rowData._id}`)
  }

  const handleDeleteProduct = async (rowData) => {
    const response = await deleteProduct(rowData._id)

    let formdata = new FormData()
    formdata.append('filename', rowData.image)
    console.log('rowData.image ', rowData.image);
    console.log('formdata ', formdata);
    await deleteImage(formdata)
    // console.log('response handleDeleteUser ', response)
    toast.current.show({severity:'success', summary: 'Success', detail:'Product Deleted', life: 3000});
    getProducts();
  }

  const imageBodyTemplate = (rowData) => {
    return <img
      width="150px"
      src={`http://127.0.0.1:5000/static/${rowData.image}`}
      onError={(e) => e.target.src='data:image/png;base64,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'}
      alt={rowData.image}
      className="product-image"
    />
  }

  const actionGenderTemplate = (rowData) => {
    return rowData.gender == "FM" ? "Female" : "Male"
  }

  const actionCategoryTemplate = (rowData) => {
    switch (rowData.category) {
      case "Gs":
        return "Girls"

      case "Ts":
        return "Teen girls"

      case "Wn":
        return "Women"

      case "Bs":
        return "Boys"

      case "Mn":
        return "Men"
    }
  }

  const actionStyleTypeTemplate = (rowData) => {
    switch (rowData.styleType) {
      case "Basic":
        return "Basic"

      case "Bohemian":
        return "Bohemian"

      case "Casual":
        return "Casual"

      case "Elegant":
        return "Elegant"

      case "Sexy":
        return "Sexy"

      case "Vintage":
        return "Vintage"
    }
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className=" p-button-text p-button-primary p-button-rounded mr-2"
          onClick={() => handleUpdate(rowData)}
        />

        <Button
          icon="pi pi-trash"
          className="p-button-text p-button-danger p-button-rounded"
          onClick={() => handleDeleteProduct(rowData)}
        />
      </>
    );
  }

  return (
    <>
      <Toast ref={toast} />

        <Card
          title={title}
          // className="min-w-full md:min-w-0">
          className="w-full lg:w-10"
        >
        {/* <Card title={title}> */}
          <DataTable
            value={products}
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
              <Column sortable field="title" header="Title"></Column>
              <Column field="price" header="Price"></Column>
              {/* <Column field="image" header="Image"></Column> */}
              <Column header="Image" body={imageBodyTemplate}></Column>
              <Column body={actionStyleTypeTemplate} field="styleType" header="Style Type"></Column>
              {/* <Column field="gender" header="Gender"></Column> */}
              <Column body={actionGenderTemplate} field="gender" header="Gender"></Column>

              <Column field="stock" header="Stock"></Column>
              <Column field="discount" header="Discount"></Column>
              <Column body={actionCategoryTemplate} field="category" header="Category"></Column>

              <Column body={actionBodyTemplate} header="Actions"></Column>
          </DataTable>
        </Card>
    </>
  )
}
