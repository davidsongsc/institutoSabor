import { useEffect, useState } from "react";
import { App } from "antd";
import Papa from "papaparse";

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

export function useCardsData(csvUrl: string) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { notification } = App.useApp();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(csvUrl);
        const csvText = await res.text();

        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const rows = parsed.data as any[];

        const formatted: CardData[] = rows.map((row) => {
          return {
            id: Number(row["ID"]),
            title: row["Título"],
            description: row["Descrição"],
            lista: row["Lista (JSON)"]
              ? JSON.parse(row["Lista (JSON)"].replace(/""/g, '"'))
              : [],
          };
        });

        setCards(formatted);
        console.log(formatted);
      } catch (err) {
        console.error("Erro ao buscar ou processar CSV:", err);
        notification.error({
          message: "Erro",
          description: "Não foi possível carregar os cards via CSV.",
        });
        setError("Erro ao carregar CSV");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [csvUrl]);

  return { cards, loading, error };
}
