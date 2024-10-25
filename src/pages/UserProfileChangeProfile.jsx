import React, { useRef } from 'react'
import useUserStore from '../store/useUserStore'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { HiMiniCamera, HiPencilSquare, HiVideoCameraSlash } from 'react-icons/hi2'
import { useForm } from 'react-hook-form'
import { method } from 'lodash'
import useCookie, { setCookie } from 'react-use-cookie'
import toast from 'react-hot-toast'
import { HiCamera } from 'react-icons/hi'

const UserProfileChangeProfile = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const [token] = useCookie("my_token")
    const fileInputRef = useRef()
    const { user: { name, email, profile_image }, setUser } = useUserStore()
    const [userCookie, setUserCookie] = useCookie("user_info")
    // const handleChangeProfile = async (data) => {
    //     console.log(data)
    //     const formData = new FormData()
    //     formData.append("profile_image", data.profile_image[0])
    //     console.log(data.profile_image[0])
    //     const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user-profile/change-profile-image`, {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             Accept: "application/json",
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     const json = await res.json()
    //     if (res.status === 200) {
    //         toast.success("Profile Change successfully")
    //         setUser(json.user)
    //         setUserCookie(JSON.stringify(json.user))
    //         reset()
    //     }
    // }
    const handleChangeProfile = async (e) => {
        console.log(e.target.files[0])
        const formData = new FormData()
        formData.append("profile_image", e.target.files[0])
        console.log(e.target.files[0])
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/user-profile/change-profile-image`, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const json = await res.json()
        if (res.status === 200) {
            toast.success("Profile Change successfully")
            setUser(json.user)
            setUserCookie(JSON.stringify(json.user))
            reset()
        }



    }

    const handleImageUpload = () => {
        console.log(fileInputRef)
        fileInputRef.current.click()

    }

    return (
        <section>
            <Container>
                <Breadcrumb links={[{ title: "UserProfile", path: "/dashboard/user_profile" }]} currentPageTitle={"UserProfileChangeProfile"} />
                <div className="space-y-4 border p-10 lg:w-1/2 ">
                    <div className='relative inline-block'>
                        <img className="border size-32 rounded-lg" src={profile_image ? profile_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"} alt="Helene avatar" />
                        <button onClick={handleImageUpload} className='absolute bottom-0 right-0 translate-x-1/2'><HiCamera className='fill-teal-500 size-5 bg-teal-100 rounded-full' /></button>

                    </div>
                    {/* <form className="max-w-sm " onSubmit={handleSubmit(handleChangeProfile)}>
                        <div className='flex justify-start items-end gap-3'>
                            <div className="">
                                <label htmlFor="profile_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="file" {...register("profile_image", {
                                    required: true
                                })} id="profile_image" className={`${errors.profile_image ? "border-red-500 focus:border-red-200" : " bg-gray-50 border border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-300 `} />

                            </div>

                            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                        </div>
                        {errors.profile_image?.type === "required" && (
                            <p className='text-red-600 text-sm'>Please choose file</p>
                        )}
                    </form> */}
                    <form className="max-w-sm  hidden" >
                        <div className='flex justify-start items-end gap-3'>
                            <div className="">
                                <label htmlFor="profile_image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input ref={fileInputRef} onChange={handleChangeProfile} type="file" id="profile_image" className={`${errors.profile_image ? "border-red-500 focus:border-red-200" : " bg-gray-50 border border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-300 `} />

                            </div>

                            <button type="submit" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
                        </div>
                        {errors.profile_image?.type === "required" && (
                            <p className='text-red-600 text-sm'>Please choose file</p>
                        )}
                    </form>



                </div>
            </Container>

        </section>
    )
}

export default UserProfileChangeProfile
