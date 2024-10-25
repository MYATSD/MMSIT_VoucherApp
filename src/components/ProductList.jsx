import React, { useRef, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiSearch, HiX } from "react-icons/hi";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiPencil,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import SkeletonLoader from "./SkeletonLoader";
import Pagination from "./Pagination";
import useCookie from 'react-use-cookie';


const ProductList = () => {
  const [userToken] = useCookie("my_token")
  const [search, setSearch] = useState("")
  const fetcher = (url) => fetch(url, {
    headers: {
      Authorization: `Bearer ${userToken}`
    },
  }).then((res) => res.json());
  const searchInput = useRef('')
  const [fetchUrl, setFetchUrl] = useState(import.meta.env.VITE_BASE_URL + "/products")
  const handleSearch = debounce((e) => {
    setSearch(e.target.value)
  }, 500)
  const { data, error, isLoading } = useSWR(search ?
    `${import.meta.env.VITE_BASE_URL}/products?q=${search}` : fetchUrl,
    fetcher
  );
  console.log(data)
  const handleClear = () => {
    setSearch("")
    searchInput.current.value = ""

  }
  const handleFetchUrl = (page) => {
    // setFetchUrl(`${import.meta.env.VITE_BASE_URL}/products?p=${page}`)
    setFetchUrl(page)
  }
  // if (isLoading) {
  //   return "Loading...."
  // } else (
  //   console.log(data)
  // )

  return (
    <>
      <div>
        <div className="flex justify-between mb-5">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <HiSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                id="simple-search"
                ref={searchInput}
                onChange={handleSearch}
                className="bg-teal-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
              {search && <button className="absolute top-0 bottom-0 m-auto right-2"><HiX className="fill-red-300 scale-100 active:scale-75" onClick={handleClear} /></button>
              }
            </div>
          </div>
          <div className="">
            <Link
              to={"create"}
              className="text-white flex justify-center items-center gap-3 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-400 dark:hover:bg-teal-500 dark:focus:ring-teal-500"
            >
              Add new Product
              <HiPlus />
            </Link>
          </div>
        </div>

        <div className="relative overflow-x-auto mb-6">
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-teal-50 dark:bg-teal-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Updated At
                </th>
                <th scope="col" className="px-6 py-3 text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <ProductListSkeletonLoader />
              ) : data?.data.length === 0 ? (
                <ProductListEmptyStage />
              ) : (
                data?.data?.map((product) => (
                  <ProductRow key={product.id} product={product} />
                ))
              )}
            </tbody>
          </table>
        </div>
        {!isLoading && <Pagination data={data} handleFetchUrl={handleFetchUrl} />}
      </div>



    </>
  );
};

export default ProductList;
