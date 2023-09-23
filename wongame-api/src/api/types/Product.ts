export type Product = {
  id: string;
  slug: string;
  features: [
    {name: string, slug: string}
  ];
  screenshots: string[];
  userPreferredLanguage: {
    code: string;
    inAudio: boolean;
    inText: boolean
  };
  releaseDate: string;
  storeReleaseDate: string;
  productType: string;
  title: string
  coverHorizontal: string
  coverVertical: string;
  developers: string[];
  publishers: string[];
  operatingSystems: string[];
  price: {
    final: string;
    base: string;
    discount: string | null;
    finalMoney: {
      amount: string;
      currency: string;
      discount: string;
    };
    baseMoney: {
      amount: string;
      currency: string;
    };
  };
  productState: string;
  genres: [
    {
      name: string;
      slug: string;
    }
  ];
  tags: [
    {
      name: string;
      slug: string;
    }
  ];
  reviewsRating: number;
}
