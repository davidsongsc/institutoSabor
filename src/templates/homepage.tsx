'use client';

import { useCardsData } from "@/hooks/useCardsData";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useWindowWidth } from "@/utils/getWindowWidth";


import { Button, Spin } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import './styles.css';
import SejaBemVindo from "@/components/sections/homepage/bemvindo";
import Carrossel from "@/components/carrossel/carrossel";
const HomePage: React.FC = () =>  {
    const [activeIndex, setActiveIndex] = useState(1);
const width = useWindowWidth();

const CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb4Gfi3HjunpPb_-tMBmwYNfrfDQffiY1oZheCBrITYr3SV4oZ8aiVTprLoTOh5_gntnjl3U2gRNre/pub?output=csv";

const { cards, loading, error } = useCardsData(CSV_URL);
if (loading) return <Spin />;
return (
    <main className="">
        
        {/* <SejaBemVindo /> */}
        <Spin spinning={loading}  >
            <section className="h-[130px] flex items-start justify-center Nexa">
                <h1 className="uppercase text-[calc(2rem+1.5vw)] text-center relative z-10 font-[800]" >Conheça nossos <span className="text-primary">combos exclusivos</span></h1>
            </section>
            <section className="flex justify-center flex-wrap items-start h-auto gap-[20px] bg-[url('/images/bg/background-combos.webp')] bg-no-repeat bg-top m-w-[1020px]" style={{
                backgroundSize: "100% 1200px",
                backgroundPositionY: "-195px",
            }}>

                <div className={`absolute h-screen  inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-cover  bg-top bg-[-30px_-280px] z-1 opacity-5 z-1`}></div>

                {cards.map((card, index) => {
                    const words = card.title.split(" ");
                    const middleIndex = words.length > 3 ? Math.ceil(words.length / 2) : 1;
                    return (

                        <div
                            key={card.id}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={`col-span-2 relative z-10 transition-all duration-500 ease-in-out my-4 w-[340px] ${activeIndex === index ? "group" : ""
                                }`}
                        >
                            <div
                                className={`h-[690px] ${activeIndex === index ? "h-[740px] translate-y-0" : "translate-y-[30px] "
                                    } transform rounded-[20px] bg-quinary transition-all duration-500 ease-in-out`}
                            >
                                <div className="relative overflow-hidden flex flex-col items-center rounded-[20px] border border-black h-full">
                                    <div
                                        className={` w-full flex flex-col items-center justify-start rounded-[10px]
                                            transition-all duration-300 px-2  h-[290px]
                                            ${activeIndex === index
                                                ? "text-secondary bg-primary py-10"
                                                : "group-hover:text-secondary group-hover:bg-primary py-4"
                                            }`}
                                    >
                                        <h3 className={`text-5xl text-center uppercase font-[700]`}>
                                            {words.slice(0, middleIndex).join(" ")}
                                        </h3>
                                        <h3
                                            className={`text-5xl text-center uppercase font-[700] border-b-2 border-senary w-[300px] mb-2`}
                                        >
                                            {words.slice(middleIndex).join(" ")}
                                        </h3>

                                        <p className="text-sm text-center">{card.description}</p>
                                        <Button
                                            type="primary"
                                            className={`mt-5 px-5 py-8 uppercase rounded-[10px] text-[2.7rem] ${activeIndex === index ? "bg-quaternary" : "group-hover:bg-quaternary"
                                                }`}
                                        >
                                            Saiba mais
                                        </Button>
                                    </div>

                                    <div className="w-full bg-gray-100 flex items-start justify-start" >
                                        <ul >
                                            <li className={` transition-all duration-200 ease-in-out
                                                    ${activeIndex === index
                                                    ? "mt-4"
                                                    : "mt-[-28px] "
                                                }`}></li>
                                            {card.lista.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm text-center font-bold mb-4"
                                                >
                                                    <div className="flex items-center justify-start w-full">
                                                        <Image src={`/images/items/${item.img}.webp`} alt="logo" width={90} height={100} ></Image>
                                                        <span className="text-left text-[1.1rem] w-[210px]">{item.texto}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                    )
                })}

            </section>
            <div className="flex items-center justify-center py-5">
                <Button type="primary" size="large" className="uppercase text-[calc(1rem+1.5vw)] p-8 Nexa" >Conheça outros cursos</Button>
            </div>
        </Spin>

        <section className="grid grid-cols-12 items-center  h-auto text-secondary mt-16 bg-[url('/images/bg/background-formacao.webp')]  bg-cover bg-center w-full px-[120px] sm:bg-primary md:bg-primary lg:bg-secondary sm:py-[40px] md:py-[20px]">
            <div className="col-span-12 grid grid-cols-12 max-w-[1900px] mx-auto">


                <div className="col-span-12 grid grid-cols-12 items-center justify-center mt-20">
                    <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
                        <div className="flex flex-col items-start justify-center gap-0">
                            <p className="dTexto ">Domine a arte da gastronomia com a</p>
                            <h1 className="dTitulo Nexa font-bold uppercase">Formação técnica</h1>
                            <p className="dTexto  mt-[-8px]"><span className="font-bold">Com uma abordagem prática e certificação reconhecida,</span> você</p>
                            <p className="dTexto mt-[-8px]">desenvolverá habilidades essenciais para se destacar no mercado.</p>
                            <p className="dTexto mt-[-8px]">Inscreva-se agora e dê o primeiro passo para <span className="font-[700]"> uma trajetória</span></p>
                            <p className="dTexto mt-[-8px] font-[700]">profissional de sucesso!</p>
                            <Button type="primary" size="large" className="mt-10 uppercase text-[2.2rem] py-6 px-8  text-terciary bg-quaternary" >Conheça a formação</Button>
                        </div>
                    </div>
                    <div className="col-span-6 flex items-center justify-start relative hidden lg:block">
                        <Image
                            src="/images/outros/instrutores.webp"
                            alt="Instrutores"
                            width={800}
                            height={500}
                            className={``}
                        />
                    </div>

                </div>
            </div>
        </section>
        <section className={`bg-[url('/images/bg/background-sabor.webp')]
                                bg-cover bg-center w-full  
                                grid grid-cols-12 items-start 
                                ${width <= 1920 ? "bg-[0px_-90px]" : "max-w-[1900px] mx-auto bg-[0px_-90px] h-auto"}`}>



            <div className="col-span-12">
                <h1 className="text-center text-blogTitle Nexa text-primary pt-10 uppercase font-bold ">Blog do sabor</h1>
                <h2 className="text-center text-blogSubTitle Nexa text-tertiary mt-[-35px]  font-bold ">O Blog do sabor é o espaço ideal para apaixonados por gastronomia!</h2>
                <h3 className="text-center text-blogText Nexa  text-tertiary font-normal ">Aqui, você encontra dicas, receitas, técnicas culinárias e as últimas tendências do mundo da culinária</h3>
                <div>
                    <Carrossel />
                </div>
            </div>

        </section>
        <section className="grid grid-cols-12 items-center h-auto justify-center text-secondary w-full
                    bg-[url('/images/bg/background-formacao.webp')] bg-cover bg-center bg-no-repeat sm:bg-primary md:bg-primary lg:bg-secondary md:py-20 sm:py-10">


            <div className="col-span-12 grid lg:grid-cols-12 md:grid-cols-6 items-center justify-start mt-20 max-w-[1900px] mx-auto">
                <div className="col-span-6 flex items-center justify-center relative hidden lg:block">
                    <Image
                        src="/images/outros/oniaedu.webp"
                        alt="Instrutores"
                        width={1100}
                        height={500}
                        className="w-[calc(100%+100px)]"
                    />
                </div>

                <div className="col-span-6 flex items-center justify-start px-14">
                    <div className="flex flex-col items-start Nexa justify-center gap-0">
                        <Image src="/images/ideias/eduon.png" alt="Selo" width={300} height={100} className=" max-w-none" />
                        <h1 className="text-[calc(1.5rem+1.5vw)] Nexa font-bold uppercase">Aprenda na melhor</h1>
                        <h1 className="text-[calc(1.5rem+1.5vw)] Nexa font-bold uppercase mt-[-28px]">Plataforma ead!</h1>
                        <p className="text-[calc(0.8rem+0.5vw)] mt-[-8px]">O Instituto do Sabor oferece seus cursos no <span className="font-bold">plataforma</span></p>
                        <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]"><span className="font-bold">Edu On,</span> proporcionando um aprendizado acessivel e de</p>
                        <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]">qualidade. Com <span className="font-bold">parcerias renomadas,</span > nossos certificados</p>
                        <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">garantem mais reconhecimento e apliam suas</p>
                        <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">oportunidades no mercado.</p>
                        <Button type="primary" size="large" className="mt-10 uppercase text-[calc(0.8rem+0.5vw)] py-6 px-8  text-terciary bg-quaternary" >Inscreva-se e aprimore sua formação!</Button>
                    </div>
                </div>


            </div>
        </section>
        <section className="grid lg:grid-cols-12 items-center md:grid-cols-6 justify-center  text-tertiary  w-full max-w-[1900px] mx-auto h-auto md:my-20
                            ">

            <span className="col-span-1"></span>
            <div className="col-span-5 flex items-center justify-start px-14">
                <div className="flex flex-col items-start Nexa justify-center gap-0">
                    <div className="flex  items-center Nexa justify-center gap-0">
                        <LocationOnIcon className="text-primary mr-4" fontSize="large" style={{ scale: 2 }} />
                        <div>
                            <h1 className="text-[calc(1.8rem+0.5vw)] Nexa  uppercase">Onde estamos</h1>
                            <h1 className="text-[calc(1.8rem+0.5vw)]  Nexa font-bold uppercase mt-[-18px]">Localizados?</h1>
                        </div>
                    </div>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-8px]">Nossa empresa está estrategicamente</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]">localizada na <span className="font-bold">R. Haddock Lobo, 170 - Rio </span></p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]"><span className="font-bold">Comprido, </span >oferecendo fácil acesso e</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">comodidade para atender nossos clientes</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">com excelência e proximidade.</p>
                </div>
            </div>
            <div className="col-span-6 flex items-center justify-end relative">
                <a
                    href="https://www.google.com/maps?q=R.+Haddock+Lobo,+170+-+Rio+Comprido,+Rio+de+Janeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6"
                >
                    <Image
                        src="/images/outros/mapa.png"
                        alt="Ver no Google Maps"
                        width={900}
                        height={300}
                        className="rounded-lg shadow-md hover:opacity-80 transition-opacity border border-2 border-primary"
                    />
                </a>

            </div>

        </section>
        <footer className="grid grid-cols-12 items-start h-auto bg-terciary text-secondary w-full
                            ">

            <div className="col-span-12 flex  items-center justify-center py-14">

                <div className="grid 2xl:grid-cols-12 md:grid-cols-6 items-center gap-10 Nexa justify-center gap-0">
                    <span className="col-span-1"></span>
                    <Image src="/images/logo.png" alt="logo" width={300} height={100} className="col-span-2 " />
                    <div className="col-span-3">
                        <h1 className="text-5xl Nexa text-quaternary uppercase ">Institucional</h1>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-12 w-[400px]">
                            {[
                                "Nossa formação",
                                "O Instituto",
                                "Blog do sabor",
                                "Cursos livres",
                                "Fale conosco",
                                "Formação Técnica",
                            ].map((label, index) => (
                                <li key={index} className="flex items-center h-8">
                                    <ArrowForwardIosIcon className="text-terciary bg-secondary rounded-full p-1 mr-2" fontSize="medium" />
                                    <p className="Nexa text-1xl whitespace-nowrap">{label}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <span className="col-span-1"></span>
                    <div className="col-span-3 flex flex-col items-start Nexa justify-center gap-0">
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


                    <ul className="col-span-2 flex flex-col items-start Nexa justify-center gap-4 mt-6">
                        {[
                            { icon: InstagramIcon, name: "Instagram" },
                            { icon: FacebookIcon, name: "Facebook" },
                            { icon: XIcon, name: "X" },
                            { icon: WhatsAppIcon, name: "WhatsApp" },
                        ].map(({ icon: Icon, name }, index) => (
                            <li key={index} className="flex items-center">
                                <Icon className="text-2xl text-terciary bg-secondary rounded-full p-1" />
                                <p className="text-xl text-secondary ml-2">{name}</p>
                            </li>
                        ))}
                    </ul>


                </div>

            </div>

            <div className="col-span-12 flex items-center justify-center max-w-[1900px] mx-auto">
                <ul className="flex gap-4 2xl:grid-cols-12 md:grid-cols-6 items-center">
                    {[
                        "validabrasil",
                        "google",
                        "mec",
                        "mte",
                        "sistec",

                    ].map((logo, index) => (
                        <li key={index} className="flex items-center">
                            <Image src={`/images/selos/${logo}.png`} alt="logo" width={200} height={100} className="p-3" />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    </main >
);
}

export default React.memo(HomePage);