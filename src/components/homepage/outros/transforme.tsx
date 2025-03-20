import React from "react";
import { Button } from 'antd';
import Image from "next/image";

const TransformeSuaPaixao = () => {
    return (
        <div className=" col-span-12 grid grid-cols-12">
            <span className="col-span-6">
                <Image
                    src="/images/bg/prato-especial.webp"
                    alt="logo"
                    width={400}
                    height={400}
                    className="absolute "
                />
            </span>
            <div className="col-span-3 justify-self-start">
                <h1 className="bg-primary text-secondary text-xl uppercase text-center font-[800] mb-1 p-2 rounded">Transformamos sua paixão pela</h1>
                <h2 className="bg-quaternary text-primary text-1xl uppercase  font-[800] px-2 rounded text-left justify-self-start">Culinária em carreira de sucesso</h2>
                <p className="mt-5">Ensinando técnicas e segredos para atuar em restaurantes,</p>
                <p>bares ou abrir seu próprio negócio. Nosso objetivo é prepará-lo</p>
                <p>para os desafios do mundo gastronômico. <span className="font-[800]">Junte-se a nós e</span></p>
                <p><span className="font-[800]">inicie sua jornada com pé direito!</span></p>
                <Button type="primary" size="large" className="uppercase mt-6 text-xl px-8">Seja nosso aluno</Button>
            </div>
        </div>
    );
}
export default React.memo(TransformeSuaPaixao);