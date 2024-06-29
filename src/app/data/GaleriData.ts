interface DataFoto {
  foto: string;
  fotoKedua: string;
  deskripsi: string;
  date: string;
  // id: string;
}

const GaleriData: DataFoto[] = [
  {
    // id: "satu",

    foto: "https://fastly.picsum.photos/id/984/500/500.jpg?hmac=pyY7pQAMjNdqpFpf7EGBwLWshfW7o1ql2QIDKdwBNAU",

    fotoKedua: "",

    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis est ipsam dicta id dolor ducimus, inventore iure mollitia. Pariatur veritatis soluta ducimus saepe excepturi, maiores eos. Nesciunt, consequatur aperiam!",

    date: "29 Juni 2024"
  },

  {
    foto: "https://fastly.picsum.photos/id/52/500/500.jpg?hmac=Ew22_0paDqni-fcLqUk4a3yqtH4Od_8Ncl9PjubW7wg",

    fotoKedua: "https://fastly.picsum.photos/id/14/500/500.jpg?hmac=ox1UUPMOYuExQb2o_j9CGRI4kCZig4bpV8zkPHE-nls",

    deskripsi: "hai",

    date: "24 Juni 2024"
  },
];

export default GaleriData;