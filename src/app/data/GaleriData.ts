interface DataFoto {
  foto: string;
  fotoKedua: string;
  deskripsi: string;
  id: string;
}

const GaleriData: DataFoto[] = [
  {
    id: "satu",

    foto: "https://fastly.picsum.photos/id/984/500/500.jpg?hmac=pyY7pQAMjNdqpFpf7EGBwLWshfW7o1ql2QIDKdwBNAU",

    fotoKedua: "",

    deskripsi: "hai",
  },

  {
    id: "dua",

    foto: "https://fastly.picsum.photos/id/52/500/500.jpg?hmac=Ew22_0paDqni-fcLqUk4a3yqtH4Od_8Ncl9PjubW7wg",

    fotoKedua: "https://fastly.picsum.photos/id/14/500/500.jpg?hmac=ox1UUPMOYuExQb2o_j9CGRI4kCZig4bpV8zkPHE-nls",

    deskripsi: "hai",
  },
];

export default GaleriData;