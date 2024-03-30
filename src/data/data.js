// import all laptops images from asssets folder

import lap1 from "../assets/laptopsImgs/dell-id-1.jpeg";
import lap2 from "../assets/laptopsImgs/hp-id-2.jpg";
import lap3 from "../assets/laptopsImgs/apple-id-3.jpg";
import lap4 from "../assets/laptopsImgs/lenovo-id-4.jpg";
import lap5 from "../assets/laptopsImgs/acer-id-5.png";
import lap6 from "../assets/laptopsImgs/microsoft-id-6.jpg";
import lap7 from "../assets/laptopsImgs/assus-id-7.jpg";
import lap8 from "../assets/laptopsImgs/lenovo-id-8.jpg";
import lap9 from "../assets/laptopsImgs/hp-id-9.jpg";
import lap10 from "../assets/laptopsImgs/acer-id-10.jpg";
import lap11 from "../assets/laptopsImgs/microsoft-id-11.jpg";
import lap12 from "../assets/laptopsImgs/lg-id-12.jpg";
import lap13 from "../assets/laptopsImgs/apple-id-13.jpg";
import lap14 from "../assets/laptopsImgs/razar-id-14.jpg";
import lap15 from "../assets/laptopsImgs/dell-id-15.jpeg";
import lap16 from "../assets/laptopsImgs/hp-id-16.jpg";
import lap17 from "../assets/laptopsImgs/asus-id-17.jpg";
import lap18 from "../assets/laptopsImgs/microsoft-id-18.jpg";
import lap19 from "../assets/laptopsImgs/lenovo-id-19.jpg";
import lap20 from "../assets/laptopsImgs/acer-id-20.jpg";
import lap21 from "../assets/laptopsImgs/dell-id-21.jpg";
import lap22 from "../assets/laptopsImgs/msi-id-22.jpg";
import lap23 from "../assets/laptopsImgs/hp-id-23.jpg";
import lap24 from "../assets/laptopsImgs/dell-id-24.jpg";
import lap25 from "../assets/laptopsImgs/lenovo-id-25.jpg";
import lap26 from "../assets/laptopsImgs/acer-id-26.jpeg";
import lap27 from "../assets/laptopsImgs/microsoft-id-27.jpg";
import lap28 from "../assets/laptopsImgs/hp-id-28.jpg";
import lap29 from "../assets/laptopsImgs/lenovo-id-29.jpg";
import lap30 from "../assets/laptopsImgs/apple-id-30.jpeg";

import brand1 from "../assets/brandsLogos/apple.png";
import brand2 from "../assets/brandsLogos/hp.png";
import brand3 from "../assets/brandsLogos/samsaung.png";
import brand4 from "../assets/brandsLogos/dell.png";
import brand5 from "../assets/brandsLogos/lenovo.png";
import brand6 from "../assets/brandsLogos/huawei.png";
import brand7 from "../assets/brandsLogos/msi.png";
import brand8 from "../assets/brandsLogos/acer.png";
import brand9 from "../assets/brandsLogos/microsoft.png";
import brand10 from "../assets/brandsLogos/asus.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";

import emilly from "../assets/persons/emilly.jpeg";
import zizoo from "../assets/persons/Zizoo.jpg";
import ibrahim from "../assets/persons/Ibrahim.jpeg";
import monica from "../assets/persons/monica.jpeg";
import Eve from "../assets/persons/Eve.jpeg";
import Osama from "../assets/persons/Osama.webp";
import Yara from "../assets/persons/Yara.jpeg";
import Abdelmohsen from "../assets/persons/abdelmohsen.jpeg";

