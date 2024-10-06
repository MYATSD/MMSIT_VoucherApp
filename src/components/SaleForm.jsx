import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../store/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SaleForm = () => {
  const { addRecord, records, changeQuantity } = useRecordStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_BASE_URL + "/products",
    fetcher
  );
  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id
    const isExisted = records.find(({ product: { id } }) => id === currentProductId)
    console.log(isExisted)
    if (isExisted) {
      changeQuantity(isExisted.id, data.quantity)

    } else {
      const newRecord = {
        id: Date.now(),
        product: currentProduct,

        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      };

      addRecord(newRecord)
    }


    reset()
  };

  return (
    <div className="bg-white p-5 rounded-lg border mb-5">
      <form action="#" id="recordForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              {...register("product", { required: true })}
              className="bg-teal-50 border border-teal-300  text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select the Product</option>
              {!isLoading &&
                data.map((product) => (
                  <option
                    key={product.id}
                    value={JSON.stringify(product)}
                    className="hover:bg-teal-300"
                  >
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              id="quantityInput"
              className="bg-teal-50 border border-teal-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className=" w-full h-full flex justify-center items-center text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
