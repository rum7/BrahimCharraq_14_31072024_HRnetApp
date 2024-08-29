import { Header } from "@/components/ui/app-header"
import { AppBackground } from "@/components/ui/app-background"
import { NavLink } from "react-router-dom"
import { TableEmployees } from "@/components/employees/TableEmployees"

const linkStyles = 'relative top-[0px] text-xs text-lime-700/50 hover:text-lime-600 transition-colors ease-in-out duration-250'

export const CurrentEmployees = () => {
    return (
        <>
            <div className='form__container max-w-[960px] flex flex-col items-center'>
                <Header />
                <main className='w-full flex flex-col items-center gap-4'>
                    <header className='w-full flex items-center justify-center px-[.8rem]'>
                        <h1 className='text-2xl font-bold'>Current employees</h1>
                        {/* <NavLink to='/' className={linkStyles}>home</NavLink> */}
                    </header>
                    <TableEmployees />
                </main>
                <NavLink to='/' className={linkStyles}>home</NavLink>
            </div>
            <AppBackground />
        </>
    )
}
