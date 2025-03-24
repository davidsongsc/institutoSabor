import { useEffect, useState } from "react";
import { App } from "antd";

export interface ListaItem {
  texto: string;
  img: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  lista: ListaItem[];
}

// Dados simulados
const simulatedData: CardData[] = [
  {
    id: 1,
    title: "Chef Completo",
    description:
      "A Escolha ideal para quem deseja se tornar um chef versátil e altamente qualificado.",
    lista: [
      { texto: "Fundamentos da gastronomia", img: "apostila" },
      { texto: "Cozinha clássica internacional", img: "preparo" },
      { texto: "Cozinha clássica brasileira", img: "cozido" },
      { texto: "Cursos EAD e presencial", img: "monitor" },
      { texto: "Carga horária: 360 Horas", img: "relogio" },
      {
        texto: "Certificado de conclusão profissionalizante",
        img: "certificado",
      },
    ],
  },
  {
    id: 2,
    title: "Gastronomia Brasileira",
    description:
      "Oferece uma imersão completa na riqueza e diversidade da culinária nacional.",
    lista: [
      { texto: "Cozinha brasileira", img: "panela" },
      { texto: "Sustentabilidade e gastronomia", img: "preparo" },
      { texto: "Planejamento de cardápio e evento", img: "menu" },
      { texto: "Cursos EAD e presencial", img: "monitor" },
      { texto: "Carga horária: 360 Horas", img: "relogio" },
      {
        texto: "Certificado de conclusão profissionalizante",
        img: "certificado",
      },
    ],
  },
  {
    id: 3,
    title: "Cozinha moderna e inovadora",
    description: "Explore a gastronomia com uma abordagem dinâmica.",
    lista: [
      { texto: "Cozinha contemporânea e molecular", img: "mesa" },
      { texto: "Nutrição e dietética", img: "verduras" },
      { texto: "Enologia e harmonização", img: "prato" },
      { texto: "Cursos EAD e presencial", img: "monitor" },
      { texto: "Carga horária: 360 Horas", img: "relogio" },
      {
        texto: "Certificado de conclusão profissionalizante",
        img: "certificado",
      },
    ],
  },
  {
    id: 4,
    title: "Administração de restaurantes",
    description:
      "Preparar profissionais para a gestão eficiente de negócios gastronômicos.",
    lista: [
      { texto: "Gestão de restaurantes e serviços de alimentação", img: "tampa" },
      { texto: "Empreendedorismo gastronômico", img: "cozinha" },
      { texto: "Planejamento de cardápios e eventos", img: "menu" },
      { texto: "Cursos EAD e presencial", img: "monitor" },
      { texto: "Carga horária: 360 Horas", img: "relogio" },
      {
        texto: "Certificado de conclusão profissionalizante",
        img: "certificado",
      },
    ],
  },
];

export function useCardsDataOffline() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { notification } = App.useApp();

  useEffect(() => {
    const loadSimulatedData = () => {
      try {
        setTimeout(() => {
          setCards(simulatedData);
        }, 100); 
      } catch (err) {
        console.error("Erro ao carregar dados simulados:", err);
        notification.error({
          message: "Erro",
          description: "Não foi possível carregar os cards simulados.",
        });
        setError("Erro ao carregar dados simulados");
      } finally {
        setLoading(false);
      }
    };

    loadSimulatedData();
  }, []);

  return { cards, loading, error };
}