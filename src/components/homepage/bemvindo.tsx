import { Button } from "antd";
import Image from "next/image";
import React from "react";

const BemVindo = () => {
    return (
        <div className="grid grid-cols-12 gap-8 items-start justify-start h-screen">

            <div className="col-span-1 w-full h-full bg-[url('/images/bg/background-esquerdo.webp')] bg-cover bg-left bg-[length:750px_auto] bg-[-130px_50px] bg-no-repeat">
            </div>

            <div className="col-span-11 mt-16  ">
                <Image
                    src="/images/bg/background-esquerdo.webp"
                    alt="logo"
                    width={400}
                    height={400}
                    className="absolute left-1/2 top-1/2 transform -translate-x-[410px] -translate-y-[-40px] rotate-[-125deg]"
                />
                <Image
                    src="/images/bg/background-esquerdo.webp"
                    alt="logo"
                    width={200}
                    height={200}
                    className="absolute left-1/2 top-1/2 transform -translate-x-[-70px] -translate-y-[260px] rotate-[160deg] scale-x-[-1]"
                />
                <h1 className="text-5xl font-normal mb-1 ">Seja bem-vindo ao</h1>
                <h2 className="text-8xl font-[800] mb-1 uppercase">Instituto do</h2>
                <h3 className="text-9xl font-[800] mb-4 uppercase text-primary">sabor</h3>
                <p className="w-4/12 text-3xl">Descubra nossa formação <span className="font-[800]">completa em </span></p>
                <p className="w-5/12 text-3xl"><span className="font-[800]">gastronomia</span> e transforme sua paixão pela</p>
                <p className="w-4/12 text-3xl"> culinária em uma <span className="font-[800]">carreira de sucesso!</span></p>
                <Button type="primary" size="large" className="uppercase mt-8 py-8 px-6 text-4xl rounded-[20px]">Quero saber mais</Button>
            </div>

        </div >
    );
}

export default React.memo(BemVindo);