import { columns } from "@/components/employees/columns"
import { DataTable } from "@/components/employees/data-table" 
import { useEmployeesStore } from "@/stores/employeesStore"


export const TableEmployees = () => {
    const employees = useEmployeesStore((state) => state.employees)       

    return (
        <div className="w-full mx-auto py-10">
            <DataTable columns={columns} data={employees} />
        </div>
    )
}