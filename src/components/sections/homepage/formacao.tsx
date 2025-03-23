import Image from "next/image";
import React, { useState } from "react";
import { Button, Spin } from "antd";


const FormacaoTecnica: React.FC = () => {
    return (
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
    );
};

export default React.memo(FormacaoTecnica);