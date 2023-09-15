export const pages = [
  {
    id: 1,
    text: "მიწოდება",
    url: "/delivery",
  },
  {
    id: 2,
    text: "ანგარიშსწორება",
    url: "/payment",
  },
  {
    id: 3,
    text: "სიახლეები",
    url: "/news",
  },
  {
    id: 4,
    text: "კონტაქტი",
    url: "/contact",
  },
  {
    id: 5,
    text: "EN",
    url: "/languages",
  },
];

export const allCategories = [
  {
    id: 1,
    text: "ფასდაკლებები",
    img: "/images/fasdaklebebi.png",
    textStyle: {
      color: "red",
    },
  },
  {
    id: 2,
    text: "თავის მოვლა",
    img: "/images/tavis-movla.png",
  },
  {
    id: 3,
    text: "დასუფთავება",
    img: "/images/dasuftaveba.png",
  },
  {
    id: 4,
    text: "ჭურჭელი",
    img: "/images/churcheli.png",
  },
  {
    id: 5,
    text: "ჰიგიენა",
    img: "/images/higiena.png",
  },
  {
    id: 6,
    text: "კოსმეტიკა",
    img: "/images/kosmetika.png",
  },
];

export const brands = [
  {
    id: 1,
    img: "/images/ariel.png",
  },
  {
    id: 2,
    img: "/images/fairy.png",
  },
  {
    id: 3,
    img: "/images/pampers.png",
  },
  {
    id: 4,
    img: "/images/selpak.png",
  },
  {
    id: 5,
    img: "/images/bagi.png",
  },
  {
    id: 6,
    img: "/images/cif.png",
  },
  {
    id: 7,
    img: "/images/schwarzkof-logo-mob.png",
  },
  {
    id: 8,
    img: "/images/colgate.png",
  },
];

export const productsOnSale = [
  {
    id: 1,
    // discount: 40,
    top: true,
    bestSeller: true,
    img: "/images/sale-1.png",
    newPrice: 6.35,
    oldPrice: 12.5,
    description: "DELIA 35 + ნაოჭების საწინააღგმდეგო აღმდგენი",
    freeDelivery: true,
  },

  {
    id: 2,
    top: false,
    bestSeller: false,
    img: "/images/sale-2.png",
    discount: 24,
    oldPrice: 8.7,
    description: "GARNIER Color Naturals N 111 თმის საღებავი 110 მლ (გარნიე)",
    freeDelivery: true,
  },

  {
    id: 3,
    discount: 30,
    top: false,
    bestSeller: false,
    img: "/images/sale-3.png",
    // newPrice: "15.60 ₾",
    oldPrice: 20.2,
    description: "SANO Maxima Sensitive ბავშვის სარეცხი ფხვნილი",
    freeDelivery: false,
  },

  {
    id: 4,
    discount: 28,
    top: false,
    bestSeller: false,
    img: "/images/sale-4.png",
    // newPrice: "6.35 ₾",
    oldPrice: 19.7,
    description: "SAVEX 2in1 FRESH უნივერსალური სარეცხი ფხვნილი",
    freeDelivery: true,
  },

  {
    id: 5,
    discount: 25,
    top: false,
    bestSeller: false,
    img: "/images/sale-5.png",
    // newPrice: "6.35 ₾",
    oldPrice: 32.5,
    description: "GILLETTE VENUS BREEZE საპარსი პირი 2 ც (ჯილეტი)",
    freeDelivery: false,
  },

  {
    id: 6,
    discount: 25,
    top: false,
    bestSeller: false,
    img: "/images/sale-6.png",
    // newPrice: "6.35 ₾",
    oldPrice: 42.2,
    description: "SELPAK 3 ფენიანი ტუალეტის ქაღალდი 32 ც (სელპაკი)",
    freeDelivery: true,
  },

  {
    id: 7,
    discount: 32,
    top: false,
    bestSeller: false,
    img: "/images/sale-7.png",
    newPrice: 5.7,
    // oldPrice: "12.50 ₾",
    description: "DELIA 35 + ნაოჭების საწინააღგმდეგო აღმდგენი",
    freeDelivery: false,
  },
];

export const news = [
  {
    id: 1,
    img: "/images/pans.png",
    text: "როგორ და რით გავრეცხოთ ტაფები და ქვაბები მარტივად",
  },

  {
    id: 2,
    img: "/images/spots.png",
    text: "8 გავრცელებული ლაქა საახალწლო წვეულებიდან ..",
  },

  {
    id: 3,
    img: "/images/washing-products.png",
    text: "თხევადი სარეცხი საშუალებები თუ სარეცხი ფხვნილი - პლიუს..",
  },
];
