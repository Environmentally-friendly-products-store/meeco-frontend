const cardToYandexProduct = (card) => ({
  id: card.id,
  brand: card.brand,
  category: card.category,
  name: card.name,
  price: card.price_per_unit,
});

export const trackDetails = (card) => {
  window.dataLayer.push(
    // Ecommerce-объект
    {
      ecommerce: {
        currencyCode: 'RUB',
        detail: {
          products: [cardToYandexProduct(card)],
        },
      },
    }
  );
};

/**
 *
 * @param {{ id, name, brand, category, price_per_unit }[]} cards
 */
export const trackCatalog = (cards) => {
  window.dataLayer.push(
    // Ecommerce-объект
    {
      ecommerce: {
        currencyCode: 'RUB',
        impression: {
          products: cards.map((c) => cardToYandexProduct(c)),
        },
      },
    }
  );
};

export const trackAddToCart = (card) => {
  window.dataLayer.push(
    // Ecommerce-объект
    {
      ecommerce: {
        currencyCode: 'RUB',
        add: {
          products: [cardToYandexProduct(card)],
        },
      },
    }
  );
};

/**
 *
 * @param {{ id, name, brand, category, price_per_unit }[]} cards
 * @param name
 */
export const trackPromoView = (cards, name) => {
  window.dataLayer.push(
    // Ecommerce-объект
    {
      ecommerce: {
        currencyCode: 'RUB',
        promoView: {
          products: cards.map((c) => cardToYandexProduct(c)),
          promotions: [{ name }],
        },
      },
    }
  );
};
