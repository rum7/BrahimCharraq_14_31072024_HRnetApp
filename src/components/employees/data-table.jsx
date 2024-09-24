import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export const DataTable = ({ columns, data }) => {
    const [columnFilters, setColumnFilters] = useState([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState([])
    const [currentPage, setCurrentPage] = useState("1")

    const table = useReactTable({
        data,
        columns,
        filterFns: { customFilterFn: (row, id, filterValue) => customFilter(row, id, filterValue) },
        globalFilterFn: 'customFilterFn',
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),

        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 10,
            },
        },
        state: {
            columnFilters,
            globalFilter,
            sorting,
        }
    })

    const customFilter = (row, id, filterValue) => {
        const terms = filterValue.replace(/[^\p{L}\s]/gu, '').toLowerCase().split(' ').filter(Boolean)
        return terms.some(term => String(row.getValue(id)).toLowerCase().includes(term))
    }  

    const handleManualPagination = (e) => {
        let inputValue = e.target.value
        if (inputValue.length !== 0 && (inputValue > table.getPageCount() || Number(inputValue) <= 0 || isNaN(Number(inputValue)))) { 
            e.target.classList.remove("focus-visible:ring-ring") 
            e.target.classList.add("focus-visible:ring-red-400") 
        } else { 
            e.target.classList.remove("focus-visible:ring-red-400") 
            e.target.classList.add("focus-visible:ring-ring") 
        }                    
        inputValue.length !== 0 && Number(inputValue) > 0 ? table.setPageIndex(Number(inputValue - 1)) : null
        setCurrentPage(inputValue)
    }

    const updateArrowPagination = (whichPage) => {
        const inputPagination = document.getElementById("inputPagination")
        let newCurrentPage = table.getState().pagination.pageIndex + 1

        switch (whichPage) {
            case 'first' :
                table.setPageIndex(0)
                setCurrentPage(1)
                newCurrentPage = 1
                break
            case 'previous' :
                table.previousPage()
                setCurrentPage(newCurrentPage - 1)
                newCurrentPage--
                break
            case 'next' :
                table.nextPage()
                setCurrentPage(newCurrentPage + 1)
                newCurrentPage++
                break
            case 'last' :
                table.setPageIndex(table.getPageCount() - 1)
                setCurrentPage(table.getPageCount())
                newCurrentPage = table.getPageCount()
                break
        }

        newCurrentPage > 0 && newCurrentPage <= table.getPageCount() ? inputPagination.classList.remove("focus-visible:ring-red-400") : null
    }

    return (
        <>
            {/* SEARCH */}
            <div className="flex items-center jus space-x-2">
                <Input
                    name="search"
                    placeholder="Search..."
                    value={globalFilter ?? ""}
                    onChange={(event) => table.setGlobalFilter(String(event.target.value))}
                    className="max-w-sm"
                />
                <p className="flex-1 text-end text-sm text-muted-foreground">Total : {table.getFilteredRowModel().rows.length} employees</p>
            </div>
            {/* TABLE */}
            <div className="rounded-md border my-4">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                    <TableHead key={header.id} className="text-center">
                                        {header.isPlaceholder ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} className="text-center" data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* PAGINATION */}
            <div className="flex items-center px-0">
                <div className="flex w-full justify-between items-center space-x-6 lg:space-x-8">
                    <div className="hidden lg:flex items-center space-x-2">
                        <p className="text-sm font-medium">Rows per page</p>
                        <Select
                            value={`${table.getState().pagination.pageSize}`}
                            onValueChange={(value) => {
                            table.setPageSize(Number(value))
                            }}
                        >
                            <SelectTrigger className="h-8 w-[70px]" aria-label="button for rows per page">
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                            </SelectTrigger>
                            <SelectContent side="top">
                                {[10, 25, 50, 100].map((pageSize) => (
                                    <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <p className="flex items-center gap-2">
                                Page
                                <Input 
                                    id="inputPagination"
                                    name="inputPagination"
                                    aria-label="input for pagination"
                                    className="h-8 w-[50px] text-center" 
                                    value={currentPage}
                                    onChange={handleManualPagination}
                                /> 
                                / {table.getPageCount()}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={() => updateArrowPagination("first")}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <span className="sr-only">Go to first page</span>
                                <DoubleArrowLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={() => updateArrowPagination("previous")}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <span className="sr-only">Go to previous page</span>
                                <ChevronLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="h-8 w-8 p-0"
                                onClick={() => updateArrowPagination("next")}
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="sr-only">Go to next page</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={() => updateArrowPagination("last")}
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="sr-only">Go to last page</span>
                                <DoubleArrowRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
