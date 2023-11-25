let driversData = [
  {
    id: 1,
    driver: "Max",
    car: "BMW",
    price: 4500,
    year: 2018,
  },
  {
    id: 2,
    driver: "Djek",
    car: "Mercedes",
    price: 4900,
    year: 2016,
  },
  {
    id: 3,
    driver: "Yan",
    car: "Mazda",
    price: 3000,
    year: 2019,
  },
  {
    id: 4,
    driver: "Jon",
    car: "Toyota",
    price: 2000,
    year: 2013,
  },
  {
    id: 5,
    driver: "Anna",
    car: "Chevrole",
    price: 2800,
    year: 2014,
  },
  {
    id: 6,
    driver: "Jeremy",
    car: "Lexus",
    price: 3800,
    year: 2015,
  },
  {
    id: 7,
    driver: "Ilya",
    car: "Honda",
    price: 2890,
    year: 2017,
  },
  {
    id: 8,
    driver: "Tanya",
    car: "Hyundai",
    price: 2500,
    year: 2019,
  },
  {
    id: 9,
    driver: "Oleg",
    car: "Mercedes-bens",
    price: 3600,
    year: 2020,
  },
  {
    id: 10,
    driver: "Ivan",
    car: "Porshe",
    price: 4500,
    year: 2018,
  },
  {
    id: 11,
    driver: "Yana",
    car: "Toyota",
    price: 3100,
    year: 2016,
  },
  {
    id: 12,
    driver: "Inna",
    car: "Chevrole",
    price: 2500,
    year: 2014,
  },
];

let prices = [];

driversData.forEach((driver) => {
  prices.push(driver.price);
});
console.log(prices);

const bigPrice = driversData.find(
  (driver) => driver.price === Math.max(...prices)
);

console.log(bigPrice);
