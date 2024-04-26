export type TNewPlace = {
  partnerId: string;
  categoryId: string;
  place: {
    title: string;
    description: string;
    kitchen: string;
    openingTime: string;
    closingTime: string;
    minAvgPriceId: string;
    maxAvgPriceId: string;
  };
  discount: {
    conditions: string[];
    amount: number;
    information: string;
    discountTypeId: string;
  };
  addresses: TNewAddress[];
};

export type TNewAddress = {
  city: string;
  street: string;
  house: string;
  latitude: string;
  longitude: string;
};
