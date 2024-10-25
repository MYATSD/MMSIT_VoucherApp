import React from 'react'
import Container from '../components/Container'
import { useForm } from 'react-hook-form'
import useCookie, { setCookie } from 'react-use-cookie'
import useUserStore from '../store/useUserStore'
import Breadcrumb from '../components/Breadcrumb'

const UserProfileChangeName = () => {

    const [userCookie, setUserCookie] = useCookie("user_info")
    const { user, setUser } = useUserStore()
    const [token] = useCookie("my_token")
    // console.log(user)

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const handleNameChange = async (data) => {
        console.log(data)
        const res = await fetch(import.meta.env.VITE_BASE_URL + "/user-profile/change-name", {
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
        setUserCookie(JSON.stringify(json.user))
        setUser(json.user)
        console.log(user)
        reset()
    }
    return (
        <section>
            < Container >
                <Breadcrumb links={[{ title: "UserProfile", path: "/dashboard/user_profile" }]} currentPageTitle={"UserProfileChangeName"} />
                <div className="space-y-4 border p-10 ">


                    <form className="max-w-sm " onSubmit={handleSubmit(handleNameChange)}>
                        <div className='flex justify-start items-end gap-3'>
                            <div className="">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="name" {...register("name")} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                            </div>

                            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                        </div>
                    </form>



                </div>
            </Container >
        </section>
    )
}

export default UserProfileChangeName
