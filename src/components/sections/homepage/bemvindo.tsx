import { Button } from "antd";
import Image from "next/image";
import React from "react";
import HeaderExterno from "@/components/header/externo/header";

const SejaBemVindo: React.FC = () => {
    return (
        <section id="seja-bem-vindo"

            className={`grid grid-cols-12 gap-8  items-start justify-center md:justify-start h-screen  2xl:max-w-[1900px] mx-auto px-[120px] relative z-10 mb-[250px] 
                        bg-[url('/images/bg/background-principal.webp')]  bg-right bg-top bg-no-repeat `}
            style={{
                backgroundImage: "url('/images/bg/background-principal.webp')",
                backgroundPosition: "right top",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "-240px",
            }}>
            <HeaderExterno />

            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={800}
                height={800}
                className="w-[800px] hidden lg:block h-auto absolute top-1/2 left-0 transform md:-translate-x-36 -translate-x-6 lg:-translate-y-[270px] -translate-y-[100px] z-1"
            />
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={400}
                height={400}
                className="hidden 2xl:block absolute left-0 top-1/2 transform -translate-x-[-500px] -translate-y-[-40px] rotate-[-125deg] z-1"
            />
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={200}
                height={200}
                className="hidden 2xl:block absolute left-0 top-1/2 transform -translate-x-[-990px] -translate-y-[300px] rotate-[160deg] scale-x-[-1] z-1"
            />

            <div className="col-span-12 mt-16 w-full text-center md:text-left sm:text-center bg-gradient-to-r from-secondary 2xl:from-transparent to-transparent p-5 rounded-[20px]">
                <h1 className="text-3xl sm:text-5xl lg:text-2xl font-normal">Seja bem-vindo ao</h1>
                <h2 className="lg:text-9xl sm:text-[3rem] md:text-[4rem] xl:text-10xl text-6xl font-[800]  mb-1 uppercase h-auto md:mt-[-30px] lg:mt-[-40px]">Instituto do</h2>
                <h3 className="text-8xl sm:text-[7rem] md:text-[9rem] md:mt-[-80px] lg:text-17xl lg:mt-[-150px] xl:text-17xl lg:mt-[-100px] font-[800] mt-[-40px] mb-4 uppercase text-primary">sabor</h3>

                <div className="bg-gradient-to-l from-secondary lg:from-transparent to-transparent rounded-[20px] p-2 text-left">
                    <p className="w-full  text-[1rem] sm:text-[1.15rem] md:text-[1.6rem] lg:mt-[-100px] 2xl:mt-[0]">Descubra nossa formação <span className="font-[800]">completa em </span></p>
                    <p className="w-full text-[.95rem] sm:text-[1.09rem] md:text-[1.5rem]"><span className="font-[800]">gastronomia</span> e transforme sua paixão pela</p>
                    <p className="w-full text-[1rem] sm:text-[1.15rem] md:text-[1.5rem]"> culinária em uma <span className="font-[800]">carreira de sucesso!</span></p>
                </div>
                <Button
                    type="primary"
                    size="large"
                    className="uppercase mt-8 py-8 px-6 text-4xl rounded-[20px]"
                    onClick={() => {
                        const element = document.getElementById('transformando-paixao');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    Quero saber mais
                </Button>            </div>
        </section>

    );
};

export default React.memo(SejaBemVindo);