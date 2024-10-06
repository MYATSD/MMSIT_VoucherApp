import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { pinwheel } from "ldrs";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormatDateTime from "./FormatDateTime";

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  pinwheel.register();
  const { mutate } = useSWRConfig();

  const date = new Date(created_at); // Example date
  const [isDeleting, setIsDeleting] = useState(false);
  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const handleDeleteBtn = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);

        await fetch(import.meta.env.VITE_BASE_URL + `/products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "/application/json",
          },
        });
        await mutate(import.meta.env.VITE_BASE_URL + "/products");
        setIsDeleting(false);
        toast.success(`${product_name} Delete Successfully`, {
          position: "top-right",
        });
      }
    });
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <FormatDateTime timeStamp={created_at} />

      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded  " role="group">
          <Link
            to={`/product/edit/${id}`}
            type="button"
            className="px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil className="text-teal-500" />
          </Link>

          <button
            type="button"
            onClick={handleDeleteBtn}
            className="px-2 py-2 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-50 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-gray-200 focus:text-red-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-red-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-pinwheel
                size="11"
                stroke="1"
                speed="0.9"
                color="red"
              ></l-pinwheel>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
