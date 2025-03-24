// src/utils/responsiveUtils.ts

/**
 * Retorna o modo do menu ("vertical" ou "horizontal") com base na largura da tela.
 * @param width - A largura atual da tela.
 * @returns "vertical" se a largura for menor ou igual a 640px, caso contrário "horizontal".
 */
export const getMenuMode = (width: number): "vertical" | "horizontal" => {
    return width <= 639 ? "vertical" : "horizontal";
};

/**
 * Retorna uma string condicional com base na largura da tela.
 * @param width - A largura atual da tela.
 * @param breakpoint - O ponto de quebra para a condição.
 * @param valueIfTrue - O valor a ser retornado se a largura for menor ou igual ao breakpoint.
 * @param valueIfFalse - O valor a ser retornado se a largura for maior que o breakpoint.
 * @returns O valor correspondente à condição.
 */
export const getResponsiveValue = <T>(width: number, breakpoint: number, valueIfTrue: T, valueIfFalse: T): T => {
    return width <= breakpoint ? valueIfTrue : valueIfFalse;
};