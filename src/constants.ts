export interface MenuItem {
  name: string;
  isBestSeller?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  prices: { size: string; price: number }[];
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'milk-tea',
    title: 'Milktea with Pearl',
    prices: [
      { size: 'Grande 16oz', price: 45 },
      { size: 'Venti 22oz', price: 55 },
    ],
    items: [
      { name: 'Wintermelon', isBestSeller: true },
      { name: 'Chocolate', isBestSeller: true },
      { name: 'Taro', isBestSeller: true },
      { name: 'Strawberry' },
      { name: 'Cookies & Cream' },
      { name: 'Okinawa' },
      { name: 'Matcha' },
      { name: 'Red Velvet' },
      { name: 'Hokkaido' },
      { name: 'Caramel' },
      { name: 'Dark Chocolate' },
    ],
  },
  {
    id: 'frappe',
    title: 'Frappe Series',
    prices: [
      { size: 'Grande 16oz', price: 55 },
      { size: 'Venti 22oz', price: 65 },
    ],
    items: [
      { name: 'Chocolate (Milk Base)', isBestSeller: true },
      { name: 'Vanilla (Milk Base)' },
      { name: 'Strawberry (Milk Base)', isBestSeller: true },
      { name: 'Cookies & Cream (Milk Base)' },
      { name: 'Mango (Milk Base)' },
      { name: 'Mocha (Coffee Base)' },
      { name: 'Caramel (Coffee Base)' },
      { name: 'Cappuccino (Coffee Base)' },
    ],
  },
  {
    id: 'fruit-soda',
    title: 'Fruit Soda Series',
    prices: [
      { size: 'Grande 16oz', price: 45 },
      { size: 'Venti 22oz', price: 55 },
    ],
    items: [
      { name: 'Strawberry', isBestSeller: true },
      { name: 'Blueberry' },
      { name: 'Lychee' },
      { name: 'Blue Lemonade' },
      { name: 'Green Apple', isBestSeller: true },
      { name: 'Four Seasons' },
    ],
  },
  {
    id: 'coffee',
    title: 'Espresso & Coffee',
    prices: [
      { size: 'Tall (Hot/Iced)', price: 45 },
    ],
    items: [
      { name: 'Americano', isBestSeller: true },
      { name: 'Cappuccino' },
      { name: 'Matcha' },
      { name: 'Caramel Macchiato' },
      { name: 'White Coffee' },
      { name: 'Mocha', isBestSeller: true },
    ],
  },
];

export const ADD_ONS = [
  { name: 'Pearl', price: 10 },
  { name: 'Nata', price: 10 },
  { name: 'Oreo', price: 10 },
];
