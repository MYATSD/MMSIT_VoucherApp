import React from 'react'
import { useNavigate } from 'react-router-dom'
import useCookie, { removeCookie } from 'react-use-cookie'

const Logout = () => {
    // const [removeCookie] = useCookie("my_token")
    const nav = useNavigate()
    const handleLogout = () => {
        removeCookie("my_token")
        nav("/")
    }

    return (

        <button type="button" onClick={handleLogout} className="text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Logout</button>


    )
}

export default Logout
