interface DataFoto {
  foto: string;
  judul: string;
  subJudul: string;
  btnJudul: string;
  link: string;
}

const HeroData: DataFoto[] = [
  {
    foto: "https://fastly.picsum.photos/id/501/900/500.jpg?hmac=C86Xc0e9WvJ3ZqwwE-7nHdH7_knINAIw-1IULXSusN4",
    judul: "I AM",
    subJudul: "KYRIZKYP",
    btnJudul: "INTRODUCE",
    link: "/about-me",
  },

  {
    foto: "https://fastly.picsum.photos/id/281/900/500.jpg?hmac=kgHy9BI0bU8yCwI-T_otZvnibeVWjQbigaH2VwvqPD4",
    judul: "ARTS WEB",
    subJudul: "FRONT-END",
    btnJudul: "THAT I USE",
    link: "/artwork",
  },

  {
    foto: "https://fastly.picsum.photos/id/1064/900/500.jpg?hmac=ilOQsllcQK35qGpAnicBwYWuuO-zou9eVwDCUF2OeGk",
    judul: "CREAVITY",
    subJudul: "EVERYTHING",
    btnJudul: "NOTE IT DOWN",
    link: "/blogs",
  },
]
export default HeroData;