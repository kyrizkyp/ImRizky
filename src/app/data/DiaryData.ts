interface DataBlog {
  judul: string;
  subJudul: string;
  status: string;
  date: string;
  id: string;
  desk1: string;
  desk2: string;
  desk3: string;
  link: string;
  btnJudul: string;
  gambar: string;
}

const DiaryData: DataBlog[] = [
  {
    judul: "TODO SAVINGS",

    subJudul: "Calculate monthly expenses.",

    status: "PROCESS",

    date: "9 MAY 2024",

    id: "bLgSOnE",

    desk1: "To make it easier to calculate monthly expenses in more detail and specifically. To be wiser in managing finances.",

    desk2: "I created Todo Savings which aims to manage personal finances. To help me calculate monthly expenses and income.",

    desk3: "In my opinion, having todo savings will make it easier to calculate monthly efficiently and make wiser in managing your income.",

    link: "",

    btnJudul: "ON PROCESS",

    gambar: "",
  },

  {
    judul: "SURABAYA DEV",

    subJudul: "Surabaya IT community website.",

    status: "FINISHED",

    date: "23 APR 2024",

    id: "bLgSTwO",

    desk1: "SurabayaDev is an IT community domiciled in the city of Surabaya which has an activity agenda with the theme of technology education in synergy and collaboration.",

    desk2: "Expanding relationships through the community to create benefits. Become a learning forum for IT activists to be able to continue to update about the current tech industry.",

    desk3: "Becomes the right forum to share knowledge, experience and insight regarding technology updates.",

    link: "https://surabaya-dev.vercel.app/",
    
    btnJudul: "LOOK NOW",

    gambar: "/note/sbydev.jpg",
  },
];
export default DiaryData;