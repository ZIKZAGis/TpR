import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-400 text-white">
            <span className="font-bold text-black">React 2022</span>
            <span>
                <Link className='px-4 py-2' to='/'>Products</Link>
                <Link className='px-4 py-2' to='/about'>About</Link>
            </span>
        </nav>
    )
}