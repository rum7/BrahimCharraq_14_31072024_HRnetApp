import WealthHealth from '/WealthHealth-logo.png'

export const Header = () => {
    return (
        <>
            <header className='w-full flex items-center gap-6 mb-4'>
                <img width={60} height={71} src={WealthHealth} loading='lazy' alt="logo" />
                <span className='relative top-[-8px] text-4xl font-bold'>HRnet</span>
            </header>
        </>
    )
}
