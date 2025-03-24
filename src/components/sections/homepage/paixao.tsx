import React from "react";
import { useWindowWidth } from "@/utils/getWindowWidth";
import { Button } from "antd";
import Image from "next/image";


const TransformeCarreira: React.FC = () => {
    const width = useWindowWidth();

    return (
        <section id="transformando-paixao" className="relative mt-12  max-w-[1900px] mx-auto bg-secondary rounded-[20px]  ">
            <div className={`absolute h-screen left-[calc(-300px-1.5vw)] w-screen inset-0 bg-[url('/images/bg/background-legumes.webp')] bg-contain bg-center bg-[-30px_-280px] z-1 opacity-5`}></div>

            <div className="relative z-10 col-span-12 grid grid-cols-12 lg:h-[700px] items-center justify-center ">
                <span className="col-span-5 2xl:col-span-5 hidden lg:block ">
                    <Image
                        src="/images/bg/prato-especial.webp"
                        alt="logo"
                        width={2200}
                        height={1500}
                        className="absolute left-1/2 top-1/2 transform -translate-x-[1150px]  2xl:-translate-x-[1150px] lg:-translate-x-[750px] xl:-translate-x-[950px] xl:-translate-y-[280px] 2xl:-translate-y-[580px] -translate-y-[580px] z-1"
                        unoptimized={true}
                    />
                </span>
                <div className="sm:col-span-12 2xl:col-span-7 col-span-12  justify-self-center relative px-4 z-10 transform 2xl:-translate-x-[110px]">
                    <div className=" justify-self-start">
                        <h1 className="bg-primary text-[1rem] text-secondary sm:text-[1.8rem] sm:text-[1.9rem] uppercase text-center font-[800] mb-1 px-4 py-2 rounded">
                            Transformamos sua paixão pela
                        </h1>
                        <h2 className="mt-2 bg-quaternary text-primary text-[1rem] sm:text-[1.7rem] sm:text-[1.8rem] uppercase font-[800] px-4 py-2 rounded text-left justify-self-start">
                            Culinária em carreira de sucesso
                        </h2>

                    </div>
                    <div className=" justify-self-start pt-4 Nexa relative z-10 bg-quinary sm:bg-transparent xl:bg-quinary 2xl:bg-transparent xl:p-8 2xl:p-0 xl:rounded-[20px] ">

                        <p className="mt-5 text-[0.7rem] sm:text-[1.2rem] md:text-[1.4rem]">
                            Ensinando técnicas e segredos para atuar em restaurantes,
                        </p>
                        <p className="text-[0.7rem] sm:text-[1.2rem] md:text-[1.4rem] ">
                            bares ou abrir seu próprio negócio. Nosso objetivo é prepará-lo
                        </p>
                        <p className="text-[0.7rem] sm:text-[1.2rem] md:text-[1.4rem]">
                            para os desafios do mundo gastronômico. <span className="font-bold">Junte-se a nós e</span>
                        </p>
                        <p className="text-[0.7rem] sm:text-[1.2rem] md:text-[1.4rem]">
                            <span className="font-[800]">inicie sua jornada com pé direito!</span>
                        </p>
                        <Button type="primary" size="large" className="uppercase mt-8 text-2xl p-8 Nexa" onClick={() => {
                            const element = document.getElementById('combos-exclusivos');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            Seja nosso aluno
                        </Button>
                    </div>
                    <Image
                        src="/images/outros/tomate-tempero.webp"
                        alt="logo"
                        width={1200}
                        height={100}
                        className="w-auto hidden 2xl:block h-auto absolute  transform right-[-160px] top-[-75px]"
                    />
                </div>
            </div>

        </section>
    );
};

export default React.memo(TransformeCarreira);