// Laptops list contain 30 object
const LAPTOPS = [
  {
    id: 1,
    brand: "Dell",
    model: "XPS 13",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "13.4 inches",
    resolution: "3840 x 2400",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.8 lbs",
    price: 1299.99,
    colors: ["Platinum Silver", "Frost White"],
    description:
      "The Dell XPS 13 is a premium ultrabook with a stunning 4K display and powerful performance.",
    image: lap1,
    ratings: { average: 4.5, count: 100 },
    reviews: [
      { username: "JohnDoe", rating: 5, comment: "Excellent laptop!" },
      { username: "AliceSmith", rating: 4, comment: "Great build quality." },
    ],
  },
  {
    id: 2,
    brand: "HP",
    model: "HP Spectre x360",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "1TB SSD",
    display_size: "13.3 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.87 lbs",
    price: 1399.99,
    colors: ["Nightfall Black", "Poseidon Blue"],
    description:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a sleek design and long battery life.",
    image: lap2,
    ratings: { average: 4.6, count: 90 },
    reviews: [
      { username: "EmilyJohnson", rating: 5, comment: "Amazing laptop!" },
      {
        username: "DavidWilson",
        rating: 4,
        comment: "Impressive performance.",
      },
    ],
  },
  {
    id: 3,
    brand: "Apple",
    model: "MacBook Air",
    release_year: 2020,
    processor: "Apple M1",
    ram: "8GB",
    storage: "256GB SSD",
    display_size: "13.3 inches",
    resolution: "2560 x 1600",
    graphics_card: "Apple GPU",
    weight: "2.8 lbs",
    price: 999.99,
    colors: ["Space Gray", "Silver"],
    description:
      "The MacBook Air with Apple's M1 chip offers impressive performance and battery life.",
    image: lap3,
    ratings: { average: 4.7, count: 120 },
    reviews: [
      { username: "SophiaBrown", rating: 5, comment: "A fantastic laptop!" },
      {
        username: "MichaelJones",
        rating: 5,
        comment: "Incredible battery life.",
      },
    ],
  },
  {
    id: 4,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "14.0 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.49 lbs",
    price: 1499.99,
    colors: ["Black"],
    description:
      "The Lenovo ThinkPad X1 Carbon is a premium business laptop known for its durability and performance.",
    image: lap4,
    ratings: { average: 4.8, count: 110 },
    reviews: [
      { username: "OliviaSmith", rating: 4, comment: "Excellent for work!" },
      {
        username: "WilliamDavis",
        rating: 5,
        comment: "Lightweight and powerful.",
      },
    ],
  },
  {
    id: 5,
    brand: "Acer",
    model: "Acer Predator Helios 300",
    release_year: 2021,
    processor: "Intel Core i7-11800H",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "NVIDIA GeForce RTX 3060",
    weight: "5.51 lbs",
    price: 1299.99,
    colors: ["Abyssal Black"],
    description:
      "The Acer Predator Helios 300 is a gaming laptop with powerful hardware and a high-refresh-rate display.",
    image: lap5,
    ratings: { average: 4.6, count: 95 },
    reviews: [
      { username: "EthanWilliams", rating: 5, comment: "Great for gaming!" },
      {
        username: "AvaTaylor",
        rating: 4,
        comment: "Good value for the specs.",
      },
    ],
  },
  {
    id: 6,
    brand: "Microsoft",
    model: "Surface Laptop 4",
    release_year: 2021,
    processor: "Intel Core i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    display_size: "13.5 inches",
    resolution: "2256 x 1504",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.79 lbs",
    price: 1099.99,
    colors: ["Platinum", "Ice Blue", "Sandstone"],
    description:
      "The Microsoft Surface Laptop 4 offers a premium design and smooth performance.",
    image: lap6,
    ratings: { average: 4.7, count: 85 },
    reviews: [
      { username: "LiamJohnson", rating: 5, comment: "Sleek and powerful." },
      {
        username: "OliviaBrown",
        rating: 4,
        comment: "Excellent build quality.",
      },
    ],
  },
  {
    id: 7,
    brand: "ASUS",
    model: "ASUS ROG Zephyrus G14",
    release_year: 2021,
    processor: "AMD Ryzen 9 5900HS",
    ram: "32GB",
    storage: "1TB SSD",
    display_size: "14 inches",
    resolution: "2560 x 1440",
    graphics_card: "NVIDIA GeForce RTX 3060",
    weight: "3.75 lbs",
    price: 1499.99,
    colors: ["Moonlight White", "Eclipse Gray"],
    description:
      "The ASUS ROG Zephyrus G14 is a powerful gaming laptop with a compact form factor and excellent performance.",
    image: lap7,
    ratings: { average: 4.8, count: 110 },
    reviews: [
      {
        username: "SophiaMiller",
        rating: 5,
        comment: "Impressive gaming performance.",
      },
      {
        username: "JamesWilson",
        rating: 4,
        comment: "Great portability for a gaming laptop.",
      },
    ],
  },
  {
    id: 8,
    brand: "Lenovo",
    model: "Lenovo Yoga C940",
    release_year: 2020,
    processor: "Intel Core i7-1065G7",
    ram: "12GB",
    storage: "512GB SSD",
    display_size: "14 inches",
    resolution: "3840 x 2160",
    graphics_card: "Intel Iris Plus Graphics",
    weight: "2.98 lbs",
    price: 1199.99,
    colors: ["Iron Gray", "Mica"],
    description:
      "The Lenovo Yoga C940 is a premium 2-in-1 laptop with a 4K touchscreen and versatile design.",
    image: lap8,
    ratings: { average: 4.7, count: 95 },
    reviews: [
      {
        username: "LiamSmith",
        rating: 5,
        comment: "Excellent for productivity.",
      },
      { username: "OliviaDavis", rating: 4, comment: "Beautiful 4K display." },
    ],
  },
  {
    id: 9,
    brand: "HP",
    model: "HP Envy x360",
    release_year: 2021,
    processor: "AMD Ryzen 7 5700U",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "13.3 inches",
    resolution: "1920 x 1080",
    graphics_card: "AMD Radeon Graphics",
    weight: "2.87 lbs",
    price: 1199.99,
    colors: ["Natural Silver"],
    description:
      "The HP Envy x360 is a versatile 2-in-1 laptop with powerful AMD Ryzen performance and a sleek design.",
    image: lap9,
    ratings: { average: 4.6, count: 85 },
    reviews: [
      {
        username: "EmmaJohnson",
        rating: 5,
        comment: "Impressive build quality.",
      },
      {
        username: "NoahWilson",
        rating: 4,
        comment: "Great for both work and entertainment.",
      },
    ],
  },
  {
    id: 10,
    brand: "Acer",
    model: "Acer Swift 3",
    release_year: 2021,
    processor: "Intel Core i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    display_size: "14 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.65 lbs",
    price: 799.99,
    colors: ["Silver"],
    description:
      "The Acer Swift 3 is a lightweight and affordable laptop for everyday use.",
    image: lap10,
    ratings: { average: 4.5, count: 70 },
    reviews: [
      {
        username: "SophiaDavis",
        rating: 4,
        comment: "Good value for the price.",
      },
      {
        username: "WilliamSmith",
        rating: 4,
        comment: "Portable and reliable.",
      },
    ],
  },
  {
    id: 11,
    brand: "Microsoft",
    model: "Surface Pro 7",
    release_year: 2019,
    processor: "Intel Core i5-1035G4",
    ram: "8GB",
    storage: "128GB SSD",
    display_size: "12.3 inches",
    resolution: "2736 x 1824",
    graphics_card: "Intel Iris Plus Graphics",
    weight: "1.7 lbs",
    price: 899.99,
    colors: ["Platinum", "Black"],
    description:
      "The Microsoft Surface Pro 7 is a versatile 2-in-1 laptop with a detachable keyboard and stylus support.",
    image: lap11,
    ratings: { average: 4.4, count: 60 },
    reviews: [
      {
        username: "EmmaWilson",
        rating: 5,
        comment: "Perfect for on-the-go productivity.",
      },
      {
        username: "JamesSmith",
        rating: 4,
        comment: "Excellent build quality.",
      },
    ],
  },
  {
    id: 12,
    brand: "LG",
    model: "LG Gram 17",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "17 inches",
    resolution: "2560 x 1600",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.98 lbs",
    price: 1499.99,
    colors: ["Dark Silver"],
    description:
      "The LG Gram 17 is an ultralight laptop with a large 17-inch display, making it ideal for productivity.",
    image: lap12,
    ratings: { average: 4.7, count: 75 },
    reviews: [
      {
        username: "LiamMiller",
        rating: 5,
        comment: "Amazingly lightweight for its size.",
      },
      {
        username: "OliviaJones",
        rating: 4,
        comment: "Great for multitasking.",
      },
    ],
  },
  {
    id: 13,
    brand: "Apple",
    model: "MacBook Pro 16-inch",
    release_year: 2019,
    processor: "Intel Core i9",
    ram: "16GB",
    storage: "1TB SSD",
    display_size: "16 inches",
    resolution: "3072 x 1920",
    graphics_card: "AMD Radeon Pro 5500M",
    weight: "4.3 lbs",
    price: 2399.99,
    colors: ["Space Gray", "Silver"],
    description:
      "The MacBook Pro 16-inch offers powerful performance and a stunning Retina display.",
    image: lap13,
    ratings: { average: 4.8, count: 90 },
    reviews: [
      {
        username: "EthanDavis",
        rating: 5,
        comment: "Best laptop I've ever owned.",
      },
      { username: "AvaWilson", rating: 5, comment: "Great for creative work." },
    ],
  },
  {
    id: 14,
    brand: "Razer",
    model: "Razer Blade 15",
    release_year: 2021,
    processor: "Intel Core i7-11800H",
    ram: "32GB",
    storage: "1TB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "NVIDIA GeForce RTX 3080",
    weight: "4.4 lbs",
    price: 2599.99,
    colors: ["Black"],
    description:
      "The Razer Blade 15 is a high-performance gaming laptop with a sleek design and RGB keyboard.",
    image: lap14,
    ratings: { average: 4.7, count: 85 },
    reviews: [
      {
        username: "SophiaTaylor",
        rating: 5,
        comment: "Excellent for gaming and content creation.",
      },
      {
        username: "JamesBrown",
        rating: 4,
        comment: "Impressive build quality.",
      },
    ],
  },
  {
    id: 15,
    brand: "Dell",
    model: "Dell Inspiron 14",
    release_year: 2021,
    processor: "Intel Core i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    display_size: "14 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "3.39 lbs",
    price: 749.99,
    colors: ["Platinum Silver"],
    description:
      "The Dell Inspiron 14 is a budget-friendly laptop with a compact design and decent performance.",
    image: lap15,
    ratings: { average: 4.2, count: 75 },
    reviews: [
      {
        username: "EmmaSmith",
        rating: 4,
        comment: "Good value for everyday use.",
      },
      { username: "NoahJohnson", rating: 3, comment: "Average performance." },
    ],
  },
  {
    id: 16,
    brand: "HP",
    model: "HP Omen 15",
    release_year: 2021,
    processor: "AMD Ryzen 9 5900HX",
    ram: "32GB",
    storage: "1TB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "NVIDIA GeForce RTX 3070",
    weight: "5.43 lbs",
    price: 1799.99,
    colors: ["Shadow Black"],
    description:
      "The HP Omen 15 is a gaming laptop with powerful AMD Ryzen and NVIDIA RTX performance.",
    image: lap16,
    ratings: { average: 4.5, count: 90 },
    reviews: [
      {
        username: "EthanBrown",
        rating: 5,
        comment: "Amazing gaming performance.",
      },
      {
        username: "AvaDavis",
        rating: 4,
        comment: "Heavy but worth it for gaming.",
      },
    ],
  },
  {
    id: 17,
    brand: "ASUS",
    model: "ASUS VivoBook 15",
    release_year: 2021,
    processor: "AMD Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "AMD Radeon Graphics",
    weight: "3.75 lbs",
    price: 799.99,
    colors: ["Slate Grey"],
    description:
      "The ASUS VivoBook 15 is a budget-friendly laptop with a large display and solid performance.",
    image: lap17,
    ratings: { average: 4.3, count: 65 },
    reviews: [
      {
        username: "SophiaWilson",
        rating: 4,
        comment: "Good laptop for the price.",
      },
      {
        username: "JamesSmith",
        rating: 3,
        comment: "Decent performance, but not exceptional.",
      },
    ],
  },
  {
    id: 18,
    brand: "Microsoft",
    model: "Surface Laptop Go",
    release_year: 2020,
    processor: "Intel Core i5-1035G1",
    ram: "8GB",
    storage: "128GB SSD",
    display_size: "12.4 inches",
    resolution: "1536 x 1024",
    graphics_card: "Intel UHD Graphics",
    weight: "2.45 lbs",
    price: 699.99,
    colors: ["Ice Blue"],
    description:
      "The Microsoft Surface Laptop Go is a compact and lightweight laptop for everyday tasks.",
    image: lap18,
    ratings: { average: 4, count: 50 },
    reviews: [
      { username: "LiamBrown", rating: 4, comment: "Great for students." },
      {
        username: "OliviaJohnson",
        rating: 3,
        comment: "Not suitable for heavy tasks.",
      },
    ],
  },
  {
    id: 19,
    brand: "Lenovo",
    model: "Lenovo ThinkPad X1 Carbon",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "14 inches",
    resolution: "2560 x 1440",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.49 lbs",
    price: 1599.99,
    colors: ["Black"],
    description:
      "The Lenovo ThinkPad X1 Carbon is a business laptop with a lightweight design and excellent keyboard.",
    image: lap19,
    ratings: { average: 4.9, count: 80 },
    reviews: [
      { username: "EmmaDavis", rating: 5, comment: "Perfect for work." },
      { username: "NoahSmith", rating: 5, comment: "Premium build quality." },
    ],
  },
  {
    id: 20,
    brand: "Acer",
    model: "Acer Chromebook Spin 13",
    release_year: 2020,
    processor: "Intel Core i5-10210U",
    ram: "8GB",
    storage: "128GB eMMC",
    display_size: "13.5 inches",
    resolution: "2256 x 1504",
    graphics_card: "Intel UHD Graphics 620",
    weight: "3.53 lbs",
    price: 799.99,
    colors: ["Steel Gray"],
    description:
      "The Acer Chromebook Spin 13 is a 2-in-1 Chromebook with a high-resolution display and long battery life.",
    image: lap20,
    ratings: { average: 4.2, count: 60 },
    reviews: [
      {
        username: "LiamWilson",
        rating: 4,
        comment: "Good Chromebook for productivity.",
      },
      { username: "OliviaSmith", rating: 3, comment: "Limited by Chrome OS." },
    ],
  },
  {
    id: 21,
    brand: "Dell",
    model: "Dell XPS 13",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "13.4 inches",
    resolution: "3840 x 2400",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.8 lbs",
    price: 1799.99,
    colors: ["Platinum Silver"],
    description:
      "The Dell XPS 13 is a premium ultrabook with a stunning 4K display and exceptional build quality.",
    image: lap21,
    ratings: { average: 4.7, count: 95 },
    reviews: [
      {
        username: "SophiaJohnson",
        rating: 5,
        comment: "Gorgeous display and performance.",
      },
      {
        username: "JamesDavis",
        rating: 4,
        comment: "Solid choice for professionals.",
      },
    ],
  },
  {
    id: 22,
    brand: "MSI",
    model: "MSI GS66 Stealth",
    release_year: 2021,
    processor: "Intel Core i9-11980HK",
    ram: "32GB",
    storage: "1TB SSD",
    display_size: "15.6 inches",
    resolution: "2560 x 1440",
    graphics_card: "NVIDIA GeForce RTX 3080",
    weight: "4.63 lbs",
    price: 2499.99,
    colors: ["Core Black"],
    description:
      "The MSI GS66 Stealth is a high-performance gaming laptop with a sleek and stealthy design.",
    image: lap22,
    ratings: { average: 4.8, count: 110 },
    reviews: [
      { username: "EthanSmith", rating: 5, comment: "Top-tier gaming laptop." },
      {
        username: "AvaJohnson",
        rating: 4,
        comment: "Runs demanding games smoothly.",
      },
    ],
  },
  {
    id: 23,
    brand: "HP",
    model: "HP Spectre x360 13",
    release_year: 2021,
    processor: "Intel Core i7-1165G7",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "13.3 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.87 lbs",
    price: 1299.99,
    colors: ["Nightfall Black"],
    description:
      "The HP Spectre x360 13 is a premium 2-in-1 laptop with a sleek design and vibrant display.",
    image: lap23,
    ratings: { average: 4.6, count: 85 },
    reviews: [
      {
        username: "EmmaWilson",
        rating: 5,
        comment: "Impressive build quality.",
      },
      {
        username: "NoahSmith",
        rating: 4,
        comment: "Great for both work and entertainment.",
      },
    ],
  },
  {
    id: 24,
    brand: "Dell",
    model: "Dell XPS 15",
    release_year: 2022,
    processor: "Intel Core i9-11900H",
    ram: "32GB",
    storage: "1TB SSD",
    display_size: "15.6 inches",
    resolution: "3840 x 2160",
    graphics_card: "NVIDIA GeForce RTX 3060",
    weight: "4.0 lbs",
    price: 1999.99,
    colors: ["Platinum Silver", "Frost White"],
    description:
      "The Dell XPS 15 is a premium laptop with a stunning 4K display and powerful performance.",
    image: lap24,
    ratings: { average: 4.9, count: 110 },
    reviews: [
      { username: "EmmaSmith", rating: 5, comment: "Beautiful 4K display." },
      { username: "NoahBrown", rating: 4, comment: "Excellent build quality." },
    ],
  },
  {
    id: 25,
    brand: "Lenovo",
    model: "Lenovo Yoga C740",
    release_year: 2020,
    processor: "Intel Core i7-10510U",
    ram: "12GB",
    storage: "256GB SSD",
    display_size: "14 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel UHD Graphics 620",
    weight: "3.09 lbs",
    price: 899.99,
    colors: ["Mica"],
    description:
      "The Lenovo Yoga C740 is a 2-in-1 laptop with a sleek design and excellent battery life.",
    image: lap25,
    ratings: { average: 4.3, count: 70 },
    reviews: [
      {
        username: "SophiaTaylor",
        rating: 4,
        comment: "Good balance between performance and portability.",
      },
      {
        username: "JamesBrown",
        rating: 3,
        comment: "Decent for everyday use.",
      },
    ],
  },
  {
    id: 26,
    brand: "Acer",
    model: "Acer Aspire 5",
    release_year: 2021,
    processor: "AMD Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "AMD Radeon Graphics",
    weight: "4.19 lbs",
    price: 699.99,
    colors: ["Silver"],
    description:
      "The Acer Aspire 5 is an affordable laptop with solid performance and a full HD display.",
    image: lap26,
    ratings: { average: 4, count: 65 },
    reviews: [
      {
        username: "EthanDavis",
        rating: 4,
        comment: "Great value for the price.",
      },
      { username: "AvaWilson", rating: 3, comment: "Decent budget laptop." },
    ],
  },
  {
    id: 27,
    brand: "Microsoft",
    model: "Microsoft Surface Laptop 4",
    release_year: 2021,
    processor: "AMD Ryzen 7 4980U",
    ram: "16GB",
    storage: "256GB SSD",
    display_size: "13.5 inches",
    resolution: "2256 x 1504",
    graphics_card: "AMD Radeon Graphics",
    weight: "2.79 lbs",
    price: 1299.99,
    colors: ["Platinum"],
    description:
      "The Microsoft Surface Laptop 4 offers a premium Windows experience with excellent battery life.",
    image: lap27,
    ratings: { average: 4.5, count: 85 },
    reviews: [
      {
        username: "EmmaMiller",
        rating: 5,
        comment: "Sleek and powerful laptop.",
      },
      { username: "NoahWilson", rating: 4, comment: "Great for productivity." },
    ],
  },
  {
    id: 28,
    brand: "HP",
    model: "HP Spectre x360 13",
    release_year: 2022,
    processor: "Intel Core i7-1260U",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "13.3 inches",
    resolution: "1920 x 1080",
    graphics_card: "Intel Iris Xe Graphics",
    weight: "2.8 lbs",
    price: 1399.99,
    colors: ["Nightfall Black", "Poseidon Blue", "Natural Silver"],
    description:
      "The HP Spectre x360 13 is a versatile 2-in-1 laptop with a premium design and vibrant display.",
    image: lap28,
    ratings: { average: 4.8, count: 95 },
    reviews: [
      {
        username: "EthanJohnson",
        rating: 5,
        comment: "Amazing build quality and performance.",
      },
      {
        username: "SophiaLee",
        rating: 4,
        comment: "Compact and lightweight for on-the-go use.",
      },
    ],
  },
  {
    id: 29,
    brand: "Lenovo",
    model: "Lenovo Legion 5",
    release_year: 2021,
    processor: "AMD Ryzen 7 5800H",
    ram: "16GB",
    storage: "1TB SSD",
    display_size: "15.6 inches",
    resolution: "1920 x 1080",
    graphics_card: "NVIDIA GeForce RTX 3060",
    weight: "5.41 lbs",
    price: 1299.99,
    colors: ["Phantom Blue"],
    description:
      "The Lenovo Legion 5 is a gaming laptop with powerful AMD Ryzen and NVIDIA RTX performance.",
    image: lap29,
    ratings: { average: 4.7, count: 90 },
    reviews: [
      { username: "SophiaBrown", rating: 5, comment: "Amazing gaming laptop." },
      {
        username: "JamesWilson",
        rating: 4,
        comment: "Runs demanding games smoothly.",
      },
    ],
  },
  {
    id: 30,
    brand: "Apple",
    model: "MacBook Pro 14-inch",
    release_year: 2021,
    processor: "Apple M1 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    display_size: "14 inches",
    resolution: "3024 x 1964",
    graphics_card: "Apple M1 Pro GPU",
    weight: "3.5 lbs",
    price: 1999.99,
    colors: ["Space Gray"],
    description:
      "The MacBook Pro 14-inch with Apple's M1 Pro chip offers exceptional performance and a stunning display.",
    image: lap30,
    ratings: { average: 4.8, count: 110 },
    reviews: [
      {
        username: "EthanJohnson",
        rating: 5,
        comment: "Incredible speed and display quality.",
      },
      {
        username: "AvaMiller",
        rating: 4,
        comment: "Ideal for creative professionals.",
      },
    ],
  },
];

