import React, { useState } from 'react'
import { HiOutlineArchive, HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import FormatDateTime from './FormatDateTime'
import { waveform } from "ldrs";

import useSWR, { useSWRConfig } from 'swr'
import { Link } from 'react-router-dom';
import { HiOutlineBookOpen } from 'react-icons/hi2';
const fetcher = (url) => fetch(url).then((res) => res.json())

const VoucherListRow = ({ product: { id, customer_name, voucher_id, sale_date, customer_email } }) => {
    waveform.register();

    const { data, isLoading, error } = useSWR(import.meta.env.VITE_BASE_URL + "/vouchers", fetcher)
    const [isDeleting, setIsDeleting] = useState(false)
    const { mutate } = useSWRConfig()
    const handleDeleteBtn = async () => {
        setIsDeleting(true)
        await fetch(import.meta.env.VITE_BASE_URL + "/vouchers" + `/${id}`, {
            method: "Delete",
            headers: {
                "Content-Type": "/application.json"
            }

        })
        setIsDeleting(false)
        mutate(import.meta.env.VITE_BASE_URL + "/vouchers")

    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4"> {voucher_id}</td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {customer_name}
            </th>
            <td className="px-6 py-4 ">{customer_email}</td>
            <td className="px-6 py-4 text-end">
                <FormatDateTime timeStamp={sale_date} />
            </td>
            <td className="px-6 py-4 text-end">
                <div className="inline-flex rounded" role="group">

                    <Link to={`/voucher/detail/${id}`} className="size-10 flex justify-center items-center text-sm font-medium text-teal-500 rounded-e-lg bg-white border border-gray-200 hover:bg-gray-200  hover:text-blue-700  ">
                        <HiOutlineBookOpen />

                    </Link>
                    <button
                        type="button"
                        onClick={handleDeleteBtn}
                        className="size-10 flex justify-center items-center text-sm font-medium text-red-500 rounded-e-lg bg-white border border-gray-200 hover:bg-gray-200  hover:text-blue-700  "
                    >
                        {isDeleting ? (
                            <l-waveform
                                size="10"
                                stroke="2"
                                speed="1"
                                color="red"
                                className=" "
                            ></l-waveform>
                        ) : (
                            <HiOutlineTrash />
                        )}
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default VoucherListRow
