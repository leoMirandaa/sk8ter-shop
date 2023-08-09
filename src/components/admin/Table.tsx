import { useRef } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";

export const Table = ({ data, columns, title, handleUpdate, handleDelete }) => {
  const toast = useRef(null);

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          className="mr-2"
          icon="pi pi-pencil"
          severity="secondary"
          text
          rounded
          onClick={() => handleUpdate(rowData._id)}
        />
        <Button
          icon="pi pi-trash"
          severity="danger"
          text
          rounded
          onClick={(e) => handleDelete(e, rowData._id)}
        />
      </>
    );
  };

  return (
    <>
      <Toast ref={toast} />

      <Card
        title={title}
        className="animate__animated animate__fadeIn"
        style={
          {
            // border: "solid 1px var(--surface-border)",
          }
        }
      >
        <DataTable
          paginator
          scrollable
          selection
          stripedRows
          dataKey="id"
          // breakpoint="950px"
          size="small"
          selectionMode="single"
          scrollHeight="400px"
          rows={8}
          value={data}
          rowsPerPageOptions={[8, 15, 20]}
        >
          {columns.map((field) => (
            <Column
              key={field}
              // field={field.toLowerCase()}
              field={field}
              header={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          ))}

          <Column
            body={actionBodyTemplate}
            header="Actions"
          />
        </DataTable>
      </Card>
    </>
  );
};
