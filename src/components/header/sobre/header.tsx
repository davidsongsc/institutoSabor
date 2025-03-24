'use client';

import { Button, Menu } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import { useWindowWidth } from "@/utils/getWindowWidth";
import { getMenuMode } from "@/utils/responsiveUtils";
import items from "@/consts/itemMenu"
import { useRouter } from 'next/navigation';

import './header.css';

const HeaderExterno: React.FC = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const widthPage = useWindowWidth()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const menuMode = getMenuMode(widthPage);

    return (
        <header className="relative sm:absolute z-50 left-0 col-span-12 grid grid-cols-12 gap-4 items-center justify-center sm:bg-transparent bg-secondary py-4 px-0 lg:px-[145px]">
            {/* Logo */}
            <Image
                src={widthPage <= 639 ? "/images/logo.png" : "/images/sobre/logo.png"}
                alt="logo"
                width={100}
                height={100}
                className="pl-4 lg:pl-0  sm:col-span-2 lg:col-span-2  absolute top-[10px] sm:relative"
            />

            {/* Botão de Menu para Telas Pequenas */}
            <div className="sm:hidden col-span-12 flex justify-end">
                <Button
                    onClick={toggleMenu}
                    className="text-primary bg-secondary rounded-full p-2 relative left-[-10px]"
                    icon={<MenuIcon style={{ fontSize: '24px' }} />}
                />
            </div>

            <Menu
                theme="light"
                mode={menuMode}
                className={`col-span-12 sm:col-span-10 lg:col-span-8 font-bold text-2xl ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}
                items={items.map((item) => ({
                    ...item,
                    style: { color: `${widthPage < 639 ? "black" : "white"}` },
                    onClick: () => {
                        if (item.href.startsWith("/")) {
                            router.push(item.href);
                        } else {
                            const element = document.getElementById(item.href.slice(1));
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                        setIsMenuOpen(false);
                    },
                }))}
            />

            <nav className="col-span-1 hidden lg:block">
                <ul className="flex gap-3 items-center">
                    <li className="p-2 bg-secondary rounded-full text-primary">
                        <InstagramIcon />
                    </li>
                    <li className="p-2 bg-secondary rounded-full text-primary">
                        <FacebookIcon />
                    </li>
                    <li className="p-2 bg-secondary rounded-full text-primary">
                        <XIcon />
                    </li>
                    <li className="p-2 bg-secondary rounded-full text-primary">
                        <WhatsAppIcon />
                    </li>
                </ul>
            </nav>
            <span className="col-span-1 hidden lg:block"></span>
        </header>
    );
};

export default React.memo(HeaderExterno);