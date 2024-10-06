import React, { useRef, useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import SkeletonLoader from "./SkeletonLoader";
import { debounce, throttle } from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json())

const VoucherList = () => {
  const searchInput = useRef("")
  console.log(searchInput)
  const [search, setSearch] = useState("")
  const handleSearch = debounce(
    (e) => {
      setSearch(e.target.value)
    }, 500
  )

  const handleClear = () => {
    setSearch("")
    searchInput.current.value = ""
  }

  const { data, isLoading, error } = useSWR(search ? `${import.meta.env.VITE_BASE_URL}/vouchers?voucher_id_like=${search}` : `${import.meta.env.VITE_BASE_URL}/vouchers`, fetcher)
  console.log(data)
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              ref={searchInput}
              id="simple-search"
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              required
            />
            {search && <button className="absolute top-0 bottom-0 right-2  " onClick={handleClear}>
              <HiX className="fill-red-300 scale-100 active:scale-75 duration-200" />
            </button>}
          </div>
        </div>
        <div className="">
          <button className="text-white flex justify-center items-center gap-3 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-400 dark:hover:bg-teal-500 dark:focus:ring-teal-500">
            Create Sale
            <HiPlus />
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hidden last:table-row">
              <td className="px-6 py-4 text-center " colSpan={5}>
                There is no product
              </td>
            </tr>


            {isLoading ? <SkeletonLoader /> : data.map((product) => <VoucherListRow product={product} key={product.id} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
