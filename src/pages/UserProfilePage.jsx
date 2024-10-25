import React from 'react'
import useCookie from 'react-use-cookie'
import Container from "../components/Container"
import { HiPencilSquare } from 'react-icons/hi2'
import { HiPencil } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import useUserStore from '../store/useUserStore'
import Breadcrumb from '../components/Breadcrumb'
import usePasswordStore from '../store/usePasswordStore'

const UserProfilePage = () => {
    const [userCookie] = useCookie("user_info")
    const { user: { name, email, profile_image } } = useUserStore()
    const { password } = usePasswordStore()
    // const { name, email, profile_image } = JSON.parse(userCookie)
    console.log(password)
    return (
        <section>
            <Container>
                <Breadcrumb currentPageTitle={"UserProfile"} />
                <div className="space-y-4 border p-10 w-1/2 ">
                    <div className="flex space-x-4 items-center">
                        <div className='relative'>
                            <img className="border size-32 rounded-lg" src={profile_image ? profile_image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"} alt="Helene avatar" />
                            <Link to="changeProfile" className='absolute bottom-0 right-0 translate-x-1/2'><HiPencilSquare className='fill-teal-500' /></Link>

                        </div>

                        <div>
                            <span className="mb-2 inline-block border rounded bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Account </span>
                            <div className='flex justify-center items-center gap-2'>
                                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">{name}</h2>
                                <Link to="changeName"><HiPencilSquare className='fill-teal-500' /></Link >
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='flex justify-start items-center gap-2'>
                            <h1 className="font-semibold text-gray-900 dark:text-white">Password</h1>
                            <Link to="changePassword"><HiPencilSquare className='fill-teal-500' /></Link>

                        </div>
                        <p className="text-gray-500 dark:text-gray-400">{password}</p>
                    </div>

                </div>
            </Container>

        </section>

    )
}

export default UserProfilePage
