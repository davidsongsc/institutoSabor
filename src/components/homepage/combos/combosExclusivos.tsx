import React from "react";
import { Button } from 'antd';

const CombosExclusivos = () => {
    const cardsData = [
        { id: 1, title: "Chef Completo", description: "A Escolha ideal para quem deseja se tornar um chef versátil e altamente qualificado." },
        { id: 2, title: "Gastronomia Brasileira", description: "Oferece uma imersão completa na riqueza e diversidade da culinária nacional." },
        { id: 3, title: "Cozinha moderna e inovadora", description: "Explore a gastronomia com uma abordagem dinâmica." },
        { id: 4, title: "Administração de restaurantes", description: "Preparar profissionais para a gestão eficiente de negócios gastronômicos." },


    ];
    return (
        <div className="grid grid-cols-12 items-start justify-center h-screen gap-4">
            <span className="col-span-2"></span>
            {cardsData.map(card => (
                <div key={card.id} className="col-span-2 rounded-[20px] bg-quinary">
                    <div className="group relative overflow-hidden h-[250px] flex flex-col rounded-[20px] border border-black">

                        <div className="h-[70%] w-full flex flex-col items-center justify-center group-hover:text-secondary group-hover:bg-primary transition-all duration-300 px-2 py-8 ">
                            <h3 className="text-2xl text-center uppercase font-[800] border-b-2 border-senary w-full h-20">
                                {card.title}
                            </h3>
                            <p className="text-sm text-center">{card.description}</p>
                            <Button type="primary" className="mt-5 p-5 uppercase text-2xl group-hover:bg-quaternary">Saiba mais</Button>
                        </div>

                        
                        <div className="h-[30%] w-full bg-gray-100 flex items-center justify-center">
                            <ul>Teste</ul>
                        </div>
                    </div>
                </div>
            ))}




        </div>
    );
}

export default React.memo(CombosExclusivos);