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
import { useState } from "react";
import './styles.css';
import Carrossel from "@/components/carrossel/carrossel";
export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(1);
    const width = useWindowWidth();

    const CSV_URL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb4Gfi3HjunpPb_-tMBmwYNfrfDQffiY1oZheCBrITYr3SV4oZ8aiVTprLoTOh5_gntnjl3U2gRNre/pub?output=csv";

    const { cards, loading, error } = useCardsData(CSV_URL);
    if (loading) return <Spin />;
    return (
        <main className="">
            <section className="grid grid-cols-12 gap-8 items-start justify-start h-[755px]  max-w-[1900px] mx-auto">
                <span className="col-span-1"></span>
                <Image
                    src="/images/bg/background-esquerdo.webp"
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-[800px] h-auto absolute top-1/2 left-1/2 transform -translate-x-[1090px] -translate-y-[270px] z-1"
                />
                <div className="col-span-11 mt-16  ">
                    <Image
                        src="/images/bg/background-esquerdo.webp"
                        alt="logo"
                        width={400}
                        height={400}
                        className="absolute left-1/2 top-1/2 transform -translate-x-[410px] -translate-y-[-40px] rotate-[-125deg] z-1"
                    />
                    <Image
                        src="/images/bg/background-esquerdo.webp"
                        alt="logo"
                        width={200}
                        height={200}
                        className="absolute left-1/2 top-1/2 transform -translate-x-[-70px] -translate-y-[260px] rotate-[160deg] scale-x-[-1] z-1"
                    />
                    <h1 className="text-5xl font-normal mb-1 ">Seja bem-vindo ao</h1>
                    <h2 className="text-8xl font-[800] mb-1 uppercase">Instituto do</h2>
                    <h3 className="text-9xl font-[800] mb-4 uppercase text-primary">sabor</h3>
                    <p className="w-4/12 text-3xl">Descubra nossa formação <span className="font-[800]">completa em </span></p>
                    <p className="w-5/12 text-3xl"><span className="font-[800]">gastronomia</span> e transforme sua paixão pela</p>
                    <p className="w-4/12 text-3xl"> culinária em uma <span className="font-[800]">carreira de sucesso!</span></p>
                    <Button type="primary" size="large" className="uppercase mt-8 py-8 px-6 text-4xl rounded-[20px] relative z-10">Quero saber mais</Button>
                </div>
            </section >
            <section className="relative mt-16  max-w-[1900px] mx-auto">
                <div className={`absolute h-screen w-screen inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-cover ${width <= 1920 ? "PositionBg" : "PositionBgMedia"} bg-top bg-[-30px_-280px] z-1 opacity-5`}></div>

                <div className="relative z-10 col-span-12 grid grid-cols-12 lg:h-[700px] items-center justify-center">
                    <span className="col-span-5">
                        <Image
                            src="/images/bg/prato-especial.webp"
                            alt="logo"
                            width={2200}
                            height={1500}
                            className="absolute left-1/2 top-1/2 transform -translate-x-[1150px] -translate-y-[580px] z-1"
                            unoptimized={true}
                        />
                    </span>

                    <div className="col-span-7 justify-self-start relative z-10">
                        <div className=" justify-self-start">
                            <h1 className="bg-primary text-secondary text-6xl uppercase text-center font-[800] mb-1 px-4 rounded">
                                Transformamos sua paixão pela
                            </h1>
                            <h2 className="mt-2 bg-quaternary text-primary text-5xl  uppercase font-[800] px-4 py-2 rounded text-left justify-self-start">
                                Culinária em carreira de sucesso
                            </h2>

                        </div>
                        <div className=" justify-self-start pt-4 Nexa relative z-10">

                            <p className="mt-5 text-3xl">
                                Ensinando técnicas e segredos para atuar em restaurantes,
                            </p>
                            <p className="text-3xl">
                                bares ou abrir seu próprio negócio. Nosso objetivo é prepará-lo
                            </p>
                            <p className="text-3xl">
                                para os desafios do mundo gastronômico. <span className="font-bold">Junte-se a nós e</span>
                            </p>
                            <p className="text-3xl">
                                <span className="font-[800]">inicie sua jornada com pé direito!</span>
                            </p>
                            <Button type="primary" size="large" className="uppercase mt-8 text-5xl p-8 Nexa">
                                Seja nosso aluno
                            </Button>
                        </div>
                        <Image
                            src="/images/outros/tomate-tempero.webp"
                            alt="logo"
                            width={900}
                            height={100}
                            className="w-auto h-auto absolute z-1 top-1/2 left-1/2 transform -translate-x-[129px] -translate-y-[370px]"
                        />
                    </div>
                </div>
                <div className="h-[130px] flex items-start justify-center Nexa">
                    <h1 className="uppercase text-7xl relative z-10 font-[800]" >Conheça nossos <span className="text-primary">combos exclusivos</span></h1>
                </div>
            </section>
            <Spin spinning={loading}  >

                <section className="flex justify-center flex-wrap items-start h-[772px] gap-[20px] bg-[url('/images/bg/background-combos.webp')] bg-no-repeat bg-top m-w-[1020px]" style={{
                    backgroundSize: "100% 1200px",
                    backgroundPositionY: "-195px",
                }}>
                    <div className={`absolute h-screen w-screen inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-cover ${width <= 1920 ? "PositionBg" : "PositionBgMedia"} bg-top bg-[-30px_-280px] z-1 opacity-5 z-1`}></div>

                    {cards.map((card, index) => {
                        const words = card.title.split(" ");
                        const middleIndex = words.length > 3 ? Math.ceil(words.length / 2) : 1;
                        return (

                            <div
                                key={card.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`col-span-2 relative z-10 transition-all duration-500 ease-in-out w-[340px] ${activeIndex === index ? "group" : ""
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
                    <Button type="primary" size="large" className="uppercase text-[3rem] p-8 Nexa" >Conheça outros cursos</Button>
                </div>
            </Spin>

            <section className="grid grid-cols-12 items-center  h-[540px] text-secondary mt-16 bg-[url('/images/bg/background-formacao.webp')]  bg-cover bg-center w-full">
                <div className="col-span-12 grid grid-cols-12 max-w-[1900px] mx-auto">


                    <div className="col-span-12 grid grid-cols-12 items-center justify-center mt-20">
                        <span className="col-span-1"></span>
                        <div className="col-span-6 ">
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
                        <div className="col-span-5 flex items-center justify-start relative">
                            <Image
                                src="/images/outros/instrutores.webp"
                                alt="Instrutores"
                                width={1200}
                                height={500}
                                className={`${width <= 1920 ? "w-[150%] left-[-310px] top-[-357px]" : "w-[200%] left-[-110px] top-[-422px]"}  h-auto max-w-none absolute `}
                            />
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-[url('/images/bg/background-sabor.webp')]
                                bg-cover bg-center w-full  
                                grid grid-cols-12 items-start ">
                <div className="col-span-12">
                    <h1 className="text-center text-blogTitle Nexa text-primary pt-10 uppercase font-bold ">Blog do sabor</h1>
                    <h2 className="text-center text-blogSubTitle Nexa text-tertiary mt-[-35px]  font-bold ">O Blog do sabor é o espaço ideal para apaixonados por gastronomia!</h2>
                    <h3 className="text-center text-blogText Nexa  text-tertiary font-normal ">Aqui, você encontra dicas, receitas, técnicas culinárias e as últimas tendências do mundo da culinária</h3>
                    <div>
                        <Carrossel />
                    </div>
                </div>

            </section>
            <section className="grid grid-cols-12 items-center h-[700px] text-secondary mt-[-100px] w-full
                            bg-[url('/images/bg/background-formacao.webp')] bg-cover bg-center bg-no-repeat">

                <div className="col-span-12 grid grid-cols-12 items-center justify-start mt-20 ">
                    <div className="col-span-6 flex items-center justify-center relative">
                        <Image
                            src="/images/outros/oniaedu.webp"
                            alt="Instrutores"
                            width={1100}
                            height={500}
                            className="w-6/6 h-auto max-w-none relative left-[80px] "
                        />
                    </div>
                    <div className="col-span-6 flex items-center justify-start px-14">
                        <div className="flex flex-col items-start Nexa justify-center gap-0">
                            <Image src="/images/ideias/eduon.png" alt="Selo" width={300} height={100} className=" max-w-none" />
                            <h1 className="text-7xl Nexa font-bold uppercase">Aprenda na melhor</h1>
                            <h1 className="text-7xl Nexa font-bold uppercase mt-[-28px]">Plataforma ead!</h1>
                            <p className="text-2xl mt-[-8px]">O Instituto do Sabor oferece seus cursos no <span className="font-bold">plataforma</span></p>
                            <p className="text-2xl mt-[-6px]"><span className="font-bold">Edu On,</span> proporcionando um aprendizado acessivel e de</p>
                            <p className="text-2xl mt-[-6px]">qualidade. Com <span className="font-bold">parcerias renomadas,</span > nossos certificados</p>
                            <p className="text-2xl mt-[-6px] ">garantem mais reconhecimento e apliam suas</p>
                            <p className="text-2xl mt-[-6px] ">oportunidades no mercado.</p>
                            <Button type="primary" size="large" className="mt-10 uppercase text-[1.8rem] py-6 px-8  text-terciary bg-quaternary" >Inscreva-se e aprimore sua formação!</Button>
                        </div>
                    </div>


                </div>
            </section>
            <section className="grid grid-cols-12 items-center h-[700px] text-tertiary mt-[-100px] w-full
                            ">

                <div className="col-span-12 grid grid-cols-12 items-center justify-start mt-20 ">
                    <span className="col-span-1"></span>
                    <div className="col-span-4 flex items-center justify-start px-14">
                        <div className="flex flex-col items-start Nexa justify-center gap-0">
                            <div className="flex  items-center Nexa justify-center gap-0">
                                <LocationOnIcon className="text-primary mr-4" fontSize="large" style={{ scale: 2 }} />
                                <div>
                                    <h1 className="text-6xl Nexa  uppercase">Onde estamos</h1>
                                    <h1 className="text-6xl  Nexa font-bold uppercase mt-[-18px]">Localizados?</h1>
                                </div>
                            </div>
                            <p className="text-2xl mt-[-8px]">Nossa empresa está estrategicamente</p>
                            <p className="text-2xl mt-[-6px]">localizada na <span className="font-bold">R. Haddock Lobo, 170 - Rio </span></p>
                            <p className="text-2xl mt-[-6px]"><span className="font-bold">Comprido, </span >oferecendo fácil acesso e</p>
                            <p className="text-2xl mt-[-6px] ">comodidade para atender nossos clientes</p>
                            <p className="text-2xl mt-[-6px] ">com excelência e proximidade.</p>
                        </div>
                    </div>
                    <div className="col-span-6 flex items-center justify-end relative">
                        <a
                            href="https://www.google.com/maps?q=R.+Haddock+Lobo,+170+-+Rio+Comprido,+Rio+de+Janeiro"
                            target="_blank"
                            rel="noopener noreferrer"
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

                </div>
            </section>
            <footer className="grid grid-cols-12 items-start  h-[500px] bg-terciary text-secondary   w-full
                            ">
                <div className="col-span-12 grid grid-cols-12 items-center justify-center mt-20 ">
                    <span className="col-span-2"></span>
                    <div className="col-span-4 flex items-center justify-start px-14">
                        <div className="flex flex-row items-start gap-10 Nexa justify-center gap-0">
                            <Image src="/images/logo.png" alt="logo" width={300} height={100} className="col-span-1 " />
                            <div className="col-span-1">
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
                                        <li key={index} className="flex items-center">
                                            <ArrowForwardIosIcon className="text-terciary bg-secondary rounded-full p-1 mr-2" fontSize="medium" />
                                            <p className="Nexa text-2xl whitespace-nowrap">{label}</p>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <span ></span>
                            <div className="flex flex-col items-start Nexa justify-center gap-0">
                                <h1 className="text-5xl Nexa text-quaternary uppercase ">Combos</h1>
                                <ul className="flex flex-col items-start Nexa justify-center gap-0">
                                    {[
                                        "Combo Chefe completo",
                                        "Combo Gastronomia brasileira",
                                        "Combo administração de restaurantes",
                                        "Combo cozinha moderna e inovadora",

                                    ].map((label, index) => (
                                        <li key={index} className="flex items-center">
                                            <ArrowForwardIosIcon className="text-terciary bg-secondary rounded-full p-1 mr-2" fontSize="medium" />
                                            <p className="Nexa text-2xl whitespace-nowrap">{label}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span></span>

                            <ul className="flex flex-col items-center Nexa justify-center gap-4 mt-6">
                                {[
                                    InstagramIcon,
                                    FacebookIcon,
                                    XIcon,
                                    WhatsAppIcon,
                                ].map((Icon, index) => (
                                    <li key={index} className="flex items-center">
                                        <Icon className="text-2xl text-terciary bg-secondary rounded-full p-1 " />
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>

                </div>
                <div className="col-span-12 flex items-center justify-center">
                    <ul className="flex gap-4 ">
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