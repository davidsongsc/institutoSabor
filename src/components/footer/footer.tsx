import Image from "next/image";
import React, { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
    return (
        <footer className="grid grid-cols-12 items-start h-auto bg-terciary text-secondary w-auto
                            ">

            <div className="col-span-12 flex  items-center justify-center py-14">

                <div className="grid grid-cols-6 lg:grid-cols-12 items-center gap-10 Nexa justify-center gap-0 p-2 sm:p-0">
                    <span className="col-span-1"></span>
                    <Image src="/images/logo.png" alt="logo" width={300} height={100} unoptimized className="col-span-6 sm:col-span-3" />
                    <div className="col-span-6 sm:col-span-4">
                        <h1 className="text-5xl Nexa text-quaternary uppercase ">Institucional</h1>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-12 ">
                            {[
                                "Nossa formação",
                                "O Instituto",
                                "Blog do sabor",
                                "Cursos livres",
                                "Fale conosco",
                                "Formação Técnica",
                            ].map((label, index) => (
                                <li key={index} className="flex items-center h-8 col-span-1">
                                    <ArrowForwardIosIcon className="text-terciary bg-secondary rounded-full p-1 mr-2" fontSize="medium" />
                                    <p className="Nexa text-[1rem] whitespace-nowrap">{label}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="col-span-6 sm:col-span-3 flex flex-col items-start Nexa justify-center gap-0">
                        <h1 className="text-5xl Nexa text-quaternary uppercase ">Combos</h1>
                        <ul className="flex flex-col items-start Nexa justify-center gap-0">
                            {[
                                "Combo Chefe completo",
                                "Combo Gastronomia brasileira",
                                "Combo administração de restaurantes",
                                "Combo cozinha moderna e inovadora",

                            ].map((label, index) => (
                                <li key={index} className="flex items-center h-8">
                                    <ArrowForwardIosIcon className="text-terciary bg-secondary rounded-full p-1 mr-2" fontSize="medium" />
                                    <p className="Nexa text-1xl whitespace-nowrap">{label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-6 sm:col-span-1 flex flex-col items-start Nexa justify-center gap-0">

                        <h1 className="text-5xl Nexa text-quaternary uppercase sm:hidden">Medias Sociais</h1>

                        <ul className="col-span-2 flex flex-col items-start Nexa justify-center gap-4 mt-6">
                            {[
                                { icon: InstagramIcon, name: "Instagram" },
                                { icon: FacebookIcon, name: "Facebook" },
                                { icon: XIcon, name: "X" },
                                { icon: WhatsAppIcon, name: "WhatsApp" },
                            ].map(({ icon: Icon, name }, index) => (
                                <li key={index} className="flex items-center">
                                    <Icon className="text-2xl text-terciary bg-secondary rounded-full p-1" />
                                    <p className="text-xl text-secondary ml-2 sm:hidden">{name}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>

            <div className="col-span-12 flex items-center justify-center max-w-[1900px] mx-auto">
                <ul className="gap-4 grid grid-cols-12 md:grid-cols-6 items-center justify-center">
                    <li className="col-span-1"></li>
                    {[
                        "validabrasil",
                        "google",
                        "mec",
                        "mte",
                        "sistec",

                    ].map((logo, index) => (
                        <li key={index} className="col-span-4 sm:col-span-1">
                            <Image src={`/images/selos/${logo}.png`} alt="logo" width={200} unoptimized height={100} className="p-3" />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default React.memo(Footer);