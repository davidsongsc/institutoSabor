import Image from "next/image";
import React, { useState } from "react";
import { Button, Spin } from "antd";


const EduOn: React.FC = () => {
    return (
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
    );
};

export default React.memo(EduOn);