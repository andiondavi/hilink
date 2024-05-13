"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation)
    }

    const handleClick = () => {
        if (!openNavigation) return;

        setOpenNavigation(false);
    }

    return (
        <nav className='flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="hilink logo" width={74} height={29} />                
            </Link>

            <ul className={`${openNavigation ? 'flex flex-col gap-6 mt-2 bg-white' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 gap-12 h-full lg:static lg:flex lg:mx-auto`}>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} onClick={handleClick} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}

                {openNavigation && (
                    <div className="self-center">
                        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
                    </div>
                )}
            </ul>

            <div className="hidden lg:flexCenter">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
            </div>

            <button className="inline-block cursor-pointer lg:hidden" onClick={toggleNavigation}>
                <Image src="/menu.svg" alt="menu icon" width={32} height={32} />
            </button>
        </nav>
    );
}

export default Navbar;