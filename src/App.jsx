import WealthHealth from '/WealthHealth-logo.png'
import { FormEmployes } from './components/FormEmployes';
import './App.css'


function App() {
    const linkStyles = 'relative top-[0px] text-xs text-lime-600 hover:text-lime-800 transition-colors ease-in-out duration-250'

    return (
        <>
            <div className='form__container flex flex-col items-center'>
                <header className='w-full flex items-center gap-6 mb-12'>
                    <img className='w-[60px]' src={WealthHealth} alt="logo" />
                    <span className='relative top-[-8px] text-4xl font-bold'>HRnet</span>
                </header>
                <main className='w-full flex flex-col items-center gap-4'>
                    <header className='w-full flex items-center justify-between px-[.8rem]'>
                        <h1 className='text-lg font-bold'>Create employee</h1>
                        <a href="#" className={linkStyles}>View current employees</a>
                    </header>
                    <FormEmployes />
                </main>
            </div>
            <div className="background">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default App
