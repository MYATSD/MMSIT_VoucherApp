import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import { useForm } from 'react-hook-form'
import useCookie, { removeCookie } from 'react-use-cookie'
import usePasswordStore from '../store/usePasswordStore'
import { remove } from 'lodash'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const UserProfileChangePassword = () => {
    const nav = useNavigate()
    const [userPasswordCookie, setUserPasswordCookie] = useCookie("user_password")
    const [token] = useCookie("my_token")
    const { password, setPassword } = usePasswordStore()
    const [userCookie] = useCookie("user_info")
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const handlePasswordChange = async (data) => {
        // console.log(typeof (data.current_password))
        console.log(data)
        console.log(userPasswordCookie)
        // console.log(userCookie)

        // if (data.current_password === userPasswordCookie) {
        //     setPassword(data.new_password)
        //     setUserPasswordCookie(JSON.stringify(data.new_password))
        // }

        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user-profile/change-password`, {
            method: "POST",
            body: JSON.stringify(data),

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`

            }


        })

        const json = await res.json()
        console.log(res)
        console.log(json)
        if (res.status === 200) {

            toast("Please Login again")
            removeCookie("my_token")
            removeCookie("user_info")
            removeCookie("user_password")
            nav("/")
        }
    }
    return (
        <section>
            < Container >
                <Breadcrumb links={[{ title: "UserProfile", path: "/dashboard/user_profile" }]} currentPageTitle={"UserProfileChangePassword"} />
                <div className="space-y-4 border p-10 ">


                    <form className="max-w-sm " onSubmit={handleSubmit(handlePasswordChange)}>
                        <div className='flex  flex-col justify-start items-end gap-3'>
                            <div className="">
                                <label htmlFor="old_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                                <input type="password" {...register("old_password")} id="old_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required />
                            </div>
                            <div className="">
                                <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                <input type="password" {...register("new_password")} id="new_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required />
                            </div>
                            <div className="">
                                <label htmlFor="new_password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">new Password confirmation</label>
                                <input type="password" {...register("new_password_confirmation")} id="new-password_confirmation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required />
                            </div>

                            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                        </div>
                    </form>



                </div>
            </Container >
        </section>
    )
}

export default UserProfileChangePassword
