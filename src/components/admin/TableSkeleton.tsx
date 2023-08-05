import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";

export const TableSkeleton = ({ fields }) => {
  const products = Array.from({ length: 8 });

  const bodyTemplate = () => {
    return <Skeleton></Skeleton>;
  };

  const title = () => {
    return (
      <div className="flex justify-content-between">
        {[8, 23, 8.5].map((item) => (
          <Skeleton
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
            key={field}
            field={field}
            header={field}
            body={bodyTemplate}
          />
        ))}
      </DataTable>
    </Card>
  );
};
