// import 'server-only';

const workshops = [
  {
    id: 1,
    title: 'Ceramics plant press workshop',
    date: '27-02-2024',
    time: '10:30 AM - 2:30 PM',
    location: 'string',
    category: 'workshop', // workshop or retreat
    image: `/images/plant-press.jpg`,
    price: 75,
    currency: '€',
    fullyBooked: false,
    description: `We love the meditating effect working with clay has! Just like in yoga there is no pressure, you can enjoy the process. If you have experience already or not – it is always nice to join the workshop. Maybe it is going to be a new inspiration you take home with you and find a ceramics course back home? During this workshop we will learn how to make slabs to later stamp leaves or flowers and make a piece with it. There will be foliage available but you can collect your own.This workshop is suitable for everyone, as no prior experience is necessary. All materials are included, and you will be able to take your piece home. If you want to explore your creativity and connect it with nature this is for you!`,
  },
  {
    id: 2,
    title: 'Yoga & Candles',
    date: '03-03-2024',
    time: '10:30 AM - 2:30 PM',
    location: 'string',
    category: 'workshop', // workshop or retreat
    image: `/images/yoga-candle.jpg`,
    price: 89,
    currency: '€',
    fullyBooked: false,
    description: `This event addresses both the body and the mind, to promote relaxation, creativity and a sense of community. It's perfect for anyone who wants to have fun alone or with friends, making crafts and sharing delicious snacks. Plus, you will take home a wonderful memory - your own homemade candle with a wonderful scent that will warm your home. Our workshops are limited to a small number of participants to ensure a personalized experience, so please book your spot early to avoid disappointment. To love our physical body we will practice a vinyasa flow yoga sequence moving through various strengthening and balancing yoga postures.`,
  },
  {
    id: 3,
    title: 'Cacao Ceremony',
    date: '15-03-2024',
    time: '6:30 PM - 8:30 PM',
    location: 'string',
    category: 'workshop', // workshop or retreat
    image: `/images/cacao-ceremony.jpg`,
    price: 39,
    currency: '€',
    fullyBooked: false,
    description: `Cacao ceremony is much more than just a trend, used ritually by Mayans and Aztecs for years to come together in a circle and connect. While it is often about expanding consciousness, opening our eyes and sharpening our awareness of the infinite possibilities of the universe, cacao takes us on a journey inwards. Mama Cocoa takes you on a journey into your heart, inviting you to dive into the world of your feelings, to go deep. Ceremonial cocoa opens hearts, lets us feel the love, the connection with each other. From heart to heart. From soul to soul. It lets the heart become the mouthpiece, lets it take the lead, lets us live from the heart.`,
  },
  {
    id: 4,
    title: 'Screen printing beginner',
    date: '21-03-2024',
    time: '10:00 AM - 1:00 PM',
    location: 'string',
    category: 'workshop', // workshop or retreat
    image: `/images/screen-printing.jpg`,
    price: 70,
    currency: '€',
    fullyBooked: false,
    description: `In this course you will learn the basics of screen printing so that you will be able to practise this fascinating printing process yourself. You will choose a motif that we will prepare for you and print on film. We will go through all the steps of the screen printing process with you, explain the necessary tools and show you how best to use them at each step. At the end of the course, you will print your own cotton bag (natural beige color) with your design.`,
  },
];

export function getWorkshops() {
  return workshops;
}

export function getWorkshop(id) {
  return workshops.find((workshop) => workshop.id === id);
}
