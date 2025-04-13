// This document mocks a movie database, you can change it however you want,
// but I advise you to follow the interface, so you don't 
// break stuff unintentionally

export interface Movie {
  slug: string;
  title: string;
  desc: string;
  releaseYear: number;
  poster: string;
  showTime: string;
  room: string;
}

export const MovieList: Movie[] = [
  {
    slug: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    poster: "https://image.tmdb.org/t/p/original/y3ULnBxPeEsUmgK2hSvFkzkIpYF.jpg",
    showTime: "Monday, 18:30",
    room: "Screen 1" 
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    desc: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    releaseYear: 2008,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F17257718%2Fr%2Fil%2Ff4d506%2F3198058192%2Fil_1140xN.3198058192_nm71.jpg&f=1&nofb=1&ipt=e68b8eab0df2bd0f4c33bdfe80afefc0225488bae9debfbd40a223346465d886&ipo=images",
    showTime: "Friday, 20:00",
    room: "Screen 2"
  },
  {
    slug: "inception",
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    releaseYear: 2010,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflxt.tmsimg.com%2Fassets%2Fp7825626_p_v8_af.jpg&f=1&nofb=1&ipt=b7d70987d965f1612f865725c565f3bc6a3feefb740d76274da4cb0b7a6dae32&ipo=images",
    showTime: "Wednesday, 19:00",
    room: "Screen 1"
  },
  {
    slug: "im-still-here",
    title: "I'm Still Here",
    desc: "A deeply emotional and introspective journey of self-discovery, following a protagonist grappling with life's challenges and the search for meaning in a chaotic world.",
    releaseYear: 2024,
    poster: "https://images.justwatch.com/poster/320209239/s718/im-still-here-2024.jpg",
    showTime: "Thursday, 21:00",
    room: "Screen 1"
  },
  {
    slug: "avatar-the-way-of-water",
    title: "Avatar: The Way of Water",
    desc: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    releaseYear: 2022,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmlpnk72yciwc.i.optimole.com%2FcqhiHLc.IIZS~2ef73%2Fw%3Aauto%2Fh%3Aauto%2Fq%3A75%2Fhttps%3A%2F%2Fbleedingcool.com%2Fwp-content%2Fuploads%2F2022%2F11%2FAVATAR_THE_WAY_OF_WATER_1SHT_DIGITAL_LOAK_sRGB_V1.jpg&f=1&nofb=1&ipt=2bd5432bcb0e94e6980a6c1bce588d5ae8b9fda6fcfa515e45827e4a12c32ba9",
    showTime: "Monday, 20:00",
    room: "Screen 3"
  }, 
  {
    slug: "o-capacete-dourado",
    title: "O Capacete Dourado",
    desc: "A coming of age teenage movie where paths are crossed and hearts melt together.",
    releaseYear: 2007,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.filmaffinity.com%2Fo_capacete_dourado-904559780-large.jpg&f=1&nofb=1&ipt=6155bf0f655d8b68215f623ad557a9f07875db00ffd4d0991c00cbd078607c3b&ipo=images",
    showTime: "Sunday, 14:00",
    room: "Screen 1"
  }
];