const advantagesSection = [
  {
    image:
      "https://cdn.syncfusion.com/content/images/home-v1/what-we-need/high-performance-onload.svg?v=14022024003338",
    icon: LocalShippingIcon,
    title: "Free Shipping",
    desc: "Enjoy hassle-free shipping, with multiple payment methods",
  },
  {
    image:
      "https://cdn.syncfusion.com/content/images/home-v1/what-we-need/dedicated-support-onload.svg?v=14022024003338",
    icon: PaymentsIcon,
    title: "Support",
    desc: "24/7 Customer support, by well trained team",
  },
  {
    image:
      "https://cdn.syncfusion.com/content/images/home-v1/what-we-need/hassel-free-licensing-onload.svg?v=14022024003338",
    icon: LocalOfferIcon,
    title: "Gaurantee",
    desc: "Our products are totally guranteed by the manufacturer",
  },
  {
    image:
      "https://cdn.syncfusion.com/content/images/home-v1/what-we-need/frequent-updates-onload.svg?v=14022024003338",
    icon: TimeToLeaveIcon,
    title: "Up To Date",
    desc: "It eill not be difficult to keep up with all of the latest releases.",
  },
];

const BRANDS = [
  { brand: "apple", image: brand1 },
  { brand: "hp", image: brand2 },
  { brand: "samsaung", image: brand3 },
  { brand: "dell", image: brand4 },
  { brand: "lenovo", image: brand5 },
  { brand: "huawei", image: brand6 },
  { brand: "msi", image: brand7 },
  { brand: "acer", image: brand8 },
  { brand: "microsoft", image: brand9 },
  { brand: "asus", image: brand10 },
];

