import Image from "next/image";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Localizacao: React.FC = () => {
    return (
        <section className="grid lg:grid-cols-12 items-center md:grid-cols-6 justify-center  text-tertiary  w-full max-w-[1900px] mx-auto h-auto md:my-20
        ">

            <span className="col-span-1"></span>
            <div className="col-span-5 flex items-center justify-start sm:px-14">
                <div className="flex flex-col items-start Nexa justify-center gap-0">
                    <div className="flex  items-center Nexa justify-center gap-0">
                        <LocationOnIcon className="text-primary mr-4" fontSize="large" style={{ scale: 2 }} />
                        <div>
                            <h1 className="text-[calc(1.8rem+0.5vw)] Nexa  uppercase">Onde estamos</h1>
                            <h1 className="text-[calc(1.8rem+0.5vw)]  Nexa font-bold uppercase mt-[-18px]">Localizados?</h1>
                        </div>
                    </div>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-8px]">Nossa empresa está estrategicamente</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]">localizada na <span className="font-bold">R. Haddock Lobo, 170 - Rio </span></p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px]"><span className="font-bold">Comprido, </span >oferecendo fácil acesso e</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">comodidade para atender nossos clientes</p>
                    <p className="text-[calc(0.8rem+0.5vw)] mt-[-6px] ">com excelência e proximidade.</p>
                </div>
            </div>
            <div className="col-span-6 flex items-center justify-end relative">
                <a
                    href="https://www.google.com/maps?q=R.+Haddock+Lobo,+170+-+Rio+Comprido,+Rio+de+Janeiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6"
                >
                    <Image
                        src="/images/outros/mapa.png"
                        alt="Ver no Google Maps"
                        width={900}
                        height={300}
                        className="rounded-lg shadow-md hover:opacity-80 transition-opacity border border-2 border-primary"
                    />
                </a>

            </div>

        </section>
    );
};

export default React.memo(Localizacao);