
export const Currency = {
  code: "",
  base: 0,
  exponent: 0
};
export const Price = {
  amount: 0,
  currency: Currency,
  scale: 0
};

export const Discount = {
  percent: 0, 
  expires: 0,
};

export const UsedPrice = {
  amount: 0, 
  currency: Currency,
  scale: 0
};
export const Product = {
  id:"",
  stock: 0,
  rating: 0,
  name: "",
  description: "",
  price: Price,
  isBestSeller: true,
  leadTime: 0,
  image: null,
  imageBlur: null,
  discount: null,
  usedPrice: null
};
