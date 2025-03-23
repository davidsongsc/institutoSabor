import { Menu } from "antd";
import Image from "next/image"
import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './header.css';
const items = [
    { label: 'Sobre nós', key: 'item-1' },
    { label: 'Cursos', key: 'item-2' },
    { label: 'Blog do sabor', key: 'item-3' },
    { label: 'Fale conosco', key: 'item-4' },

];


const HeaderExterno: React.FC = () => {
    return (
        <header className="grid grid-cols-12 gap-4 h-[100px] items-center justify-center bg-transparent">
            <span className="col-span-2 hidden lg:block" ></span>
            <Image src={"/images/logo.png"} alt="logo" width={100} height={100} className="col-span-1 hidden lg:block" />
            <Menu theme="light" mode="horizontal" items={items} className="col-span-12 lg:col-span-5 flex items-center justify-center font-bold text-2xl" />
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
    )
}

export default React.memo(HeaderExterno);