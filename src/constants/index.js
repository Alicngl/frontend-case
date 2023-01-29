import Istanbul from "../assets/istanbul.jpg";
import Izmir from "../assets/izmir.jpeg";
import Cesme from "../assets/izmir-cesme.jpg";
import Marmaris from "../assets/mugla-marmaris.jpg";
import Ada from "../assets/aydin-kusadasi.jpg";
import Otel1 from "../assets/otel1.jpeg";
import Otel2 from "../assets/otel2.jpeg";
import Otel3 from "../assets/otel3.jpeg";
import Otel4 from "../assets/otel4.jpeg";
import Otel5 from "../assets/otel5.jpeg";
import Otel6 from "../assets/otel6.jpeg";
import Otel7 from "../assets/otel7.webp";
import Otel8 from "../assets/otel8.jpeg";
import Otel9 from "../assets/otel9.jpeg";
import Otel10 from "../assets/otel10.webp";
import Room1 from "../assets/oda-1.jpeg";
import Room2 from "../assets/oda-2.jpeg";
import Room3 from "../assets/oda-3.jpeg";

export const Locations = [
  {
    img: Istanbul,
    title: "Istanbul",
  },
  {
    img: Izmir,
    title: "İzmir",
  },
  {
    img: Cesme,
    title: "İzmir-Çeşme",
  },
  {
    img: Marmaris,
    title: "Kuşadası",
  },
  {
    img: Ada,
    title: "Marmaris",
  },
];

export const DATA = [
  {
    img: Otel1,
    price: "1000",
    name: "Test1 Otel",
    type: "standart",
    view: "overland",
    location: "Antalya",
    id: 1,
  },
  {
    img: Otel2,
    price: "3000",
    name: "Test2 Otel",
    type: "suite",
    view: "sea",
    location: "Çeşme",
    id: 2,
  },
  {
    img: Otel3,
    price: "2500",
    name: "Test3 Otel",
    type: "Dublex",
    view: "mount",
    location: "Alanya",
    id: 3,
  },
  {
    img: Otel4,
    price: "1500",
    name: "Test4 Otel",
    type: "standart",
    view: "overland",
    location: "Mersin",
    id: 4,
  },
  {
    img: Otel5,
    price: "4500",
    name: "Test5 Otel",
    type: "dublex",
    view: "sea",
    location: "Muğla",
    id: 5,
  },
  {
    img: Otel6,
    price: "3500",
    name: "Test6 Otel",
    type: "standart",
    view: "sea",
    location: "Bodrum",
    id: 6,
  },
  {
    img: Otel7,
    price: "2700",
    name: "Test7 Otel",
    type: "dublex",
    view: "overland",
    location: "İstanbul",
    id: 7,
  },
  {
    img: Otel8,
    price: "3200",
    name: "Test8 Otel",
    type: "suite",
    view: "mount",
    location: "Kuşadası",
    id: 8,
  },
  {
    img: Otel9,
    price: "1700",
    name: "Test9 Otel",
    type: "standart",
    view: "mount",
    location: "Marmaris",
    id: 9,
  },
  {
    img: Otel10,
    price: "2900",
    name: "Test10 Otel",
    type: "suite",
    view: "overland",
    location: "İzmir",
    id: 10,
  },
];

export const image = [
  {
    image: Room1,
  },

  {
    image: Room2,
  },
  {
    image: Room3,
  },
];
