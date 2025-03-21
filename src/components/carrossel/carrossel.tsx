import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import Link from "next/link";

interface MenuItem {
  id: number;
  title: string;
  image: string;
  data: string;
}

const items: MenuItem[] = [
  { id: 1, title: "Ideias para um prato especial Bonito e Saudável", image: "/images/ideias/carne.webp", data: "novembro 10, 2025" },
  { id: 2, title: "Veja o passo a passo do nosso frango grelhado", image: "/images/ideias/frango.webp", data: "novembro 10, 2025" },
  { id: 3, title: "Aprenda a montar um Salada Vegetal", image: "/images/ideias/vegano.webp", data: "novembro 10, 2025" },
  { id: 4, title: "Aprenda como montar um Hambúrguer Artesanal", image: "/images/ideias/hamburguer.webp", data: "novembro 10, 2025" },
  { id: 5, title: "Ideias para massas de fettuccine ", image: "/images/ideias/fettuccine.webp", data: "novembro 10, 2025" },
  { id: 6, title: "Aprenda a montar um Aperitivo", image: "/images/ideias/frangoempanado.webp", data: "novembro 10, 2025" },
  { id: 7, title: "Aprenda a montar um Torta de Morango", image: "/images/ideias/sorvete.webp", data: "novembro 10, 2025" },
];

const Carrossel: React.FC = () => {
  const sliderRef = useRef<any>(null);

  return (
    <div className=" relative w-full max-w-[1500px] mx-auto my-8">
      <button
        className="  absolute left-[-35px] top-1/2 transform -translate-y-[45px] z-10  shadow-md  "
        onClick={() => sliderRef.current?.prev()}
      >
        <LeftOutlined className="text-xl bg-terciary rounded-full p-1 text-secondary" />
      </button>

      <Carousel
        ref={sliderRef}
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        infinite={false}
      >

        {items.map((item) => (
          <div key={item.id} className="w-[460px] mx-2 ">
            <div className="border border-[1px] border-black rounded-[20px] shadow-lg overflow-hidden bg-white text-center mx-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4  bg-quinary flex flex-col items-center w-full justify-between">
                <h3 className="text-3xl Nexa font-bold text-left px-2 pb-4">{item.title}</h3>
                <div className="flex  justify-between items-end w-full  px-2">
                  <Link href="/quem-somos" className="text-2xl Nexa font-bold text-primary">saiba mais</Link>
                  <p className="text-sm Nexa">
                    {item.data}</p>
                </div>
              </div>
            </div>
          </div>

        ))}

      </Carousel>

      <button
        className="absolute right-[-35px] top-1/2 transform -translate-y-[45px] z-10  shadow-md "
        onClick={() => sliderRef.current?.next()}
      >
        <RightOutlined className="text-xl bg-terciary rounded-full p-1 text-secondary" />
      </button>
    </div>
  );
};

export default React.memo(Carrossel);
