import { FormEmployes } from '@/components/FormEmployes'
import { AppBackground } from '@/components/ui/appBackground'
import { NavLink } from 'react-router-dom'
import WealthHealth from '/WealthHealth-logo.png'

const linkStyles = 'relative top-[0px] text-xs text-lime-700/50 hover:text-lime-600 transition-colors ease-in-out duration-250'

export const Home = () => {
    return (
        <>
            <div className='form__container max-w-[480px] flex flex-col items-center'>
                <header className='w-full flex items-center gap-6 mb-12'>
                    <img className='w-[60px]' src={WealthHealth} alt="logo" />
                    <span className='relative top-[-8px] text-4xl font-bold'>HRnet</span>
                </header>
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