const SocialIcons = [
  {
    id: 1,
    name: "Facebook",
    icon: <FacebookIcon />,
    link: "https:facebook.com/esrar.des",
    color: "white",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <XIcon />,
    link: "https://twitter.com/atefakl11",
    color: "white",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/atef-m-aql",
    color: "white",
  },
  {
    id: 3,
    name: "Youtube",
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/channel/aklsoft",
    color: "white",
  },
];

const registeredUser = [
  {
    id: 1,
    name: "Profile",
    link: "/profile",
    onclick: null,
  },
  {
    id: 2,
    name: "Orders",
    link: "/orders",
    onclick: null,
  },
  {
    id: 3,
    name: "Bills",
    link: "/bills",
    onclick: null,
  },
  {
    id: 4,
    name: "Favourites",
    link: "/favourite",
    onclick: null,
  },
];

const noUser = [
  {
    id: 1,
    name: "Login",
    link: "/register",
  },
  {
    id: 2,
    name: "Register",
    link: "/register",
  },
  {
    id: 2,
    name: "Privacy Policy",
    link: "/policy",
  },
  {
    id: 2,
    name: "Affiliate",
    link: "/affiliate",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/contact",
  },
];

const Reviews = [
  {
    id: "1",
    image: emilly,
    name: "Monica Hedjazi",
    quote: "It was a wonderfull expirement, ",
    rating: 5,
  },
  {
    id: "2",
    image: zizoo,
    name: "Islam Mohamed",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
  {
    id: "3",
    image: ibrahim,
    name: "Ziad Atallah",
    quote: "It was a wonderfull expirement, ",
    rating: 5,
  },
  {
    id: "4",
    image: monica,
    name: "Yara",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
  {
    id: "5",
    image: Eve,
    name: "Eve Talib Samahi",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
  {
    id: "6",
    image: Osama,
    name: "Osama Mostafa",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
  {
    id: "7",
    image: Yara,
    name: "Yara Marzooq Tilib",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
  {
    id: "8",
    image: Abdelmohsen,
    name: "Abdelmohsen Khafaga",
    quote: "Oh My God, more than I expected",
    rating: 4,
  },
];

//https://console.firebase.google.com/project/lapshop-ecommerc/authentication/users

export {
  LAPTOPS,
  BRANDS,
  SocialIcons,
  advantagesSection,
  registeredUser,
  noUser,
  Reviews,
};
