import Image from "next/image";
import React, { useState } from "react";
import { Button, Spin } from "antd";


const EduOn: React.FC = () => {
    return (
        <section className="grid grid-cols-12 items-center h-auto justify-center text-secondary w-full
                    bg-[url('/images/bg/background-formacao.webp')] bg-cover bg-center bg-no-repeat bg-primary xl:bg-secondary md:py-20 sm:py-10">


            <div className="col-span-12 grid lg:grid-cols-12 md:grid-cols-6 items-center justify-start mt-20 max-w-[1900px] mx-auto">
                <div className="col-span-6 flex items-center justify-center relative hidden xl:block">
                    <Image
                        src="/images/outros/oniaedu.webp"
                        alt="Instrutores"
                        width={1100}
                        height={500}
                        className="w-[calc(100%+100px)]"
                    />
                </div>

                <div className="col-span-6 flex items-center justify-start px-0 sm:px-14">
                    <div className="flex flex-col items-start Nexa justify-center gap-0">
                        <Image src="/images/ideias/eduon.png" alt="Selo" width={300} height={100} className=" max-w-none w-[100px] sm:w-[100%]" />
                        <h1 className="text-[1.4rem] sm:text-[2.7rem] Nexa font-bold uppercase">Aprenda na melhor</h1>
                        <h1 className="text-[1.64rem] sm:text-[3.2rem] Nexa font-bold uppercase ">Plataforma ead!</h1>
                        <p className="text-[0.8rem] mt-[-8px] sm:text-[1.2rem] ">O Instituto do Sabor oferece seus cursos no <span className="font-bold">plataforma</span></p>
                        <p className="text-[0.8rem] mt-[-6px] sm:text-[1.2rem]"><span className="font-bold">Edu On,</span> proporcionando um aprendizado acessivel e de</p>
                        <p className="text-[.8rem] mt-[-6px] sm:text-[1.1rem]">qualidade. Com <span className="font-bold">parcerias renomadas,</span > nossos certificados</p>
                        <p className="text-[.95rem] mt-[-6px] sm:text-[1.3rem]">garantem mais reconhecimento e apliam suas</p>
                        <p className="text-[.95rem] mt-[-6px] sm:text-[1.4rem]">oportunidades no mercado.</p>
                        <Button type="primary"  className="mt-10 uppercase text-[.95rem] sm:text-[1.5rem] text-terciary bg-quaternary py-5 mb-10 sm:mb-0" >Inscreva-se e aprimore sua formação!</Button>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default React.memo(EduOn);