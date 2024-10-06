import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { waveform } from "ldrs";
import toast from "react-hot-toast";

const ProductCreateCard = () => {
  const nav = useNavigate();
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  waveform.register();

  const handleCreateProduct = async (data) => {
    console.log("form submitted");
    console.log(data.product_name);
    console.log(data.product_price);
    setSending(true);
    await fetch(import.meta.env.VITE_BASE_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.product_price,
        created_at: new Date().toISOString(),
      }),
    });

    // await fetch(import.meta.env.VITE_BASE_URL + "/products", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     product_name: data.product_name,
    //     price: data.product_price,
    //     created_at: new Date().toISOString(),
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    setSending(false);

    toast.success("Product added successfully");
    reset();
    if (data.back_to_product_list) {
      nav("/product");
    }
  };
  return (
    <div className="w-full md:w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div>
        {sending && <div>Loading...</div>}
        <h1 className="text-3xl font-bold mb-2">Create New Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          explicabo dolorem veritatis non at ullam!
        </p>
      </div>
      <form
        className="space-y-6 mt-10"
        action="#"
        onSubmit={handleSubmit(handleCreateProduct)}
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            New Product Name
          </label>
          <input
            type="text"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            name="product_name"
            className={`${
              errors.product_name
                ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
            placeholder="Eg. Custom Website Design"
            required
          />
          {errors.product_name?.type === "required" && (
            <p>Product name is required</p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p>Product name must be longer than 3words </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p> Product name must be less than 50words </p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Price
          </label>
          <input
            type="number"
            name="product_price"
            {...register("product_price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            placeholder="Eg. $500"
            className={`${
              errors.product_price
                ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
            required
          />
          {errors.product_price?.type === "required" && (
            <p>Product price is required</p>
          )}
          {errors.product_price?.type === "min" && (
            <p>Product price must be greater than 100 </p>
          )}
          {errors.product_price?.type === "max" && (
            <p> Product price must be less than 10000 </p>
          )}
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                {...register("all_corrected", {
                  required: true,
                })}
                id="all_correct"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="all_correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all field are correct
            </label>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                {...register("back_to_product_list")}
                id="all_correct"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="back_to_product_list"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Back to Product List After Saving
            </label>
          </div>
        </div>
        <div>
          <div>
            {" "}
            <Link
              to={"/product"}
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
            >
              {" "}
              <span className="mr-2">Save Product</span>
              {sending && (
                <l-waveform
                  size="10"
                  stroke="2"
                  speed="1"
                  color="white"
                  className=" "
                ></l-waveform>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;
