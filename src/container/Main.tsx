import { Pagination } from "@mui/material";
import React, { useState } from "react";
import HotelRooms from "./HotelRooms";
import Container from "../components/Container";
import { rooms } from "../data/data";

const Main = () => {
    const [filter, setfilter] = useState(rooms);

    const currencyFilter = (currency) => {
        // const roomFilter = filter.filter(
        //     (data) => data.selloptions[0].curency == currency
        // );
        // setfilter(roomFilter);
        const filtered = rooms.filter(
            (data) => data.selloptions[0].curency === currency
        );
        setfilter(filtered);
    };

    const priceFilter = (sort) => {
        const sorted = filter.sort((a, z) =>
            sort == "ASC"
                ? a.selloptions[0].amount - z.selloptions[0].amount
                : z.selloptions[0].amount - a.selloptions[0].amount
        );

        setfilter(sorted)
    };

    // console.log(filter);

    return (
        <main>
            <section
                id="property-info"
                className=" relative w-full h-[100vh] text-white"
            >
                <img
                    alt=""
                    className="property-image w-full h-full object-cover"
                    // src="http://placehold.it/180x100"
                    src="https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <div className="absolute top-[30%] left-[50%] translate-x-[-50%] text-center space-y-3">
                    <h3 className="  font-black text-7xl">Qikinn Hotel</h3>
                    <p className="text-shadow xmin-w-[90%] md:min-w-[80%]  text-lg line-clamp-3  active:line-clamp-none">
                        Situated at the gateway to Sentosa and in the heart of
                        it all, Bay Hotel Singapore sports a diamante-inspired
                        façade and sets the stage for a nice stay in a modern,
                        boutique hotel. This 10-storey hotel comes fully
                        equipped with its own set of modern comforts and
                        business facilities and is home to 43 standard rooms,
                        284 deluxe rooms and 6 suites. Its 333 well-appointed
                        rooms are equipped with panoramic bay windows, offering
                        stunning views of Sentosa or lush views of Mount Faber.
                        Bay Hotel Singapore is a non-smoking hotel and will
                        appeal to both business and leisure travellers.
                    </p>
                </div>
            </section>

            <section
                id="result-filter "
                className="bg-[#000]/80 px-12 py-5 w-[80%] mx-auto translate-y-[-80px]"
            >
                <h3 className=" text-white">Filter Results</h3>
                <form
                    id="filter_form"
                    className=" grid grid-cols-1 md:grid-cols-3  md:gap-5  px-5 "
                >
                    <fieldset className="flex flex-col">
                        <label htmlFor="" className=" text-white my-1">
                            Currency
                        </label>
                        <select
                            name="currency"
                            id=""
                            className="h-[50px] border-none outline-none pl-4"
                            onChange={(e) => currencyFilter(e.target.value)}
                        >
                            <option value="SGD">Hotel Currency - SGD</option>
                            <option value="USD">USD</option>
                            <option value="MYR">MYR</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="" className=" text-white my-1">
                            Sort By
                        </label>
                        <select
                            name="sort-price"
                            className="h-[50px] border-none outline-none pl-4"
                            onChange={(e) => priceFilter(e.target.value)}
                        >
                            <option value="ASC">Price ( Low to High )</option>
                            <option value="DSC">Price ( High to Low) </option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="" className=" text-white my-1">
                            Nightly Rate
                        </label>
                        <input
                            type="number"
                            placeholder="1 Night"
                            name="rate-filter"
                            className="h-[50px] border-none outline-none  pl-4"
                        />
                    </fieldset>
                </form>
            </section>

            <section id="result-list">
                <Container>
                    <HotelRooms data={filter} />
                </Container>
            </section>
            <section id="result-pagination" className="">
                <div className="flex justify-center items-center flex-col">
                    <span id="results_number">
                        {filter.length}&nbsp;results found
                    </span>

                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>
            </section>
        </main>
    );
};

export default Main;
