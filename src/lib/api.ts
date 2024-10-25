export const getStats = () => {
  return Promise.resolve({
    promotions: 432,
    category: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSales = () => {
  const sales = [];

  for (let i = 0; i < 6; i++) {
    sales.push({
      companyId: i + 1,
      name: 'Costco Wholesale',
      sold: 459,
      income: 600,
    });
  }
  return Promise.resolve(sales);
};
