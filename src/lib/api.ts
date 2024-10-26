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

export const getCategories = () => {
  return Promise.resolve([
    {
      categoryId: 1,
      category: 'Products',
      count: 4,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 8,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 26,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 1,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 37,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 22,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 4,
    },
    {
      categoryId: 1,
      category: 'Products',
      count: 12,
    },
  ]);
};
