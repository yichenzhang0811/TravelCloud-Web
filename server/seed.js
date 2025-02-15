import mongoose from "mongoose";
import dotenv from "dotenv";
import City from "./models/cityModel.js";

dotenv.config();

// connet MongoDB Atlas
mongoose.connect(process.env.MONGO_URI);

const cities = [
  {
    name: "Rome",
    description:
      "The 'Eternal City' filled with ancient ruins, Renaissance art, and incredible Italian cuisine.",
    location: "Rome, Italy 🇮🇹",
    geometry: { type: "Point", coordinates: [41.9027, 12.4963] },
    images: [
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Kyoto",
    description:
      "A cultural gem with historic temples, traditional tea houses, and stunning seasonal landscapes.",
    location: "Kyoto, Japan 🇯🇵",
    geometry: { type: "Point", coordinates: [35.021, 135.7538] },
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Paris",
    description: "The romantic capital of art, fashion, and exquisite cuisine.",
    location: "Paris, France 🇫🇷",
    geometry: { type: "Point", coordinates: [48.8566, 2.3522] },
    images: [
      "https://images.unsplash.com/photo-1553455427-c38fa28dc586?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "New York City",
    description:
      "A fast-paced metropolis known for its skyline, arts, and diverse food scene.",
    location: "New York City, USA 🇺🇸",
    geometry: { type: "Point", coordinates: [40.7306, -73.935242] },
    images: [
      "https://images.unsplash.com/photo-1448317846460-907988886b33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "London",
    description:
      "A blend of royal history, modern architecture, and rich cultural heritage.",
    location: "London, UK 🇬🇧",
    geometry: { type: "Point", coordinates: [51.5085, -0.1257] },
    images: [
      "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Tokyo",
    description:
      "A futuristic city with neon lights, anime culture, and Michelin-starred cuisine.",
    location: "Tokyo, Japan 🇯🇵",
    geometry: { type: "Point", coordinates: [35.6895, 139.6917] },
    images: [
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Dubai",
    description:
      "Luxury, skyscrapers, desert adventures, and world-class shopping.",
    location: "Dubai, UAE 🇦🇪",
    geometry: { type: "Point", coordinates: [25.0657, 55.1713] },
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Barcelona",
    description:
      "Gaudí's unique architecture, Mediterranean beaches, and vibrant nightlife.",
    location: "Barcelona, Spain 🇪🇸",
    geometry: { type: "Point", coordinates: [41.3887, 2.1589] },
    images: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Sydney",
    description: "A laid-back city with iconic beaches and a vibrant harbor.",
    location: "Sydney, Australia 🇦🇺",
    geometry: { type: "Point", coordinates: [-33.8678, 151.2073] },
    images: [
      "https://images.unsplash.com/photo-1551352912-484163ad5be9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },

  {
    name: "Santorini",
    description:
      " A dreamy island with whitewashed buildings and stunning views over the Aegean Sea.",
    location: "Santorini, Greece 🇬🇷",
    geometry: { type: "Point", coordinates: [25.46151, 36.3931] },
    images: [
      "https://images.unsplash.com/photo-1554444699-2603e75b7b44?q=80&w=1599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Akureyri",
    description:
      "A land of fire and ice, with volcanoes, glaciers, and stunning waterfalls.",
    location: "Akureyri, Iceland 🇮🇸",
    geometry: { type: "Point", coordinates: [65.6835, -18.0878] },
    images: [
      "https://images.unsplash.com/photo-1519092437326-bfd121eb53ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Beijing",
    description:
      " As China's capital, Beijing is home to imperial palaces, ancient temples, and modern skyscrapers, offering a deep dive into Chinese history and culture.",
    location: "Beijing, China 🇨🇳",
    geometry: { type: "Point", coordinates: [39.9041, 116.4073] },
    images: [
      "https://images.unsplash.com/photo-1628859335878-b2fc8b2511df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Queenstown",
    description:
      "The adventure capital of the world, famous for bungee jumping, skiing, and breathtaking mountain landscapes.",
    location: "Queenstown, New Zealand 🇳🇿",
    geometry: { type: "Point", coordinates: [-45.0302, 168.6627] },
    images: [
      "https://images.unsplash.com/photo-1565690482729-9290df702689?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    name: "Prague",
    description:
      "A fairytale-like city with medieval streets, historic castles, and a lively beer culture.",
    location: "Prague, Czech Republic 🇨🇿",
    geometry: { type: "Point", coordinates: [50.088, 14.4207] },
    images: [
      "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const seedDB = async () => {
  await City.deleteMany(); // 清空数据库（可选）
  await City.insertMany(cities);
  console.log("✅ 数据插入成功！");
  mongoose.connection.close();
};

seedDB();
