import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "./models/postModel.js";

dotenv.config();

// connet MongoDB Atlas
mongoose.connect(process.env.MONGO_URI);

const posts = [
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "Sunset Views from Griffith Observatory",
    content:
      "Griffith Observatory offers one of the best panoramic views of Los Angeles. Watching the sunset over the city with the iconic Hollywood Sign in the background is breathtaking!",
    location: "Griffith Observatory, Los Angeles",
    images: [
      "https://images.unsplash.com/photo-1605501402594-5dc90318c824?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1545108570-72e19359085b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568001473268-de84a35dc35b?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c0",
  },
  {
    user: "67ae73bd5db359ff0ba3b945",
    title: "Santa Monica Pier: Ocean Breeze & Fun Rides",
    content:
      "Santa Monica Pier is the perfect blend of relaxation and fun. From riding the Ferris wheel to enjoying delicious seafood while watching the waves, it's a must-visit in LA!",
    location: "Santa Monica Pier, Los Angeles",
    images: [
      "https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574438831704-21f5adfc10ac?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533838979319-6fa98000e09f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c0",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "Exploring Venice Beach's Street Art & Skate Culture",
    content:
      "Venice Beach is full of life, with colorful murals, skateboarders, and street performers. It's a great place to soak in LA's artistic and vibrant energy!",
    location: "Venice Beach, Los Angeles",
    images: [
      "https://images.unsplash.com/photo-1605688915525-7be700812e9e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1608098123364-ec226278de84?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523595857-fe9ee689f76f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c0",
  },
  {
    user: "67ae6e5bd00f96cbb4402ca7",
    title: "Universal Studios: A Hollywood Adventure",
    content:
      "Universal Studios Hollywood brings movie magic to life! The Harry Potter World and the Studio Tour are must-dos for any film enthusiast.",
    location: "Universal Studios, Los Angeles",
    images: [
      "https://images.unsplash.com/photo-1618945372420-2470ece5277c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618944000524-a21f87ffe32c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c0",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "Rodeo Drive: Luxury Shopping & Celebrity Sightings",
    content:
      "Walking through Rodeo Drive is like stepping into a world of luxury. Whether you're shopping or just window shopping, it's an experience to remember!",
    location: "Rodeo Drive, Los Angeles",
    images: [
      "https://images.unsplash.com/photo-1554435517-12c44b0be193?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c0",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "The Stunning Skyline from Willis Tower Skydeck",
    content:
      "Standing on the glass ledge at the Skydeck gives you an unforgettable panoramic view of Chicago. It's a must-visit for first-time travelers!",
    location: "Willis Tower Skydeck, Chicago",
    images: [
      "https://images.unsplash.com/photo-1490318134124-34dadea1b8b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c1",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "A Relaxing Stroll Through Millennium Park",
    content:
      "Visiting Millennium Park is an iconic Chicago experience! The Cloud Gate (The Bean) and the surrounding gardens are perfect for a relaxing day.",
    location: "Millennium Park, Chicago",
    images: [
      "https://images.unsplash.com/photo-1549533948-77ab8a0d9878?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c1",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "Exploring the Magnificent Mile",
    content:
      "The Magnificent Mile is perfect for shopping, dining, and sightseeing. The historic architecture and luxury stores make it a unique experience.",
    location: "Magnificent Mile, Chicago",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c1",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "Seven Magic Mountains: A Colorful Desert Art Installation",
    content:
      "This large-scale art piece in the Mojave Desert features seven towering, brightly colored rock formations, creating a striking contrast with the desert landscape.",
    location: "Seven Magic Mountains, Las Vegas",
    images: [
      "https://images.unsplash.com/photo-1554447712-468098b7e184?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1636313857176-c89777bacacd?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c2",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "The Iconic National Mall",
    content:
      "The heart of Washington, D.C., the National Mall is home to some of the most famous landmarks in the U.S., including the Lincoln Memorial and the Washington Monument.",
    location: "National Mall, Washington, D.C.",
    images: [
      "https://images.unsplash.com/photo-1541531695245-e0c7bf3fa918?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630519555074-eea67f5cdb9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c3",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "A Visit to the White House",
    content:
      "Standing in front of the White House is a surreal experience. The historic residence of U.S. presidents is a symbol of power and democracy.",
    location: "White House, Washington, D.C.",
    images: [
      "https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1634425537878-0c54dc674ad7?q=80&w=1209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c3",
  },
  {
    user: "67ae6e5bd00f96cbb4402ca7",
    title: "Sunset at the Lincoln Memorial",
    content:
      "Watching the sunset from the steps of the Lincoln Memorial is a peaceful and inspiring experience, with reflections on the Reflecting Pool adding to the beauty.",
    location: "Lincoln Memorial, Washington, D.C.",
    images: [
      "https://images.unsplash.com/photo-1588349594216-57d99b879381?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1588565267250-236955d3f8d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574004294357-6e78ed4fb9d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c3",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "Hiking at Rock Creek Park",
    content:
      "Escape the city and explore the natural beauty of Rock Creek Park! With scenic trails, historic bridges, and peaceful creeks, it's a hidden gem in D.C.",
    location: "Rock Creek Park, Washington, D.C.",
    images: [
      "https://images.unsplash.com/photo-1445712525433-eba07da78bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1675299349713-3b224a3c8976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1644945826901-3c8f5fdbda4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c3",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "The Breathtaking Skyline of The Bund",
    content:
      "The Bund offers one of the most spectacular skylines in the world, featuring colonial-era buildings along the waterfront and the futuristic skyline of Lujiazui.",
    location: "The Bund, Shanghai",
    images: [
      "https://images.unsplash.com/photo-1545893835-abaa50cbe628?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556489583-50cdc937d90b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1506661302230-ec3d77624ff7?q=80&w=1660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c4",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "A Walk Through the Timeless Yu Garden",
    content:
      "Yu Garden is a perfect blend of classical Chinese architecture, rock gardens, and serene ponds. A must-visit for a glimpse into ancient Shanghai.",
    location: "Yu Garden, Shanghai",
    images: [
      "https://images.unsplash.com/photo-1738667837361-b86939ded55b?q=80&w=1569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1718928484330-2d6d74b208db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1584129307987-dc53484d34c4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c4",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "Shanghai Tower: The Tallest View in China",
    content:
      "Shanghai Tower offers the highest observation deck in China, giving visitors a panoramic view of the entire city from above the clouds.",
    location: "Shanghai Tower, Shanghai",
    images: [
      "https://images.unsplash.com/photo-1569084637139-132d386f19fa?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c4",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "A Peaceful Escape to Zhujiajiao Water Town",
    content:
      "Zhujiajiao, known as the 'Venice of Shanghai,' is a charming water town with stone bridges, canals, and centuries-old traditional houses.",
    location: "Zhujiajiao Water Town, Shanghai",
    images: [
      "https://images.unsplash.com/photo-1579765617423-11da236cf484?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1598875434048-24c01854b9cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c4",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "A Scenic Walk Along the Promenade des Anglais",
    content:
      "The Promenade des Anglais offers breathtaking views of the Mediterranean Sea. Perfect for a morning jog, a sunset stroll, or just relaxing by the beach!",
    location: "Promenade des Anglais, Nice",
    images: [
      "https://images.unsplash.com/photo-1503696967350-ad1874122058?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540720919910-caf08466f69a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c5",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "Old Town Nice: A Journey Through History",
    content:
      "Old Town (Vieux Nice) is a charming district filled with colorful buildings, bustling markets, and cozy cafés. A must-visit for anyone wanting to experience authentic French Riviera life.",
    location: "Old Town (Vieux Nice), Nice",
    images: [
      "https://images.unsplash.com/photo-1528473734133-1bf079d5cc49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592889724995-d9268da04523?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c5",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "The Majestic Duomo di Milano",
    content:
      "Standing in front of the Duomo di Milano is breathtaking! The intricate gothic architecture and the panoramic view from the rooftop make it a must-visit.",
    location: "Duomo di Milano, Milan",
    images: [
      "https://images.unsplash.com/photo-1567760855784-589f09ed5dc6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c6",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "Walking Through History at the Colosseum",
    content:
      "Standing inside the Colosseum is like traveling back in time to ancient Rome. The grandeur of this iconic amphitheater is simply breathtaking.",
    location: "Colosseum, Rome",
    images: [
      "https://images.unsplash.com/photo-1539108842340-ae72fbf39857?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583400462637-c8cd62fa6c2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c7",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "Tossing a Coin into the Trevi Fountain",
    content:
      "Legend says that tossing a coin into the Trevi Fountain ensures your return to Rome. The stunning baroque sculpture and cascading water make it a magical spot!",
    location: "Trevi Fountain, Rome",
    images: [
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1581274050302-581149d3b4c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c7",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "The Pantheon: An Ancient Architectural Wonder",
    content:
      "The Pantheon's massive dome and impressive interior are a testament to the genius of Roman engineering. It's one of the best-preserved monuments of ancient Rome.",
    location: "Pantheon, Rome",
    images: [
      "https://images.unsplash.com/photo-1714687399299-65bb774aa061?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1714687399048-98f79fb4e5fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1714687398842-e8a64967163c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c7",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "Exploring the Roman Forum and Palatine Hill",
    content:
      "Walking through the ruins of the Roman Forum and Palatine Hill feels like stepping into history. The views over the city from here are stunning.",
    location: "Roman Forum, Rome",
    images: [
      "https://images.unsplash.com/photo-1558594144-7eeeaa34d22b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1567494081620-72050b12f9a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c7",
  },

  {
    user: "67ae73bd5db359ff0ba3b945",
    title: "Walking Through the Thousand Torii Gates at Fushimi Inari",
    content:
      "Fushimi Inari Shrine is one of Kyoto's most iconic spots. Walking through the endless torii gates is a spiritual and mesmerizing experience.",
    location: "Fushimi Inari Shrine, Kyoto",
    images: [
      "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1573416264247-7e0212941973?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c8",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "The Stunning View from Kiyomizu-dera",
    content:
      "Kiyomizu-dera offers one of the best views of Kyoto, especially during cherry blossom season or autumn when the leaves turn fiery red.",
    location: "Kiyomizu-dera, Kyoto",
    images: [
      "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c8",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "A Traditional Stroll Through Gion District",
    content:
      "Gion is Kyoto's famous geisha district, where old wooden teahouses and lantern-lit streets transport you back to ancient Japan.",
    location: "Gion District, Kyoto",
    images: [
      "https://images.unsplash.com/photo-1580639613257-5b1a20fe3760?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1678107658612-77363dd4c25c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c8",
  },

  {
    user: "67ae788e74e746aa1268bd17",
    title: "A Stunning Daytime View of the Eiffel Tower",
    content:
      "The Eiffel Tower during the day is a sight to behold! Standing tall against the blue sky, it is the perfect backdrop for a Parisian adventure. Whether you're taking photos from Trocadéro or enjoying a picnic at Champ de Mars, the tower never fails to impress.",
    location: "Eiffel Tower, Paris",
    images: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1460904041914-f2b315f93560?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c9",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "Exploring the Louvre Museum",
    content:
      "Home to the Mona Lisa and thousands of other masterpieces, the Louvre Museum is a must-visit for art lovers. The glass pyramid entrance is an icon of Paris!",
    location: "Louvre Museum, Paris",
    images: [
      "https://images.unsplash.com/photo-1610023709598-3881e09811c2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1608494603993-d16a0841a78b?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558611913-d707111c702e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1422748956421-2d6326b6d9d6?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c9",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "The Elegance of the Palace of Versailles",
    content:
      "A day trip to Versailles reveals the ultimate luxury of French royalty, from the Hall of Mirrors to the stunning gardens designed by Louis XIV.",
    location: "Palace of Versailles, Paris",
    images: [
      "https://images.unsplash.com/photo-1640866850167-67501fadf502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597011652683-a9cec37b3bc8?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568989247455-145c52d1280d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c9",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "Notre-Dame Cathedral: A Gothic Masterpiece",
    content:
      "The Notre-Dame Cathedral is a stunning example of Gothic architecture. Its intricate details and rose windows make it a must-see in Paris.",
    location: "Notre-Dame Cathedral, Paris",
    images: [
      "https://images.unsplash.com/photo-1557232313-7d3d23175d97?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c9",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "A Scenic Boat Ride on the Seine River",
    content:
      "A river cruise on the Seine is the perfect way to see Paris from a different perspective, passing by the Eiffel Tower, Louvre, and Notre-Dame.",
    location: "Seine River, Paris",
    images: [
      "https://images.unsplash.com/photo-1637851058613-95f0d41c3c2f?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1637851058687-73a443610500?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016c9",
  },

  {
    user: "67ae78b074e746aa1268bd1a",
    title: "Times Square: The Heart of NYC",
    content:
      "Bright lights, giant billboards, and a buzzing atmosphere—Times Square is the ultimate NYC experience! Best visited at night for a dazzling view.",
    location: "Times Square, New York City",
    images: [
      "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1587161584760-f51779fb276a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016ca",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "Central Park: A Green Escape in the City",
    content:
      "Enjoy a peaceful walk, boat ride, or picnic in Central Park. This massive green oasis in the middle of Manhattan is perfect for relaxation and sightseeing.",
    location: "Central Park, New York City",
    images: [
      "https://images.unsplash.com/photo-1631729779674-1f369e1116b4?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560806925-36a1f0240279?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016ca",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "Brooklyn Bridge: A Walk Between Boroughs",
    content:
      "Walking across the Brooklyn Bridge offers stunning views of the NYC skyline. Whether at sunrise or sunset, the experience is unforgettable.",
    location: "Brooklyn Bridge, New York City",

    images: [
      "https://images.unsplash.com/photo-1573261658953-8b29e144d1af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "",
    ],
    city: "67ae6ba04dde1bce919016ca",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "Empire State Building: The Best View in NYC",
    content:
      "Standing on top of the Empire State Building gives you an unbeatable view of the city. The city lights at night are truly magical!",
    location: "Empire State Building, New York City",
    images: [
      "https://plus.unsplash.com/premium_photo-1694475460083-0840b83cd09c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556541845-443e0c6e8e66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016ca",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "A Stunning View of Big Ben & Westminster",
    content:
      "Big Ben and the Houses of Parliament are must-see landmarks in London. Whether day or night, they offer a breathtaking view of the city's historic charm.",
    location: "Big Ben, London",
    images: [
      "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1694475341891-38b932ba981a?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cb",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "The Tower of London: A Journey into British History",
    content:
      "Visiting the Tower of London is like stepping back in time. Home to the Crown Jewels, this fortress has witnessed centuries of British history.",
    location: "Tower of London, London",
    images: [
      "https://images.unsplash.com/photo-1603034351978-7a9f3fa5abe6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cb",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "The Stunning Views from the London Eye",
    content:
      "A ride on the London Eye offers panoramic views of the city, from the River Thames to landmarks like Big Ben and St. Paul's Cathedral.",
    location: "London Eye, London",
    images: [
      "https://images.unsplash.com/photo-1545853332-147d5073187e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533558493928-231014635309?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cb",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "The Shibuya Crossing Experience",
    content:
      "Shibuya Crossing is the world's busiest pedestrian crossing. Watching the lights turn green and hundreds of people moving at once is a must-see Tokyo experience!",
    location: "Shibuya Crossing, Tokyo",
    images: [
      "https://images.unsplash.com/photo-1546418172-c847dca93195?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cc",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "Tokyo Tower: A Stunning City View",
    content:
      "Modeled after the Eiffel Tower, Tokyo Tower offers a stunning observation deck with panoramic views of the entire city, especially at night!",
    location: "Tokyo Tower, Tokyo",
    images: [
      "https://images.unsplash.com/photo-1584660470766-20ac1a28c7fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1584162437385-be1993a6e794?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cc",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "The Spectacular Views from Burj Khalifa",
    content:
      "The Burj Khalifa is the tallest building in the world! The observation deck offers breathtaking views of Dubai's skyline and the vast desert beyond.",
    location: "Burj Khalifa, Dubai",
    images: [
      "https://images.unsplash.com/photo-1678558994507-1f80f8d2a9a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1569669568747-df222c4e8d4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cd",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "The Magical Dancing Fountains of Dubai",
    content:
      "The Dubai Fountain show at the base of Burj Khalifa is a mesmerizing display of water, lights, and music. Best enjoyed at night with the city lights!",
    location: "Dubai Fountain, Dubai",
    images: [
      "https://images.unsplash.com/photo-1603350942002-35f088445d3c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605461659470-4536815b7c98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cd",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "A Stroll Through Park Güell",
    content:
      "Park Güell is a colorful wonderland of mosaic art, curving pathways, and stunning views of Barcelona. Gaudí's creativity comes to life here!",
    location: "Park Güell, Barcelona",
    images: [
      "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016ce",
  },
  {
    user: "67ae73bd5db359ff0ba3b945",
    title: "Exploring the Gothic Quarter",
    content:
      "The Gothic Quarter is a maze of medieval streets, hidden squares, and historic buildings. It's the perfect place to experience Barcelona's past.",
    location: "Gothic Quarter, Barcelona",
    images: [
      "https://images.unsplash.com/photo-1562861844-763c4ae2e696?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1728330142288-dca8d83573b2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016ce",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "The Iconic Sydney Opera House",
    content:
      "No visit to Sydney is complete without seeing the Sydney Opera House! Its unique design and stunning waterfront location make it one of the world's most famous landmarks.",
    location: "Sydney Opera House, Sydney",
    images: [
      "https://images.unsplash.com/photo-1599352318473-abbc53b44a9a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559651868-066bcc28f358?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cf",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "Relaxing at Bondi Beach",
    content:
      "Bondi Beach is Sydney's most famous beach, known for golden sand, great surf, and a lively atmosphere. Take a dip, go for a coastal walk, or just enjoy the sun!",
    location: "Bondi Beach, Sydney",
    images: [
      "https://images.unsplash.com/photo-1554869284-9e692207599b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1594207131779-102e5aad6067?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016cf",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "The Breathtaking Sunset in Oia",
    content:
      "Oia is world-famous for its stunning sunset views! Watching the sun dip below the horizon while the white-washed buildings glow is an unforgettable experience.",
    location: "Oia, Santorini",
    images: [
      "https://images.unsplash.com/photo-1630233110077-25701cf4ae7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592468662684-0376320a0842?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d0",
  },
  {
    user: "67ae78b074e746aa1268bd1a",
    title: "Exploring the Blue Domes of Fira",
    content:
      "The iconic blue-domed churches of Fira offer postcard-perfect views of the caldera. Walk through the charming streets and soak in the beauty of Santorini!",
    location: "Fira, Santorini",
    images: [
      "https://images.unsplash.com/photo-1596933144889-c15043a9ddde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1573481726566-9d98bb795fff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d0",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "The Stunning Views from Akureyri Church",
    content:
      "Perched on a hill, Akureyri Church offers breathtaking views of the fjord and town. A must-visit landmark in Iceland's northern capital!",
    location: "Akureyri Church, Akureyri",
    images: [
      "https://images.unsplash.com/photo-1585058535656-2353c9318d45?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1490758966275-7ca4b329fbb1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d1",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "Húsavík Whale Watching Adventure",
    content:
      "Experience the thrill of seeing humpback whales in their natural habitat! Húsavík, just north of Akureyri, is the whale-watching capital of Iceland.",
    location: "Húsavík, Near Akureyri",
    images: [
      "https://images.unsplash.com/photo-1630320435506-4acfe033f086?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d1",
  },
  {
    user: "67ae73bd5db359ff0ba3b945",
    title: "Goðafoss: The Majestic 'Waterfall of the Gods'",
    content:
      "Just a short drive from Akureyri, Goðafoss is one of Iceland's most breathtaking waterfalls. The sheer power and beauty of this site are unforgettable!",
    location: "Goðafoss, Near Akureyri",
    images: [
      "https://images.unsplash.com/photo-1606772108903-340d99f0cb4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1606365623850-77fda3e89013?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d1",
  },
  {
    user: "67ae6f1bd00f96cbb4402cad",
    title: "The Majestic Great Wall of China",
    content:
      "Hiking the Great Wall at Mutianyu or Badaling is a breathtaking experience! The ancient architecture and stunning mountain views make it one of the greatest wonders of the world.",
    location: "Great Wall of China, Beijing",
    images: [
      "https://images.unsplash.com/photo-1583405584623-58f4b7d1380f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553808991-e39e7611442c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d2",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "The Forbidden City: A Journey Through Imperial China",
    content:
      "Walking through the Forbidden City feels like stepping into history. This grand palace complex showcases the power and elegance of China's imperial past.",
    location: "Forbidden City, Beijing",
    images: [
      "https://images.unsplash.com/photo-1614555383820-941c466f1b52?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555088467-a779cbe85d05?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d2",
  },
  {
    user: "67ae78cc74e746aa1268bd1d",
    title: "Sunset at the Temple of Heaven",
    content:
      "The Temple of Heaven is an architectural masterpiece! Watching the sunset here while locals practice Tai Chi adds to its peaceful atmosphere.",
    location: "Temple of Heaven, Beijing",
    images: [
      "https://images.unsplash.com/photo-1586962656895-b205e40c9320?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1601203084563-c3f270c893e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d2",
  },
  {
    user: "67ae782c74e746aa1268bd11",
    title: "Breathtaking Views from Skyline Gondola",
    content:
      "Take a ride on the Skyline Gondola for panoramic views of Queenstown, Lake Wakatipu, and the surrounding mountains. A must-do experience for any visitor!",
    location: "Skyline Gondola, Queenstown",
    images: [
      "https://images.unsplash.com/photo-1531208730879-a0470d015a04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1647727792441-c131932e5199?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d3",
  },
  {
    user: "67ae73bd5db359ff0ba3b945",
    title: "Thrill-Seeking at Shotover Jet",
    content:
      "Experience an adrenaline rush with Shotover Jet! Speed through narrow canyons, spin across the water, and feel the power of Queenstown's wild rivers.",
    location: "Shotover River, Queenstown",
    images: [
      "https://images.unsplash.com/photo-1580240224545-85b642851536?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1672455704776-31c599b2cf4d?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d3",
  },
  {
    user: "67ae75f1544973f1b58341a3",
    title: "Milford Sound: A Stunning Fjord Adventure",
    content:
      "A boat cruise through Milford Sound offers breathtaking waterfalls, towering cliffs, and incredible wildlife. A true highlight of any New Zealand trip!",
    location: "Milford Sound, Near Queenstown",
    images: [
      "https://images.unsplash.com/photo-1591640040362-f55d95a6b2bc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1567924611412-2caab2b207fb?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d3",
  },
  {
    user: "67ae786d74e746aa1268bd14",
    title: "Hiking the Ben Lomond Track",
    content:
      "Ben Lomond Track offers one of the best hikes in Queenstown! Reach the summit for stunning 360-degree views of the Southern Alps and Lake Wakatipu.",
    location: "Ben Lomond, Queenstown",
    images: [
      "https://images.unsplash.com/photo-1591860123674-73af307b9336?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d3",
  },
  {
    user: "67ae788e74e746aa1268bd17",
    title: "Walking Across the Iconic Charles Bridge",
    content:
      "The Charles Bridge is Prague's most famous landmark, offering stunning views of the Vltava River, historic towers, and Gothic statues lining the bridge.",
    location: "Charles Bridge, Prague",
    images: [
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1629044562928-6946d8d3feea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580852710598-96912fc48065?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    city: "67ae6ba04dde1bce919016d4",
  },
];

const seedDB = async () => {
  //await Post.deleteMany(); // 清空数据库（可选）
  await Post.insertMany(posts);
  console.log(" update post seed successfully");
  mongoose.connection.close();
};

seedDB();
