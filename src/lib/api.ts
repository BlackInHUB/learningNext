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

export const getCountries = () => {
  return Promise.resolve([
    { countryId: 1, country: 'Canada', count: 4 },
    { countryId: 2, country: 'USA', count: 4 },
    { countryId: 3, country: 'Italia', count: 2 },
    { countryId: 4, country: 'Ukraine', count: 2 },
    { countryId: 5, country: 'Spain', count: 2 },
  ]);
};

export const getPromotions = () => {
  const items = [];

  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId: i + 1,
      companyName: 'Costco Wholesale',
      promotionName: 'Lorem ipsum dolor ',
      discount: Math.floor(Math.random() * (80 - 5) + 5),
    });
  }

  return Promise.resolve(items);
};
