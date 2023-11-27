import React, { useState } from "react";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navs = ["search", "select", "review", "checkout", "confirm"];

    const [isOpen, setIsOpen] = useState(false);

    function hundleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="py-4 px-32  text-white  fixed w-full z-10 flex justify-between items-center   before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,.1)] before:backdrop-blur-3xl property-desc">
            <div className="logo z-10">
                <NavLink to="/" className="text-3xl font-bold">
                    Logo
                </NavLink>
            </div>

            <div className=" cursor-pointer text-2xl block md:hidden  z-10">
                {!isOpen ? (
                    <FaBars onClick={hundleClick} />
                ) : (
                    <FaTimes onClick={hundleClick} />
                )}
            </div>

            <nav
                className={`${
                    isOpen ? "block" : "hidden md:block"
                } absolute md:relative top-[100%] left-0 w-full md:w-auto bg-[rgba(0,0,0,.1)] md:bg-transparent backdrop-blur-3xl md:backdrop-blur-0 py-5 md:py-0`}
            >
                <ul className="flex flex-col md:flex-row gap-10  justify-around items-center">
                    {navs.map((nav) => (
                        <li key={nav}>
                            <NavLink
                                to={nav}
                                className="capitalize"
                            >
                                {nav}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
