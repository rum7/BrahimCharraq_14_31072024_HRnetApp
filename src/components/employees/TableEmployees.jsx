import { columns } from "@/components/employees/columns"
import { DataTable } from "@/components/employees/data-table" 

async function getData() {
    // Fetch data from your API here.
    return [
        {
            firstname: "first",
            lastname: "last",
            dateofbirth: "27/08/2000",
            department: "Engineering",
            startdate: "10/10/2024",
            street: "street",
            city: "city",
            state: "state",
            zipcode: "77777",
        },
        {
            firstname: "second",
            lastname: "last",
            dateofbirth: "27/08/2000",
            department: "Engineering",
            startdate: "10/10/2024",
            street: "street",
            city: "city",
            state: "state",
            zipcode: "77777",
        },
        // ...
    ]
}

const data = await getData()

export const TableEmployees = () => {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}