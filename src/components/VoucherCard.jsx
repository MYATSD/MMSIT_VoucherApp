import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import printJS from 'print-js';
import html2pdf from 'html2pdf.js';



const fetcher = (url) => fetch(url).then((res) => res.json())

const VoucherCard = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useSWR(import.meta.env.VITE_BASE_URL + "/vouchers/" + id, fetcher)
    console.log(data)

    const handlePrintBtn = () => {
        const printableArea = document.getElementById('printableArea');


        printJS({
            printable: printableArea,
            type: 'html',
            targetStyles: ['*'], // Include all styles
            style: `
                @page {
                    size: A5;
                    margin: 20mm;
                }
               body {
                font-family: Arial, sans-serif;
              
            }
       
            `
        });

    }

    const handlePDF = () => {

        const printableArea = document.getElementById('printableArea');
        const options = {
            margin: 1,
            filename: `invoice_${data.voucher_id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf()
            .from(printableArea)
            .set(options)
            .save();
    }



    return (
        <>
            <div>
                <div className='flex justify-end items-center w-[14.8cm] mt-10 mb-2'>
                    <button onClick={handlePrintBtn} className="hover:text-white border border-teal-700 text-teal-700 bg-white hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">Print</button>
                    <button onClick={handlePDF} className="hover:text-white border border-teal-700 text-teal-700 bg-white hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">Download PDF</button>
                </div>
                {
                    isLoading ? <div className="w-[14.8cm] h-[21cm] bg-white shadow-lg">
                        <div className="bg-teal-700 text-white p-6">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold animate-pulse bg-gray-300 h-8 w-32 mb-2"></h1>
                                    <p className="mt-2 text-sm animate-pulse bg-gray-300 h-4 w-40"></p>
                                </div>
                                <div className="text-right">
                                    <h2 className="font-bold animate-pulse bg-gray-300 h-4 w-24 mb-2"></h2>
                                    <p className="mt-2 animate-pulse bg-gray-300 h-4 w-32"></p>
                                    <p className="animate-pulse bg-gray-300 h-4 w-24"></p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <table className="w-full my-5">
                                <thead>
                                    <tr className="bg-teal-50">
                                        <th className="p-2 text-left animate-pulse bg-gray-300 h-6 w-12"></th>
                                        <th className="p-2 text-left animate-pulse bg-gray-300 h-6 w-64"></th>
                                        <th className="p-2 text-right animate-pulse bg-gray-300 h-6 w-12"></th>
                                        <th className="p-2 text-right animate-pulse bg-gray-300 h-6 w-12"></th>
                                        <th className="p-2 text-right animate-pulse bg-gray-300 h-6 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="border-b py-5">
                                    {[...Array(5)].map((_, index) => (
                                        <tr key={index}>
                                            <td className=" p-3  text-sm animate-pulse bg-gray-300 h-6 w-12"></td>
                                            <td className=" p-3  text-sm animate-pulse bg-gray-300 h-6 w-64"></td>
                                            <td className=" p-3  text-sm text-right animate-pulse bg-gray-300 h-6 w-12"></td>
                                            <td className=" p-3  text-sm text-right animate-pulse bg-gray-300 h-6 w-12"></td>
                                            <td className=" p-3  text-sm text-right animate-pulse bg-gray-300 h-6 w-12"></td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="p-3 text-sm font-bold text-end animate-pulse bg-gray-300 h-6 w-32" colSpan={4}></td>
                                        <td className="p-3 text-sm text-end animate-pulse bg-gray-300 h-6 w-16"></td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-sm font-bold text-end animate-pulse bg-gray-300 h-6 w-32" colSpan={4}></td>
                                        <td className="p-2 text-sm text-end animate-pulse bg-gray-300 h-6 w-16"></td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 text-sm font-bold text-end animate-pulse bg-gray-300 h-6 w-32" colSpan={4}></td>
                                        <td className="p-2 text-sm text-end animate-pulse bg-gray-300 h-6 w-16"></td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div className="mt-10 flex justify-between items-center border-b py-5">
                                <div>
                                    <h4 className="font-bold mb-2 animate-pulse bg-gray-300 h-6 w-32"></h4>
                                    <p className='text-xs animate-pulse bg-gray-300 h-4 w-40'></p>
                                    <p className='text-xs animate-pulse bg-gray-300 h-4 w-40'></p>
                                    <p className='text-xs animate-pulse bg-gray-300 h-4 w-40'></p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 text-2xl text-end animate-pulse bg-gray-300 h-8 w-32"></h4>
                                    <p className="text-end text-xs animate-pulse bg-gray-300 h-4 w-48"></p>
                                    <p className="text-end text-xs animate-pulse bg-gray-300 h-4 w-48"></p>
                                    <p className='text-end text-xs animate-pulse bg-gray-300 h-4 w-48'></p>
                                    <p className='text-end text-xs animate-pulse bg-gray-300 h-4 w-48'></p>
                                </div>
                            </div>

                            <div className="mt-8 text-center text-sm text-gray-600">
                                <p className="mb-2 animate-pulse bg-gray-300 h-4 w-64"></p>
                            </div>
                        </div>
                    </div>
                        :
                        <div className="w-[14.8cm] h-[21cm]  bg-white shadow-lg" id='printableArea'>
                            <div className="bg-teal-700 text-white p-6">
                                <div className="flex justify-between ">
                                    <div>
                                        <h1 className="text-3xl font-bold">INVOICE</h1>
                                        <p className="  mt-2 text-sm">Voucher ID: {data.voucher_id}</p>
                                    </div>
                                    <div className="text-right">
                                        <h2 className=" font-bold">INVOICE TO</h2>
                                        <p className="mt-2">{data.customer_name}</p>

                                        <p>Date: {data.sale_date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">

                                <table className="w-full my-5">
                                    <thead className="">
                                        <tr className="bg-indigo-100">
                                            <th className="p-2 text-left">No</th>
                                            <th className="p-2 text-left">Item Description</th>
                                            <th className="p-2 text-right">Qty.</th>
                                            <th className="p-2 text-right">Price</th>
                                            <th className="p-2 text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border-b py-5'>
                                        {data.records.map((record, index) =>
                                            <tr key={data.id}>
                                                <td className="p-3 text-sm">{index + 1}</td>
                                                <td className="p-3 text-sm">{record.product.product_name}</td>
                                                <td className="p-3 text-sm text-right">{record.quantity}</td>
                                                <td className="p-3 text-sm text-right">{record.product.price}</td>
                                                <td className="p-3 text-sm text-right">{record.cost}</td>
                                            </tr>)}
                                        {/* Add more rows as needed */}
                                    </tbody>
                                    <tfoot className=''>
                                        <tr className='' >
                                            <td className="p-3 text-sm font-bold text-end" colSpan={4}>Total</td>
                                            <td className="p-3 text-sm text-end">{data.total.toFixed(2)}</td>

                                        </tr>
                                        <tr >
                                            <td className="p-2 text-sm font-bold text-end" colSpan={4}>Tax</td>
                                            <td className="p-2 text-sm text-end">{data.tax.toFixed(2)}</td>

                                        </tr>
                                        <tr >
                                            <td className="p-2 text-sm font-bold text-end" colSpan={4}>Net Total</td>
                                            <td className="p-2 text-sm text-end">{data.netTotal.toFixed(2)}</td>

                                        </tr>
                                    </tfoot>
                                </table>

                                {/* <div className="flex justify-end items-start"> */}
                                {/* <div>
                        <h3 className="font-bold text-2xl mb-2">TOTAL DUE</h3>
                        <p className="text-3xl font-bold">$ 2.110,00</p>
                    </div> */}
                                {/* <div className="text-right">
                                <p><span className="font-bold text-sm">TOTAL:</span> {data.total.toFixed(2)}</p>
                                <p><span className="font-bold text-sm">TAX:</span> {data.tax.toFixed(2)}</p>
                                <p><span className="font-bold text-sm">NET TOTAL:</span> {data.netTotal.toFixed(2)}</p>
                            </div> */}
                                {/* </div> */}

                                <div className="mt-10 flex justify-between items-center border-b py-5">
                                    <div>
                                        <h4 className="font-bold mb-2">Payment Info:</h4>
                                        <p className='text-xs'>Account: Jhone Doe</p>
                                        <p className='text-xs'>A/C Name: Jhon</p>
                                        <p className='text-xs'>Bank Details: Bank Jhone</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-2xl text-end">MMS IT</h4>
                                        <p className=" text-end text-xs">4102 Gilmore Avenue, New York,</p>
                                        <p className=" text-end text-xs"> NY 10016 • yourstudio.com</p>

                                        <p className='text-end text-xs'>Email us at info@yourwebsite.com</p>
                                        <p className='text-end text-xs'>or call us at 1-234-567-890</p>
                                    </div>

                                </div>

                                <div className="mt-8 text-center text-sm text-gray-600">
                                    <p className="mb-2">Thanks for your business with us</p>


                                </div>
                            </div>
                        </div>


                }
            </div>
        </>

    )


}

export default VoucherCard
