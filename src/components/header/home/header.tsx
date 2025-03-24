'use client'; // Adicione esta linha no topo do arquivo

import { Menu } from "antd";
import Image from "next/image";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRouter } from 'next/navigation';
import items from "@/consts/itemMenu"
import './header.css';



const HeaderExterno: React.FC = () => {
    const router = useRouter();

    return (
        <header className="relative sm:absolute  z-50 left-0 col-span-12 grid grid-cols-12 gap-4 items-center justify-center xl:bg-transparent bg-secondary py-4 sm:px-[145px] ">
            <Image src={"/images/logo.png"} alt="logo" width={100} height={100} className="pl-4 lg:pl-0 col-span-1 sm:col-span-2 lg:col-span-1 hidden sm:block" />
            <Menu
                theme="light"
                mode="horizontal"
                className="col-span-12 sm:col-span-8 lg:col-span-9 flex items-center justify-center font-bold text-2xl"
                items={items.map((item) => ({
                    ...item,
                    onClick: () => {
                        if (item.href.startsWith("/")) {
                            router.push(item.href);
                        } else {
                            const element = document.getElementById(item.href.slice(1));
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    },
                }))}

            />
            <nav className="col-span-2 hidden lg:block">
                <ul className="flex gap-3 items-center">
                    <li className="p-2 bg-primary rounded-full text-secondary"><InstagramIcon /></li>
                    <li className="p-2 bg-primary rounded-full text-secondary"><FacebookIcon /></li>
                    <li className="p-2 bg-primary rounded-full text-secondary"><XIcon /></li>
                    <li className="p-2 bg-primary rounded-full text-secondary"><WhatsAppIcon /></li>
                </ul>
            </nav>
            <span className="col-span-1 hidden lg:block"></span>
        </header>
    );
};

export default React.memo(HeaderExterno);