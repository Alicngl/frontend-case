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
import Room3 from "../assets/oda-4.jpeg";
import Room4 from "../assets/oda-6.jpeg";

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
  {
    image: Room4,
  },
];

export const tabs = [
  {
    label: "Tesis Bilgileri",
    value: "information",
    desc: `OTEL OLANAKLARI

    Hamam
    Sauna
    Buhar Odası
    Resepsiyon Hizmeti
    Cafe & Bar
    Bahçe
    Havlu
    Sinema Salonu (Mini)
    Kablosuz İnternet (Odalarda ve genel alanlarda)
    Mama Sandalyesi
    Lobi
    Emanet Kasası
    Masa Tenisi ((Top ve raketler))
    Lobi Bar
    Masaj Ücretli
    Alışveriş Merkezi Ücretli (Market, kuyumcu, kuaför, gümüşçü, çantacı, butikçi, foto, derici, hediyelik eşya, gözlükçü)
    Deri Dükkanı Ücretli
    Toplantı Salonu Ücretli
    Hediyelik Eşya Mağazası Ücretli
    Oyun Salonu Ücretli
    Çamaşırhane Ücretli
    Hemşire Ücretli (09.00-18.00)
    Nargile Ücretli
    Doktor Ücretli (09.00-18.00)
    Butik Ücretli
    Fotoğraf Servisi Ücretli
    Telefon ve Faks Hizmeti Ücretli
    Market Ücretli
    Kuru Temizleme Ücretli
    Kuaför Ücretli
    Kuyumcu Ücretli
    Araç Kiralama Ücretli
    Oda Servisi Ücretli`,
  },
  {
    label: "Çevre Ve Konum",
    value: "environment",
    desc: `TARİHİ YERLER :
    Aspendos 11.62 km.
    Silyon 21.86 km.
    Side Antik Kenti 23.64 km.
    Özel Yörük Müzesi 19.18 km.
    Side Müze Müdürlüğü 23.6 km.
    Tarihi Aspendos Köprüsü 8.73 km.
    Aspendos Su Kemerleri 11.61 km.
    Aspendos Antik Kenti 11.63 km.
    Apollon Ve Athena Tapınağı 23.43 km.
    Men Tapınağı 23.53 km.
    Antik Tiyatro 23.59 km.
    Side Apollon Tapınağı 23.61 km.
`,
  },
];

export const rooms = [
  {
    name: "Perla Suite",
    img: Room1,
  },
  {
    name: "Granada Villa",
    img: Room2,
  },
  {
    name: "King Suite",
    img: Room3,
  },
];

export const componentRoom = [
  {
    label: "Dublex Oda",
    value: "dublex",
    name: "type",
  },
  {
    label: "Suite Oda",
    value: "suite",
    name: "type",
  },
  {
    label: "Standart Oda",
    value: "standart",
    name: "type",
  },
];
export const componentView = [
  {
    label: "Deniz Manzara",
    value: "sea",
    name: "view",
  },
  {
    label: "Dağ Manzara",
    value: "mount",
    name: "view",
  },
  {
    label: "Kara Manzara",
    value: "overland",
    name: "view",
  },
];
