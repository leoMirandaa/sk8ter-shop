import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import "../../styles/admin/tableSkeleton.scss";

export const TableSkeleton = ({ fields }) => {
  const products = Array.from({ length: 8 });

  const bodyTemplate = () => {
    return <Skeleton></Skeleton>;
  };

  const title = () => {
    return (
      <div className="skeleton__container">
        {[8, 23, 8.5].map((item) => (
          <Skeleton
            key={`skeleton-table-header-${item}`}
            width={`${item}rem`}
            height="2.5rem"
          />
        ))}
      </div>
    );
  };

  return (
    <Card title={title}>
      <DataTable
        value={products}
        stripedRows
      >
        {fields.map((field: any) => (
          <Column
            key={`skeleton-table-item-${field}`}
            field={field}
            header={field.charAt(0).toUpperCase() + field.slice(1)}
            body={bodyTemplate}
          />
        ))}
        <Column
          // field={field}
          header="Actions"
          body={bodyTemplate}
        />
      </DataTable>
    </Card>
  );
};
