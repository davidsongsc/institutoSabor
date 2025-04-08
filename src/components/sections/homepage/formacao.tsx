import Image from "next/image";
import React, { useState } from "react";
import { Button, Spin } from "antd";


const FormacaoTecnica: React.FC = () => {
    return (
        <section className="grid grid-cols-12 items-center  h-auto text-secondary mt-16 bg-[url('/images/bg/background-formacao.webp')]
                              bg-cover bg-center w-full sm:px-[120px] bg-primary   sm:py-[40px] md:py-[20px] px-0">
            <div className="col-span-12 grid grid-cols-12 max-w-[1900px] mx-auto">


                <div className="col-span-12 grid grid-cols-12 items-center justify-center mt-20 Nexa">
                    <span className="xl:col-span-1"></span>
                    <div className="xl:col-span-5 md:col-span-12 col-span-12 relative z-10">
                        <div className="flex flex-col items-center sm:items-start justify-center gap-0 ">
                            <p className="text-[1.3rem] sm:text-[1.5rem]  ">Domine a arte da gastronomia com a</p>
                            <h1 className="text-[2.1rem] sm:text-[2.5rem] md:text-[4rem] 2xl:text-[3.5rem] xl:text-[3rem] font-bold uppercase">Formação técnica</h1>
                            <p className="text-[0.77rem] sm:text-[1rem] mt-[-8px] md:text-[1.57rem] 2xl:text-[1.3rem] xl:text-[1rem] "><span className="font-bold">Com uma abordagem prática e certificação reconhecida,</span> você</p>
                            <p className="text-[0.73rem] mt-[-8px] sm:text-[1rem] md:text-[1.5rem] 2xl:text-[1.2rem]  xl:text-[1rem]">desenvolverá habilidades essenciais para se destacar no mercado.</p>
                            <p className="text-[0.8rem] mt-[-8px] sm:text-[1rem] md:text-[1.6rem] 2xl:text-[1.35rem] xl:text-[1rem]">Inscreva-se agora e dê o primeiro passo para <span className="font-[700] "> uma trajetória</span></p>
                            <p className="text-[2rem] mt-[-8px] font-[700]">profissional de sucesso!</p>
                            <Button type="primary" size="large" className="mt-10 uppercase text-[1rem]  text-terciary bg-quaternary" >Conheça a formação</Button>
                        </div>
                    </div>
                    <div className="col-span-7 flex items-center justify-start relative hidden xl:block relative z=1">
                        <Image
                            src="/images/outros/instrutores.webp"
                            alt="Instrutores"
                            width={1000}
                            height={500}
                            unoptimized
                            className={`absolute bottom-[-24px] right-[-100px] transform translate-x-[60%] `}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(FormacaoTecnica);