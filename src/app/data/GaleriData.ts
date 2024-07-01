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

    deskripsi: "This is just an example of 1 image without sliding.",

    date: "29 Juni 2024"
  },

  {
    foto: "https://fastly.picsum.photos/id/52/500/500.jpg?hmac=Ew22_0paDqni-fcLqUk4a3yqtH4Od_8Ncl9PjubW7wg",

    fotoKedua: "https://fastly.picsum.photos/id/14/500/500.jpg?hmac=ox1UUPMOYuExQb2o_j9CGRI4kCZig4bpV8zkPHE-nls",

    deskripsi: "This is just an example of an image that can be shifted. If you are using a PC, you can press the arrows on the keyboard. right to swipe next and left arrow to swipe previous. However, if you're on mobile, swipe on an image, swipe left for next, and swipe right for previous.",

    date: "24 Juni 2024"
  },
];

export default GaleriData;