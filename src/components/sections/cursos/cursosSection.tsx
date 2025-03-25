import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Image from "next/image";
import HeaderExterno from "@/components/header/sobre/header";


import { Button } from "antd";
import { conquisteCertificacaoTextos, sejaBemVindoTextos } from "@/consts/cursosTextos";
const CursosSection: React.FC = () => {

    return (
        <>
            <HeaderExterno />

            <section className="">
                <aside
                    id="sobrenos"
                    className={`bg-[url('/images/cursos/background.png')]
                        bg-contain bg-left w-full bg-primary bg-no-repeat bg-[-185px_60px]
                        grid grid-cols-12 items-center 
                        mx-auto h-full sm:h-[700px] h-[100px] Nexa py-8`}
                >
                    <div className="col-span-12 grid grid-cols-12 items-center text-secondary px-2 sm:px-0">
                        <span className="col-span-1 "></span>
                        <div className="col-span-12 md:col-span-8 lg:col-span-6 xl:col-span-5 3xl:col-span-3 sm:col-span-10 ">
                            <h1 className="text-[1.5rem] sm:text-[2.1rem] font-bold uppercase">{sejaBemVindoTextos.h1}</h1>
                            <h2 className="text-quaternary text-[5.2rem] sm:text-[7.4rem] mt-[-35px] font-bold uppercase">{sejaBemVindoTextos.h2}</h2>
                            <div className="border border-secondary rounded-lg px-2 uppercase mt-[-20px]">
                                <h3 className="text-[1rem] sm:text-[1.45rem]">
                                    <b>{sejaBemVindoTextos.h3}</b>
                                </h3>
                                <p className="mt-[-5px] text-[1.05rem] sm:text-[1.55rem]">
                                    {sejaBemVindoTextos.tituloTexto?.[0]}
                                </p>
                            </div>
                            <div className="text-[0.73rem] sm:text-[1rem] mt-2">
                                <p>{sejaBemVindoTextos.tituloTexto?.[1]}</p>
                                <p>{sejaBemVindoTextos.tituloTexto?.[2]}</p>
                            </div>

                            <ul className="gap-4 grid grid-cols-8 items-center justify-center">
                                {sejaBemVindoTextos.images?.map((logo, index) => (
                                    <li key={index} className="col-span-2">
                                        <Image src={`/images/selos/${logo}.png`} alt="logo" width={200} height={100} className="p-1" />
                                    </li>
                                ))}
                            </ul>

                            <Button type="primary"
                                className="text-terciary uppercase px-4 
                                            py-6 bg-quaternary Nexa text-[1.95rem] 
                                            sm:text-[2.7rem]">{sejaBemVindoTextos.buttonTexto}</Button>
                        </div>
                        <div className="col-span-4">
                            <Image
                                src={`/images/cursos/mecselo.png`}
                                alt={'Certificação'}
                                width={850}
                                height={140}
                            />
                        </div>
                    </div>
                </aside>
                <aside className="grid grid-cols-6 sm:grid-cols-12 py-12 items-center justify-center Nexa">
                    <Image
                        src={`/images/cursos/${conquisteCertificacaoTextos.imagem}`}
                        className="col-span-6 sm:pl-[40px] "
                        alt={'Certificação'}
                        width={850}
                        height={140}
                    />

                    <div className="col-span-6 sm:col-span-4 px-4 sm:px-0">
                        <b className="uppercase">
                            <h1 className="text-[1.19rem] sm:text-[1.7rem]">
                                {conquisteCertificacaoTextos.h1}
                            </h1>
                            <h2 className="text-[1.14rem]">
                                {conquisteCertificacaoTextos.h2}
                            </h2>
                        </b>
                        <div className="text-[.64rem]">
                            {conquisteCertificacaoTextos.tituloTexto?.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}

                        </div>
                        <h3 className="uppercase text-[.80rem] mt-4">
                            {conquisteCertificacaoTextos.h3}
                        </h3>
                        <ul className="uppercase flex flex-col gap-3 font-bold mt-4">
                            {conquisteCertificacaoTextos.listaItens?.map((item, index) => (
                                <>{item}</>
                            ))}
                        </ul>

                    </div>

                </aside>
            </section>

        </>
    );
};

export default React.memo(CursosSection);