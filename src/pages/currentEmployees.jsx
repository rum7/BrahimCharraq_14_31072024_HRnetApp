import { NavLink } from "react-router-dom"

const linkStyles = 'relative top-[0px] text-xs text-lime-700/50 hover:text-lime-600 transition-colors ease-in-out duration-250'

export const CurrentEmployees = () => {
    return (
        <>
            <h1>currentEmployees</h1>
            <NavLink to='/' className={linkStyles}>home</NavLink>
        </>
    )
}
