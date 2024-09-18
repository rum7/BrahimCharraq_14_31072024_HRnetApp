import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

export const columns = [
    {
        accessorKey: "firstname",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Firstname
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "lastname",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Lastname
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "dateofbirth",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date of birth
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        sortingFn: (rowA, rowB, columnId) => {            
            const dateA = parseDate(rowA.original[columnId])
            const dateB = parseDate(rowB.original[columnId])
            return dateB - dateA
        },
    },
    {
        accessorKey: "department",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Department
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "startdate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Start date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        sortingFn: (rowA, rowB, columnId) => {            
            const dateA = parseDate(rowA.original[columnId])
            const dateB = parseDate(rowB.original[columnId])
            return dateB - dateA
        },
    },
    {
        accessorKey: "street",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Street
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "city",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    City
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "state",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    State
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "zipcode",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Zip code
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },    
]

function parseDate(dateString) {
    // Séparer les parties de la date en utilisant "/"
    const [day, month, year] = dateString.split('/');
    // Reconstituer la date au format YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    return new Date(formattedDate);
}