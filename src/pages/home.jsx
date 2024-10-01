import { Header } from '@/components/ui/app-header'
import { FormEmployes } from '@/components/form/FormEmployes'
import { AppBackground } from '@/components/ui/app-background'
import { NavLink } from 'react-router-dom'

const linkStyles = 'relative top-[0px] text-xs text-[#2A652A] hover:text-lime-600 transition-colors ease-in-out duration-250'

export const Home = () => {
    return (
        <>
            <div className='form__container max-w-[480px] flex flex-col items-center'>
                <Header />
                <main className='w-full flex flex-col items-center gap-4'>
                    <header className='w-full flex items-center justify-between px-[.8rem]'>
                        <h1 className='text-lg font-bold'>Create employee</h1>
                        <NavLink to="/currentEmployees" className={linkStyles}>View current employees</NavLink>
                    </header>
                    <FormEmployes />
                </main>
            </div>
            <AppBackground />
        </>
    )
}