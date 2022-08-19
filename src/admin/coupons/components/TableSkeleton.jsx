import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { Skeleton } from 'primereact/skeleton';

export const TableSkeleton = ({ fields }) => {

  const products = Array.from({ length: 6 });

  const bodyTemplate = () => {
    return <Skeleton></Skeleton>
  }

  return (
    <>
      <DataTable
        value={products}
        className="p-datatable-striped mt-6 w-full lg:w-10"
        style={{ width: '95%'}}
        breakpoint="950px"
      >
        {
          fields.map( field =>  (
            <Column key={ field } field={ field } header={ field } style={{ width: '25%' }} body={bodyTemplate}></Column>
          ))
        }
      </DataTable>
    </>
  )
}
