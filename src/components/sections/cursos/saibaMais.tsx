import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { listaSaibaMais, saibaMaisTextos } from "@/consts/cursosTextos";
const CursosSaibaMais: React.FC = () => {

    
    return (
        <>

            <section className="grid grid-cols-12 items-center justify-center text-center h-auto  mt-16 ">
                <aside className="col-span-12">
                    <h1 className="text-[2.5rem] font-bold uppercase text-primary">{saibaMaisTextos.titulo}</h1>
                    <p className="text-[1.2rem] mt-2">{saibaMaisTextos.texto}</p>

                    <ul className="flex flex-wrap justify-center gap-4 px-[140px] text-secondary mt-4">
                        {listaSaibaMais.map((item, index) => (
                            <li key={index} className="bg-primary rounded-[10px] w-[370px] h-[310px] ">
                                <div className="mt-2 h-10 flex items-center justify-center">
                                    <Image
                                        src={`/images/cursos/${item.icone}.webp`}
                                        alt={item.icone}
                                        width={50}
                                        height={40}
                                        style={{ filter: 'invert(1) brightness(3)' }}
                                    />
                                </div>
                                <h2 className="h-24 text-[1.8rem] uppercase flex items-center justify-center">
                                    <b>
                                        {item.titulo}
                                    </b>
                                </h2>
                                <p className="text-[0.8rem] h-28 px-4 text-left">{item.texto}</p>
                                <Button
                                    type="primary"
                                    className="uppercase bg-quaternary 
                                                text-terciary Nexa text-[1.8rem] py-5">{saibaMaisTextos.buttonTexto}</Button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-center py-10">
                        <Image
                            src={`/images/cursos/certificadorapido.webp`}
                            alt={'Certificação'}
                            width={550}
                            height={140}
                        />
                    </div>
                </aside>
            </section>

        </>
    );
};

export default React.memo(CursosSaibaMais);