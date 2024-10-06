import React from 'react'

const SkeletonLoader = () => {
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
                </td>
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                </th>
                <td className="px-6 py-4 ">
                    <div className="animate-pulse bg-gray-300 h-4 w-40 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-12 rounded"></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
                </td>
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                </th>
                <td className="px-6 py-4 ">
                    <div className="animate-pulse bg-gray-300 h-4 w-40 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-12 rounded"></div>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                    <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
                </td>
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <div className="animate-pulse bg-gray-300 h-4 w-32 rounded"></div>
                </th>
                <td className="px-6 py-4 ">
                    <div className="animate-pulse bg-gray-300 h-4 w-40 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-20 rounded"></div>
                </td>
                <td className="px-6 py-4 text-end">
                    <div className="animate-pulse bg-gray-300 h-4 w-12 rounded"></div>
                </td>
            </tr>
        </>
    )
}

export default SkeletonLoader
