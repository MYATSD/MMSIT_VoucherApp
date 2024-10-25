import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const PaginationVoucher = ({ data: { links: { next, prev }, meta: { to, from, total } }, handleFetchVoucher }) => {
    const handlePrevBtn = () => {
        handleFetchVoucher(prev)
    }
    const handleNextBtn = () => {
        handleFetchVoucher(next)
    }
    return (
        <div className="flex justify-between items-center">
            {/* Help text */}
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{from}</span> to <span className="font-semibold text-gray-900 dark:text-white">{to}</span> of <span className="font-semibold text-gray-900 dark:text-white">{total}</span> Entries
            </span>
            {/* Buttons */}
            <div className="inline-flex mt-2 xs:mt-0">
                <button
                    disabled={!prev}
                    onClick={handlePrevBtn}
                    className="flex items-center justify-center px-2 py-2 mx-0.5 disabled:opacity-50 disabled:pointer-events-none text-sm font-medium text-black bg-white border border-teal-700  rounded-s hover:text-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <HiArrowLeft className="fill-teal-900 " />
                </button>
                <button disabled={!next}
                    onClick={handleNextBtn} className="flex items-center justify-center px-2 py-2 disabled:opacity-50 disabled:pointer-events-none text-sm font-medium text-black bg-white border border-teal-700 rounded-e  hover:text-white hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <HiArrowRight className="fill-teal-900 " />

                </button>
            </div>
        </div>

    )
}

export default PaginationVoucher
