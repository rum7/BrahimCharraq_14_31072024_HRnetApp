import { columns } from "@/components/employees/columns"
import { DataTable } from "@/components/employees/data-table" 
import { employeesData } from "@/data/mockapi"
import { useEffect, useState } from "react"


// async function getData() {
//     // Fetch data from your API here.
//     return employeesData
// }

// const data = await getData()

export const TableEmployees = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getStoredUsers = JSON.parse(localStorage.getItem('users')) || []
        setData(getStoredUsers)    
    }, [])
        

    return (
        // <div className="container mx-auto py-10">
        <div className="w-full mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}