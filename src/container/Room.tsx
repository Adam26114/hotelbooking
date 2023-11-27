import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { rooms } from "../data/data";
import { Button, Chip, Container } from "@mui/material";

import { MdPeopleAlt } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import Checkout from "./Checkout";
import ChceckOutProvider from "../helper/ChceckOutProvider";

const Room = () => {
    const { roomId } = useParams();
    const room = rooms.find((room) => room.id === roomId);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <div className="room-item pt-20" id="room_1">
                <div className="room-detail">
                    <img
                        src={room?.img}
                        alt={room?.id}
                        className="room-image w-full h-[400px] object-cover object-center rounded shadow"
                    />
                    <h3 className="room-name  text-xl font-bold mt-6">
                        {room?.name}
                    </h3>
                    <p className="room-desc indent-12">{room?.description}</p>
                    <p className="room-guestcount flex items-center">
                        <MdPeopleAlt />
                        <p className="ml-1">Sleeps - </p>
                        <span className="guest-count sleeps-2">
                            {room?.sleep}
                        </span>
                    </p>

                    <h3 className=" font-bold mt-2  ">
                        Most popular facilities
                    </h3>
                    <ul className="room-ammenities w-full flex flex-wrap gap-2 mt-2">
                        {room?.ammenities.map((ammenity) => (
                            <li key={ammenity.name} className=" cursor-pointer">
                                <Chip
                                    label={ammenity.name}
                                    variant="outlined"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="room-selloptions mt-4">
                    <h2 className="text-lg font-bold flex items-center gap-2 py-4">
                        <BsFillBoxFill /> Amazing Packages
                    </h2>
                    <ul className="room-selloptions-list grid grid-cols-1 md:grid-cols-3 gap-5  ">
                        {room?.selloptions.map((item) => (
                            <li
                                className="selloption-item promotion border shadow-md rounded-xl p-6 flex flex-col justify-between"
                                data-rate={item.amount}
                                key={item.name}
                            >
                                <div className="">
                                    <h3 className="rate-name text-lg font-semibold">
                                        {item.name}
                                    </h3>
                                    <ul className="selloption-desc text-sm text-gray-600 list-disc mt-2">
                                        {item.dec?.map((data) => (
                                            <li
                                                key={data.name}
                                                className="ml-5"
                                            >
                                                {data.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="rate-roomcount flex items-center mb-2">
                                            <p>Quanity</p>
                                            <select
                                                name=""
                                                id=""
                                                className=" border-b bottom-3 p-3 rounded-md "
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </span>
                                        <div>
                                            <span className="rate-currency font-medium text-xl">
                                                {item.curency}
                                            </span>
                                            <span className="rate-amount font-medium text-xl ml-1">
                                                $ {item.amount}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid">
                                        <Button
                                            variant="contained"
                                            className="button book-button"
                                            onClick={handleOpen}
                                        >
                                            <Link to="/checkout">book</Link>
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Room;
