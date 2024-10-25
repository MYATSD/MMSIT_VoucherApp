import React from 'react'

const ProductEditCardLoader = () => {
    return (
        <div className="w-full md:w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 animate-pulse">
            <div>
                <div className="h-8 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>

            <form className="space-y-6 mt-10">
                <div>
                    <div className="block mb-2 h-4 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>

                <div>
                    <div className="block mb-2 h-4 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>

                <div className="flex items-start">
                    <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>

                <div className="flex items-start">
                    <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>

                <div className="flex">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mr-2"></div>
                    <div className="h-8 bg-gray-700 rounded w-1/3"></div>
                </div>
            </form>
        </div>
    )
}

export default ProductEditCardLoader
