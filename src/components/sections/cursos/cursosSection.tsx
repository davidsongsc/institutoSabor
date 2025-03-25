import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Image from "next/image";
import HeaderExterno from "@/components/header/sobre/header";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ExtensionIcon from '@mui/icons-material/Extension';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

import { Button } from "antd";
const CursosSection: React.FC = () => {
    const width = useWindowWidth();
    const listaTalentos = [
        {
            name: "Talento 1",
            description: "No Instituto do Sabor, unimos teoria e prática para que você aprimore suas habilidades e transforme ingredientes em verdadeiras obras-primas.",
            icone: <RestaurantIcon />,
        },
        {
            name: "Talento 2",
            description: "Além de cozinhar, um grande profissional sabe gerenciar e inovar. No Instituto do Sabor, você se capacita para empreender com sucesso na gastronomia.",
            icone: <BusinessCenterIcon />,
        },
        {
            name: "Talento 3",
            description: "A gastronomia é arte, e o talento torna cada prato único. No Instituto do Sabor, estimulamos a criatividade e experimentação, ajudando você a desenvolver seu próprio estilo.",
            icone: <ExtensionIcon />,
        },
        {
            name: "Talento 4",
            description: "Com técnica, talento e visão empreendora, você estará pronto para se destacar. No Instituto do Sabor, preparamos você para uma carreira de sucesso na gastronomia.",
            icone: <EmojiEventsIcon />,
        },
    ];

    return (
        <>
            <HeaderExterno />

            <section className="">
                <aside
                    id="sobrenos"
                    className={`bg-[url('/images/bg/background-formacao.webp')]
                        bg-cover bg-center w-full bg-primary
                        grid grid-cols-12 items-center 
                        mx-auto h-full sm:h-[700px] h-[100px] Nexa py-8`}
                >
                    <div className="col-span-12 grid grid-cols-12 items-center text-secondary px-2 sm:px-0">
                        <span className="col-span-1 "></span>
                        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-5 3xl:col-span-3 sm:col-span-10 ">
                            <h1 className="text-[1.5rem] sm:text-[2.1rem] font-bold uppercase">Torne-se técnico em até</h1>
                            <h2 className="text-quaternary text-[5.2rem] sm:text-[7.4rem] mt-[-35px] font-bold uppercase">30 Dias</h2>
                            <div className="border border-secondary rounded-lg px-2 uppercase mt-[-20px]">
                                <h3 className="text-[1rem] sm:text-[1.45rem]">
                                    <b>Certificação técnica reconhecida</b>
                                </h3>
                                <p className="mt-[-5px] text-[1.05rem] sm:text-[1.55rem]">
                                    Para impulsionar sua carreira!
                                </p>
                            </div>
                            <div className="text-[0.73rem] sm:text-[1rem] mt-2">
                                <p>Certificação <b>reconhecido pelo MEC e publicado no SISTEC.</b></p>
                                <p>Enriqueça seu currículo e destaque-se no mercado de trabalho!</p>
                            </div>

                            <ul className="gap-4 grid grid-cols-8 items-center justify-center">
                                {[
                                    "sistec",
                                    "google",
                                    "squalidade",
                                    "sconfianca",

                                ].map((logo, index) => (
                                    <li key={index} className="col-span-2">
                                        <Image src={`/images/selos/${logo}.png`} alt="logo" width={200} height={100} className="p-1" />
                                    </li>
                                ))}
                            </ul>

                            <Button type="primary" className="text-terciary uppercase px-4 py-6 bg-quaternary Nexa text-[1.95rem] sm:text-[2.7rem]">Quero saber mais </Button>
                        </div>
                    </div>
                </aside>
                <aside className="grid grid-cols-6 sm:grid-cols-12 py-12 items-center justify-center Nexa">
                    <h1 className="col-span-6 hidden sm:block">Imagem</h1>
                    <div className="col-span-6 sm:col-span-4 px-4 sm:px-0">
                        <b className="uppercase">
                            <h1 className="text-[1.19rem] sm:text-[1.7rem]">Conquiste sua
                                <span className="text-primary"> certificação</span>
                            </h1>
                            <h2 className="text-[1.14rem]">
                                <span className="text-primary">
                                    Técnica sem custo
                                </span> adicional!</h2>
                        </b>
                        <div className="text-[.64rem]">
                            <p>Ao adquirir qualquer um dos nossos <b>Combos Profissionalizantes,</b></p>
                            <p>você já ganha automaticamente o <b>nivelamento técnico para um </b></p>
                            <p>dos nossos Cursos Técnicos reconhecidos pelo MEC.</p>
                        </div>
                        <h3 className="uppercase text-[.80rem] mt-4">
                            <b>
                                transforme sua paixão em uma profissão!
                            </b>
                        </h3>
                        <ul className="uppercase flex flex-col gap-3 font-bold mt-4">
                            <li className="p-2 border border-terciary rounded-md text-[.9rem]"><SchoolIcon className="mr-2"/> <span>Cursos completos e atualizados</span></li>
                            <li className="p-2 border border-terciary rounded-md text-[1.2rem]"><SettingsIcon className="mr-2"/> <span>Publicado no SISTEC</span></li>
                            <li className="p-2 border border-terciary rounded-md text-[.65rem]"><BusinessCenterIcon className="mr-2"/> <span>Maior valorização no mercado de trabalho</span></li>

                        </ul>

                    </div>

                </aside>
            </section>

        </>
    );
};

export default React.memo(CursosSection);