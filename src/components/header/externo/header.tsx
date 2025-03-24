'use client'; // Adicione esta linha no topo do arquivo

import { Menu } from "antd";
import Image from "next/image";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './header.css';

const items = [
    { label: 'Sobre nós', key: 'item-1', href: '#sobre-nos' },
    { label: 'Cursos', key: 'item-2', href: '#combos-exclusivos' },
    { label: 'Blog do sabor', key: 'item-3', href: '#blog-do-sabor' },
    { label: 'Fale conosco', key: 'item-4', href: '#fale-conosco' },
];

const HeaderExterno: React.FC = () => {
    return (
        <header className="col-span-12 grid grid-cols-12 gap-4 h-[70px] items-center justify-center xl:bg-transparent bg-secondary ">
            <span className="col-span-2 hidden lg:block"></span>
            <Image src={"/images/logo.png"} alt="logo" width={100} height={100} className="pl-4 lg:pl-0 col-span-1 sm:col-span-2 lg:col-span-1 hidden sm:block" />
            <Menu
                theme="light"
                mode="horizontal"
                className="col-span-12 sm:col-span-8 lg:col-span-5 flex items-center justify-center font-bold text-2xl"
                items={items.map((item) => ({
                    ...item,
                    onClick: () => {
                        const element = document.getElementById(item.href.slice(1)); 
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
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
            <span className="col-span-1"></span>
        </header>
    );
};

export default React.memo(HeaderExterno);