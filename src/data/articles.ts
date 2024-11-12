import Article1 from "../assets/articles/article1.png";
import Article2 from "../assets/articles/article2.png";
import Article3 from "../assets/articles/article3.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArticleType = { title: string; date: string; pic: string; content: any }[];

// Please sort the list of articles to most recent first!
export const articles: ArticleType = [
  {
    title: "Clearing the Air: Tackling Hidden Pollutants in Your Home",
    date: "4 Oct 2024",
    pic: Article1,
    content: "",
  },
  {
    title: "Green from the Ground Up: Innovations in Sustainable Manufacturing",
    date: "13 Sep 2024",
    pic: Article2,
    content: "",
  },
  {
    title:
      "Home Essentials: Must-Have Items for a Healthier, Happier Living Space",
    date: "12 Aug 2024",
    pic: Article3,
    content: "",
  },
];
