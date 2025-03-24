import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import Image from "next/image";
import HeaderExterno from "@/components/header/home/header";
import Localizacao from "../homepage/localizacao";

import { Button } from "antd";

const FaleConoscoComponent: React.FC = () => {
    const width = useWindowWidth();

    return (
        <>
            <HeaderExterno />
            <section >
                <aside
                    id="faleconosco"
                    className={` w-full bg-quinary
                                   grid grid-cols-12 items-center 
                                   mx-auto h-full sm:pt-24 sm:px-[140px] sm:py-20 px-2`}
                >
                    <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center">
                        <div className="text-[2.7rem] md:text-[4rem] lg:text-[3rem] 2xl:text-[5rem] uppercase font-bold ">
                            <h1 className="text-secondary bg-primary rounded-[10px]  px-2 ">Fale Conosco</h1>
                            <h2 className="mt-[-10px] px-2">Estamos aqui</h2>
                            <h2 className="mt-[-20px] px-2">para você</h2>
                        </div>
                        <div className="text-[.9rem] md:text-[1.3rem] lg:text-[.9rem]">
                            <p>
                                Tem dúvidas, sugestões ou quer saber mais sobre
                            </p>
                            <p>
                                nossos cursos? <span className="font-bold">Entre em contato e descubra como</span>
                            </p>
                            <p>
                                <span className="font-bold">podemos ajudar na sua jornada gastronômica!</span>
                            </p>
                            <br />
                        </div>
                        <Button type="primary">Entre em contato</Button>
                    </div>
                 
                    <Image className="col-span-6 " src={'/images/outros/faleconosco.png'}
                        alt="Fale Conosco"
                        width={800}
                        height={800} />
                </aside>

            </section>
            <Localizacao />
        </>
    );
};

export default React.memo(FaleConoscoComponent);