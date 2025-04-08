import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="relative w-full max-w-[1500px] mx-auto my-8 px-2">
      <button
        className="absolute left-0 2xl:left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-terciary shadow-md rounded-full p-2 hidden sm:flex " 
        onClick={() => sliderRef.current?.prev()}
      >
        <LeftOutlined className="text-xl  text-secondary" />
      </button>

      <Carousel
        ref={sliderRef}
        dots={false}
        infinite={false}

        responsive={[
          { breakpoint: 2850, settings: { slidesToShow: 5, slidesToScroll: 1 } }, // Telas muito grandes
          { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 1 } }, // Telas muito grandes
          { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Telas grandes
          { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Tablets
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },  // Celulares
        ]}
        className="w-full"
      >
        {items.map((item) => (
          <div key={item.id} className="px-2">
            <div className="border border-black rounded-[20px] shadow-lg overflow-hidden bg-white text-center">
              <Image
                src={item.image}
                alt={item.title}
                unoptimized
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 bg-quinary flex flex-col items-center w-full justify-between 2xl:h-[220px] h-[200px] xl:h-[150px] sm:h-[110px]">
                <h3 className="xl:text-[1.2rem] md:text-[0.9rem] text-[1rem] Nexa 2xl:text-[1.5rem] font-bold text-left px-2 pb-4">{item.title}</h3>
                <div className="flex justify-between items-end w-full px-2">
                  <Link href="/quem-somos" className="text-[1rem] 2xl:text-[1.3rem] Nexa font-bold text-primary" >
                    saiba mais
                  </Link>
                  <p className="text-[0.8rem] 2xl:text-[.7rem] Nexa">{item.data}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <button
        className="absolute right-0 2xl:right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-terciary shadow-md rounded-full p-2 hidden sm:flex"
        onClick={() => sliderRef.current?.next()}
      >
        <RightOutlined className="text-xl text-secondary" />
      </button>
    </div>
  );
};

export default React.memo(Carrossel);
