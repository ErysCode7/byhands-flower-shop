const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });
  
  export const formatCurrency = (number: number = 0) => {
    return CURRENCY_FORMATTER.format(number);
  };
  