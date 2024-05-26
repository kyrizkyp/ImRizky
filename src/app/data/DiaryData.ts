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
    judul: "MAKE A PRODUCT WEBSITE",

    subJudul: "Plan to create a website for a product.",

    status: "PROCESS",

    date: "9 MAY 2024",

    id: "bLgSOnE",

    desk1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam quos odio ex autem suscipit, nam dolorem reprehenderit ipsum itaque doloribus, alias, saepe unde?",

    desk2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, enim quaerat! Porro minus obcaecati doloremque eum rem, libero aperiam consectetur exercitationem unde, nisi deleniti, totam pariatur delectus reiciendis consequatur quas soluta ipsa deserunt sint!",

    desk3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, labore sunt enim excepturi temporibus odio.",

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

    desk1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam quos odio ex autem suscipit, nam dolorem reprehenderit ipsum itaque doloribus, alias, saepe unde?",

    desk2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, enim quaerat! Porro minus obcaecati doloremque eum rem, libero aperiam consectetur exercitationem unde, nisi deleniti, totam pariatur delectus reiciendis consequatur quas soluta ipsa deserunt sint!",

    desk3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, labore sunt enim excepturi temporibus odio.",

    link: "https://surabaya-dev.vercel.app/",
    
    btnJudul: "LOOK NOW",

    gambar: "/note/sbydev.jpg",
  },
];
export default DiaryData;