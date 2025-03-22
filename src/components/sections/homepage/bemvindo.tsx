import { Button } from "antd";
import Image from "next/image";
import React from "react";

const SejaBemVindo: React.FC = () => {
    return (
        <section className="grid grid-cols-12 gap-8 items-start justify-start h-auto 2xl:max-w-[1900px] mx-auto px-[120px]">
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={800}
                height={800}
                className="w-[800px] h-auto absolute top-1/2 left-1/2 transform -translate-x-[1090px] -translate-y-[270px] z-1"
            />
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={400}
                height={400}
                className="absolute left-1/2 top-1/2 transform -translate-x-[410px] -translate-y-[-40px] rotate-[-125deg] z-1"
            />
            <Image
                src="/images/bg/background-esquerdo.webp"
                alt="logo"
                width={200}
                height={200}
                className="absolute left-1/2 top-1/2 transform -translate-x-[-70px] -translate-y-[260px] rotate-[160deg] scale-x-[-1] z-1"
            />
            <div className="col-span-12 mt-16 w-full">

                <h1 className="text-[calc(0.6rem+1.5vw)] font-normal  ">Seja bem-vindo ao</h1>
                <h2 className="text-[calc(3rem+1.9vw)] font-[800] mb-1 uppercase h-auto">Instituto do</h2>
                <h3 className="text-[calc(3.8rem+1.9vw)] font-[800] mt-[-40px] mb-4 uppercase text-primary">sabor</h3>
                <p className="w-4/12 text-[calc(0.1rem+1.5vw)] ">Descubra nossa formação <span className="font-[800]">completa em </span></p>
                <p className="w-5/12 text-[calc(0.1rem+1.5vw)]"><span className="font-[800]">gastronomia</span> e transforme sua paixão pela</p>
                <p className="w-4/12 text-[calc(0.1rem+1.5vw)]"> culinária em uma <span className="font-[800]">carreira de sucesso!</span></p>
                <Button type="primary" size="large" className=" uppercase mt-8 py-8 px-6 text-4xl rounded-[20px] ">Quero saber mais</Button>

            </div>
        </section >
    );
};

export default React.memo(SejaBemVindo);