
const toCurrency = (num: number) => num?.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" });
const toFormatedNumber = (num: number) => num?.toLocaleString('pt-BR');

export {
    toCurrency,
    toFormatedNumber
}