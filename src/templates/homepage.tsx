'use client';

import { Button } from "antd";
import Image from "next/image";
import { useState } from "react";
export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(1);

    const cardsData = [
        {
            id: 1, title: "Chef Completo", description: "A Escolha ideal para quem deseja se tornar um chef versátil e altamente qualificado.", lista: [{ texto: "Fundamentos da gastronomia", img: "apostila" },
            { texto: "Cozinha clássica internacional", img: "preparo" },
            { texto: "Cozinha clássica brasileira", img: "cozido" },
            { texto: "Cursos EAD e presencial", img: "monitor" },
            { texto: "Carga horária: 360 Horas", img: "relogio" },
            { texto: "Certificado de conclusão profissionalizante", img: "certificado" },
            ]
        },
        { id: 2, title: "Gastronomia Brasileira", description: "Oferece uma imersão completa na riqueza e diversidade da culinária nacional.", lista: [{ texto: "Fundamentos da gastronomia", img: "apostila" }] },
        { id: 3, title: "Cozinha moderna e inovadora", description: "Explore a gastronomia com uma abordagem dinâmica.", lista: [{ texto: "Fundamentos da gastronomia", img: "apostila" }] },
        { id: 4, title: "Administração de restaurantes", description: "Preparar profissionais para a gestão eficiente de negócios gastronômicos.", lista: [{ texto: "Fundamentos da gastronomia", img: "apostila" }] },


    ];
    return (
        <div className="">
            <div className="grid grid-cols-12 gap-8 items-start justify-start h-[755px] ">
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

            </div >
            <div className="relative">
                <div className="absolute h-screen inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-cover bg-center bg-[-30px_-280px] z-1 opacity-5"></div>

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

                    <div className="col-span-7 justify-self-start">
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
                <div className="h-[200px] flex items-start justify-center Nexa">
                    <h1 className="uppercase text-7xl relative z-10 font-[800]" >Conheça nossos <span className="text-primary">combos exclusivos</span></h1>
                </div>
            </div>

            <div className="grid grid-cols-12 items-start justify-center h-screen gap-4">
                <span className="col-span-2"></span>
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`col-span-2 relative transition-all duration-500 ease-in-out ${activeIndex === index ? "group" : ""
                            }`}
                    >
                        <div
                            className={`h-[600px] ${activeIndex === index ? "h-[670px] translate-y-0" : "translate-y-[50px]"
                                } transform rounded-[20px] bg-quinary transition-all duration-500 ease-in-out`}
                        >
                            <div className="relative overflow-hidden flex flex-col items-center rounded-[20px] border border-black h-full">
                                <div
                                    className={` w-full flex flex-col items-center justify-start rounded-[20px]
                                            transition-all duration-300 px-2 py-8 
                                            ${activeIndex === index
                                            ? "text-secondary bg-primary h-[250px]"
                                            : "group-hover:text-secondary group-hover:bg-primary h-[220px]"
                                        }`}
                                >
                                    <h3 className="text-2xl text-center uppercase font-[800] border-b-2 border-senary w-[280px] mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-center">{card.description}</p>
                                    <Button
                                        type="primary"
                                        className={`mt-5 px-5 py-8 uppercase text-6xl ${activeIndex === index ? "bg-quaternary" : "group-hover:bg-quaternary"
                                            }`}
                                    >
                                        Saiba mais
                                    </Button>
                                </div>

                                <div className="w-full bg-gray-100 flex items-start justify-center mt-4">
                                    <ul className={` 
                                            ${activeIndex === index
                                            ? "mt-4"
                                            : "mt-0"
                                        }`}>
                                        {card.lista.map((item, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-center font-bold mb-2"
                                            >
                                                <div className="flex items-center justify-start w-full">
                                                    <Image src={`/images/items/${item.img}.webp`} alt="logo" width={70} height={100} ></Image>
                                                    <span className="text-left text-[16px] w-[200px]">{item.texto}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div >
    );
}