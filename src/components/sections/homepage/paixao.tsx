import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import { Button } from "antd";
import Image from "next/image";


const TransformeCarreira: React.FC = () => {
    const width = useWindowWidth();

    return (
        <section className="relative mt-16  max-w-[1900px] mx-auto ">
            <div className={`absolute h-screen w-screen inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-cover ${width <= 1920 ? "PositionBg" : "PositionBgMedia"} bg-top bg-[-30px_-280px] z-1 opacity-5`}></div>

            <div className="relative z-10 col-span-12 grid grid-cols-12 lg:h-[700px] items-center justify-center">
                <span className="col-span-4 hidden 2xl:block">
                    <Image
                        src="/images/bg/prato-especial.webp"
                        alt="logo"
                        width={2200}
                        height={1500}
                        className="absolute left-1/2 top-1/2 transform -translate-x-[1150px] -translate-y-[580px] z-1"
                        unoptimized={true}
                    />
                </span>
                <span className="col-span-1 2xl:col-span-2"></span>
                <div className="sm:col-span-12 2xl:col-span-6  justify-self-start relative z-10 transform 2xl:-translate-x-[110px]">
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
                        className="w-auto hidden 2xl:block h-auto absolute  transform right-[-180px] top-[-90px]"
                    />
                </div>
            </div>

        </section>
    );
};

export default React.memo(TransformeCarreira);