import React from "react";
import ModalProvider from "../components/ModalProvider";
import { FaSearch, FaTimes } from "react-icons/fa";
const Checkout = ({ open, handleOpen, handleClose }) => {
    return (
        <aside className=" w-full pt-[100px] ">
            <h1 className="text-2xl font-bold text-center py-4">
                Complete Your Booking
            </h1>
            <div className="flex justify-center flex-col md:flex-row gap-6">
                <div className="bg-[#e3e3e3] p-10 rounded-md shadow-lg border border-slate-300 md:w-[700px] mx-10 md:mx-0 ">
                    <section id="property-details">
                        <form action="" id="property-detail">
                            <legend className="text-lg font-semibold">
                                Hotel Details
                            </legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Hotel/Location
                                    </label>
                                    <select
                                        name="property_name"
                                        id=""
                                        className="border py-3 px-2 rounded border-slate-300"
                                    >
                                        <option value="BHS">Bay Hotel</option>
                                        <option value="BHCM">
                                            Bay Hotel Ho Chi Minh
                                        </option>
                                    </select>
                                </fieldset>
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Check In Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkInDate"
                                        className="border py-3 px-2 rounded border-slate-300"
                                    />
                                </fieldset>
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Nights
                                    </label>
                                    <input
                                        type="number"
                                        name="nights"
                                        className="border py-3 px-2 rounded border-slate-300"
                                    />
                                </fieldset>
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Check Out Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkOutDate"
                                        className="border py-3 px-2 rounded border-slate-300"
                                    />
                                </fieldset>
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Adults
                                    </label>
                                    <input
                                        type="number"
                                        name="adultCount"
                                        className="border py-3 px-2 rounded border-slate-300"
                                    />
                                </fieldset>
                                <fieldset className="flex flex-col">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Children
                                    </label>
                                    <input
                                        type="number"
                                        name="childCount"
                                        className="border py-3 px-2 rounded border-slate-300"
                                    />
                                </fieldset>
                                <fieldset className="flex flex-col col-span-1 md:col-span-2">
                                    <label
                                        className=" text-slate-600 text-sm py-2"
                                        htmlFor=""
                                    >
                                        Promotion Code
                                    </label>
                                    <div className="grid grid-cols-4 gap-2 col-span-2 content-center">
                                        <input
                                            type="text"
                                            name="promocode"
                                            className="border py-3 px-2 rounded border-slate-300 col-span-3"
                                        />
                                        <a
                                            href="#"
                                            className="button self-center col-span-1 bg-blue-500 flex justify-center items-center h-full rounded border-slate-300 text-white hover:bg-blue-600 transition gap-2"
                                        >
                                            <FaSearch />
                                            Search
                                        </a>
                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </section>

                    <section id="cart-additional" className="">
                        <form action="" id="discount_form">
                            <fieldset className="flex flex-col col-span-2">
                                <label
                                    className=" text-slate-600 text-sm py-2"
                                    htmlFor=""
                                >
                                    If you have a discount code, please key in
                                    here
                                </label>
                                <input
                                    type="text"
                                    name="discountCode"
                                    className="border py-3 px-2 rounded border-slate-300"
                                />
                            </fieldset>
                            <a
                                href="#"
                                className="button discount-button col-span-2 bg-blue-500 flex justify-center items-center rounded border-slate-300 text-white hover:bg-blue-600 transition py-2 mt-10"
                            >
                                Apply
                            </a>
                        </form>
                    </section>
                </div>
                <section id="cart-info" className="mx-10 md:mx-0 ">
                    <div className="bg-[#e3e3e3] p-5 rounded-md shadow-lg border border-slate-300">
                        <h3 className=" text-xl font-semibold">
                            Booking Summary
                        </h3>
                        <ul
                            id="cart-content"
                            className=" grid grid-cols-1 gap-3"
                        >
                            <li
                                className="cart-item relative flex gap-3 py-4 border-b  border-slate-600"
                                id="cart_item_1 "
                            >
                                <a
                                    href="#"
                                    className="button remove-button absolute right-0 top-0 text-sm "
                                >
                                    <FaTimes onClick={() => {}} />
                                </a>
                                <img
                                    src="https://source.unsplash.com/random/1"
                                    className="w-28 h-28 object-cover rounded-md shadow"
                                    alt=""
                                />
                                <div>
                                    <h4 className="cart-item-name">
                                        Deluxe Room Queen Bed(23sqm) - Flash
                                        Deal
                                    </h4>
                                    <div className="cart-amount font-bold flex gap-1">
                                        <span className="currency">SGD</span>
                                        <span className="amount">168.00</span>
                                    </div>
                                    <div className="cart-charges font-bold flex gap-1">
                                        <span className="currency">SGD</span>
                                        <span className="amount">29.74</span>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="cart-item relative flex gap-3 py-4 border-b  border-slate-600"
                                id="cart_item_2"
                            >
                                <a
                                    href="#"
                                    className="button remove-button absolute right-0 top-0 text-sm "
                                >
                                    <FaTimes onClick={() => {}} />
                                </a>
                                <img
                                    src="https://source.unsplash.com/random/2"
                                    className="w-28 h-28 object-cover rounded-md shadow"
                                    alt=""
                                />
                                <div>
                                    <h4 className="cart-item-name">
                                        Deluxe Room Queen Bed(23sqm) - Best
                                        Available Rate
                                    </h4>
                                    <div className="cart-amount font-bold flex gap-1">
                                        <span className="currency">SGD</span>
                                        <span className="amount">210.00</span>
                                    </div>
                                    <div className="cart-charges font-bold flex gap-1">
                                        <span className="currency">SGD</span>
                                        <span className="amount">37.17</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div id="cart-summary" className="pt-6">
                            <div className="cart-subtotal flex justify-between">
                                <span className="desc text-lg">Sub Total</span>
                                <div className="font-bold flex gap-1">
                                    <span className="currency">SGD</span>
                                    <span className="amount">378.00</span>
                                </div>
                            </div>
                            <div className="cart-charges flex justify-between border-b  border-slate-600">
                                <span className="desc text-lg">Taxes and Charges</span>
                                <div className="font-bold flex gap-1">
                                    <span className="currency">SGD</span>
                                    <span className="amount">66.91</span>
                                </div>
                            </div>
                        
                            <div className="cart-total flex justify-between">
                                <span className="desc text-lg">Total</span>
                                <div className="font-bold flex gap-1">
                                    <span className="currency">SGD</span>
                                    <span className="amount">444.91</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </aside>
    );
};

export default Checkout;
