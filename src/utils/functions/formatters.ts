const moneyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

const formatMoney = (money: number): string => {
    return moneyFormatter.format(money);
};

export { formatMoney };
