import { Button } from "antd";
import Image from "next/image";
import React from "react";

const SejaBemVindo: React.FC = () => {
    return (
        <section className="grid grid-cols-12 gap-8 items-start justify-start h-auto 2xl:max-w-[1900px] mx-auto px-[120px] relative z-10 mb-[250px]">
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={800}
                height={800}
                className="w-[800px] h-auto absolute top-1/2 left-0 transform md:-translate-x-36 -translate-x-6 lg:-translate-y-[270px] -translate-y-[100px] z-1"
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
                className="hidden 2xl:block absolute left-0 top-1/2 transform -translate-x-[-940px] -translate-y-[260px] rotate-[160deg] scale-x-[-1] z-1"
            />

            <div className="col-span-12 mt-16 w-full text-center md:text-left">
                <h1 className="text-3xl lg:text-2xl font-normal">Seja bem-vindo ao</h1>
                <h2 className="lg:text-9xl md:text-7xl  xl:text-10xl text-6xl font-[800]  mb-1 uppercase h-auto md:mt-[-30px] lg:mt-[-40px]">Instituto do</h2>
                <h3 className="text-8xl md:text-11xl md:mt-[-80px] lg:text-17xl lg:mt-[-150px] xl:text-17xl lg:mt-[-100px] font-[800] mt-[-40px] mb-4 uppercase text-primary">sabor</h3>
                <p className="w-full text-[1rem] md:text-[1.7rem] lg:mt-[-100px] 2xl:mt-[0]">Descubra nossa formação <span className="font-[800]">completa em </span></p>
                <p className="w-full text-[1rem] md:text-[1.7rem]"><span className="font-[800]">gastronomia</span> e transforme sua paixão pela</p>
                <p className="w-full text-[1rem] md:text-[1.7rem]"> culinária em uma <span className="font-[800]">carreira de sucesso!</span></p>
                <Button type="primary" size="large" className="uppercase mt-8 py-8 px-6 text-4xl rounded-[20px]">Quero saber mais</Button>
            </div>
        </section>

    );
};

export default React.memo(SejaBemVindo);