interface DataBlog {
  judul: string;
  subJudul: string;
  status: string;
  kategori: string;
  id: string;
  desk1: string;
  desk2: string;
  desk3: string;
}

const DiaryData: DataBlog[] = [
  {
    judul: "PEOPLE PLEASER",

    subJudul: "Avoid excessive self-sacrifice.",

    status: "STORY",

    kategori: "DAILY",

    id: "people-pleaser",

    desk1: `Sometimes we sacrifice ourselves too often and feel uncomfortable saying “no” to others. As a result, we prefer to force ourselves to say "yes", which ultimately makes us do something with a heavy heart.`,

    desk2: `I experienced firsthand how being a people pleaser, makes me continually strive to please others. However, in the end, I learned that sacrificing myself does not bring true happiness. Through this personal journey, I realized the importance of valuing myself, and prioritizing personal happiness as a foundation for better helping others.`,

    desk3: `There is no need to always please others to gain their acceptance. Sincerity and one's own happiness are more important than sacrificing oneself for the sake of others. Be yourself, because only then can you find true happiness.`,
  },

  {
    judul: "UNDER PRESSURE",

    subJudul: "Resilience under pressure.",

    status: "STORY",

    kategori: "DAILY",

    id: "under-pressure",

    desk1: `Every day, the burden of tasks and responsibilities continues to increase, pressing on our thoughts and feelings, requiring us to remain focused, not fall into the midst of busyness, and continue to seek inner peace.`,

    desk2: `In real life, pressure comes from various directions, from work, family, and our own expectations, forcing us to keep fighting, maintain balance between all of them, and keep trying to achieve our life goals.`,

    desk3: `When the pressure gets heavy, remember that every challenge is an opportunity to grow, hone our abilities, and form resilience that will help us face the future better, with confidence and courage.`,
  },

  {
    judul: "MEANING OF LOVE",

    subJudul: "Love is the key to life.",

    status: "STORY",

    kategori: "DAILY",

    id: "meaning-of-love",

    desk1: `Love is a feeling that cannot be defined by mere words. He comes in the form of attention, affection and sacrifice that knows no boundaries. Love envelops with warmth that can eliminate all worries and sorrows. Love is like air, invisible but its presence can always be felt with every breath. Love is the foundation of true happiness.`,

    desk2: `In life's journey, love is often the compass that guides us to true happiness. When love is present, everything seems more beautiful and meaningful. In the context of work, love for what we do is a driving force to give our best. It gives strength to face challenges, and makes gloomy days bright. Love for work makes us work with passion and dedication.`,

    desk3: `However, love also teaches us about patience and understanding, both in personal and professional life. It demands honesty and openness, as well as the ability to understand each other without reservation. In love, we learn to accept each other's strengths and weaknesses, and create harmony and mutual respect. In work, love teaches us to work together with a team, respect each other's roles, and create a positive work environment. Love is a beautiful journey, full of twists and turns but always providing miracles.`,
  },
];
export default DiaryData;