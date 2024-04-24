
const columns = [
    {name: "PICTURE", uid: "picture"},
    {name: "PRODUCT NAME", uid: "name"},
    {name: "INVENTORY", uid: "inventory"},
    {name: "SOLD", uid: "sold"},
    {name: "PRICE", uid: "price"},
    {name: "ACTION", uid: "action"},
  ];

const products = [
  {
    id: 1,
    name:"เสื้อคอกลมผู้ชายผ้าถัก",
    inventory: {
      s: "52",
      m: "130",
      l: "65",
      xl: "50",
      xxl: "40", 
    },
    sold: {
      s: "100",
      m: "1220",
      l: "322",
      xl: "123",
      xxl: "54", 
    },
    price: "฿300",
    path: "/shirt.jpeg",
    type: "shirt",
    color: "#384B5D",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet fringilla augue, eget pharetra ipsum.",
  },
  {
    id: 2,
    name:"กางเกงผ้าคอนตอน ขา 5 ส่วน",
    inventory: {
      s: "62",
      m: "170",
      l: "21",
      xl: "60",
      xxl: "30", 
    },
    sold: {
      s: "120",
      m: "1420",
      l: "122",
      xl: "223",
      xxl: "64", 
    },
    price: "฿400",
    path: "/pant.jpeg",
    type: "pants",
    color: "#000000",
    description: "Vestibulum non nisi tellus. Nam eu nibh semper, fringilla metus quis, posuere risus.",
  }
]

// Popular Products

const popColumns = [
  {name: "PICTURE", uid: "picture"},
  {name: "PRODUCT NAME", uid: "name"},
  // {name: "INVENTORY", uid: "inventory"},
  {name: "SOLD", uid: "sold"},
  {name: "PRICE", uid: "price"},
  {name: "TODAY", uid: "income"},
  {name: "TOTAL", uid: "total"},
];

const popProducts = [
  {
    id: 1,
    name:"เสื้อคอกลมผู้ชายผ้าถัก",
    sold: {
      s: "100",
      m: "1220",
      l: "322",
      xl: "123",
      xxl: "54", 
    },
    price: "฿300",
    path: "/shirt.jpeg",
    income: "฿1,000",
    total: "฿10,000",
  },
  {
    id: 2,
    name:"กางเกงผ้าคอนตอน ขา 5 ส่วน",
    sold: {
      s: "120",
      m: "1420",
      l: "122",
      xl: "223",
      xxl: "64", 
    },
    price: "฿400",
    path: "/pant.jpeg",
    income: "฿1,003",
    total: "฿11,205",
  }
]
export {columns, products, popColumns, popProducts};
