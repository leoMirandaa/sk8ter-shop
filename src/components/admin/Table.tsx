import { useRef } from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";

export const Table = ({
  users,
  columns,
  title,
  handleUpdate,
  handleDelete,
}) => {
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
          value={users}
          size="small"
          scrollable
          selectionMode="single"
          selection
          stripedRows
          dataKey="id"
          scrollHeight="400px"
          breakpoint="950px"
          paginator
          rows={8}
          rowsPerPageOptions={[8, 15, 20]}
        >
          {columns.map((field) => (
            <Column
              key={field}
              field={field.toLowerCase()}
              header={field}
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
