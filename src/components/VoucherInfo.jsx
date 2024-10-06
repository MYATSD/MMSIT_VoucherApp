import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { waveform } from "ldrs";
import toast from "react-hot-toast";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../store/useRecordStore";
import { useNavigate } from "react-router-dom";

const VoucherInfo = () => {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { records, resetRecord } = useRecordStore()
  const [sending, setSending] = useState(false);
  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }
  const onSubmit = async (data) => {
    const total = records.reduce((pv, cv) => pv + cv.cost, 0)
    const tax = total * 0.07
    const netTotal = total + tax

    const currentVoucher = { ...data, records, total, tax, netTotal }
    console.log(data)
    setSending(true)

    const res = await fetch(import.meta.env.VITE_BASE_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher)
    })

    const json = await res.json()
    setSending(false)
    reset()
    resetRecord()
    toast.success("Voucher create successfully")
    if (data.redirect_to_detail) {
      nav(`/voucher/detail/${json.id}`)
    }
  };
  return (
    <div className="">


      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3" >
          <SaleForm />
          <VoucherTable />
        </div>
        <div className="col-span-1 border p-5 rounded" >
          <form
            action=""
            className="flex flex-col h-full"
            type="submit"
            onSubmit={handleSubmit(onSubmit)}
            id="infoForm"
          >
            <div className="grid grid-cols-1  gap-3 mb-3">
              <div className="col-span-1">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Voucher ID
                  </label>
                  <input
                    type="text"
                    defaultValue={generateInvoiceNumber()}
                    {...register("voucher_id", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    name="voucher_id"
                    className={`${errors.voucher_id
                      ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                      : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
                      } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
                    required
                  />
                  {errors.voucher_id?.type === "required" && (
                    <p>Product name is required</p>
                  )}
                  {errors.voucher_id?.type === "minLength" && (
                    <p>Product name must be longer than 3words </p>
                  )}
                  {errors.voucher_id?.type === "maxLength" && (
                    <p> Product name must be less than 50words </p>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    {...register("customer_name", {
                      required: true,
                      minLength: 2,
                      maxLength: 50,
                    })}
                    name="customer_name"
                    className={`${errors.customer_name
                      ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                      : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
                      } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
                    required
                  />
                  {errors.customer_name?.type === "required" && (
                    <p>Customer name is required</p>
                  )}
                  {errors.customer_name?.type === "minLength" && (
                    <p>Customer name must be longer than 3words </p>
                  )}
                  {errors.customer_name?.type === "maxLength" && (
                    <p> Customer name must be less than 50words </p>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Customer Email
                  </label>
                  <input
                    type="text"
                    {...register("customer_email", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    name="customer_email"
                    className={`${errors.customer_email
                      ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                      : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
                      } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
                    required
                  />
                  {errors.customer_email?.type === "required" && (
                    <p>Customer Email is required</p>
                  )}
                  {errors.customer_email?.type === "minLength" && (
                    <p>Customer Email must be longer than 3words </p>
                  )}
                  {errors.customer_email?.type === "maxLength" && (
                    <p> Customer Email must be less than 50words </p>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Sale Date
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().slice(0, 10)}
                    {...register("sale_date", {
                      required: true,
                      minLength: 3,
                      maxLength: 50,
                    })}
                    name="sale_date"
                    className={`${errors.sale_date
                      ? " border  dark:border-red-500 border-red-300 bg-teal-50 focus:ring-red-500 focus:border-red-500 "
                      : "border  dark:border-teal-500 border-gray-300 bg-teal-50 focus:ring-teal-500 focus:border-teal-500"
                      } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white`}
                    required
                  />
                  {errors.sale_date?.type === "required" && (
                    <p>Product name is required</p>
                  )}
                  {errors.sale_date?.type === "minLength" && (
                    <p>Product name must be longer than 3words </p>
                  )}
                  {errors.sale_date?.type === "maxLength" && (
                    <p> Product name must be less than 50words </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex  flex-col justify-end items-end gap-3 mt-auto ">
              <div className="flex items-center">
                <input
                  {...register("redirect_to_detail", {
                  })}
                  id=""
                  form="infoForm"
                  type="checkbox"

                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
                <label
                  htmlFor="all_correct"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Redirect to Voucher Detail
                </label>
              </div>
              <div className="flex items-center">
                <input
                  {...register("all_corrected", {
                    required: true,
                  })}
                  id="all_correct"
                  form="infoForm"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
                <label
                  htmlFor="all_correct"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Make sure all field are correct
                </label>
              </div>
              <button
                type="submit"
                form="infoForm"
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
              >
                {" "}
                <span className="mr-2">Confirm Voucher</span>
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
          </form>

        </div>
      </div>


    </div>
  );
};

export default VoucherInfo;
