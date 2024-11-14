import Article1 from "../assets/articles/article1.png";
import Article2 from "../assets/articles/article2.png";
import Article3 from "../assets/articles/article3.png";
import Article4 from "../assets/articles/article4.png";
import Article5 from "../assets/articles/article5.png";
import Article6 from "../assets/articles/article6.jpeg";

type ArticleType = {
  title: string;
  date: string;
  pic: string;
  content: {
    body: { paraText: string; paraTitle?: string }[];
    sources: { link: string; linkTitle: string; supporting: string }[];
  };
}[];

// Please sort the list of articles to most recent first!
export const articles: ArticleType = [
  {
    title: "Air Purifier Myths Debunked: Separating Facts from Fiction",
    date: "7 Nov 2024",
    pic: Article6,
    content: {
      body: [
        {
          paraText:
            "Air purifiers have become more popular as people learn about the importance of indoor air quality. However, misconceptions about their effectiveness and functions abound. Here’s a closer look at common myths surrounding air purifiers and what the science actually says.",
        },
        {
          paraTitle: "Myth #1: All Air Purifiers Work the Same Way",
          paraText:
            "Not all air purifiers are equal. There are multiple types, including HEPA filters, activated carbon filters, and UV purifiers, each targeting different pollutants. The Xiaomi Air Purifier 4 uses a HEPA and activated carbon combination to capture particles, VOCs, and odors, making it suitable for various indoor pollutants (U.S. Environmental Protection Agency, source: https://www.epa.gov/indoor-air-quality-iaq/types-air-cleaners).",
        },
        {
          paraTitle: "Myth #2: Air Purifiers Remove All Indoor Pollutants",
          paraText:
            "While air purifiers are highly effective for many airborne particles, they may not eliminate all pollutants. For example, gases from paint or chemicals require an air purifier with activated carbon filters, like the one in the Xiaomi Air Purifier 4. It’s also worth noting that proper ventilation and regular cleaning are essential for a truly clean indoor environment (Centers for Disease Control and Prevention, source: https://www.cdc.gov).",
        },
        {
          paraTitle:
            "Myth #3: Air Purifiers Are Only Necessary for Allergy Sufferers",
          paraText:
            "Even those without allergies can benefit from improved air quality. Pollutants like VOCs, dust, and pet dander affect everyone, even if symptoms aren’t immediately noticeable. Prolonged exposure to poor air quality has been linked to respiratory and cardiovascular issues over time (American Lung Association, source: https://www.lung.org).",
        },
        {
          paraTitle:
            "Myth #4: Running an Air Purifier All Day Increases Energy Costs",
          paraText:
            "Most modern air purifiers, including the Xiaomi Air Purifier 4, are energy efficient and designed to run continuously with minimal impact on energy bills. Additionally, the Xiaomi Air Purifier has an energy-saving mode, allowing for eco-friendly, cost-effective operation.",
        },
        {
          paraText:
            "Understanding how air purifiers work and what they can (and can’t) do helps set realistic expectations and make the most of their capabilities. The Xiaomi Air Purifier 4’s combination of advanced filtration and smart technology makes it an effective choice for keeping indoor air clean and healthy.",
        },
      ],
      sources: [{ link: "string", supporting: "string", linkTitle: "string" }],
    },
  },
  {
    title: "Clearing the Air: Tackling Hidden Pollutants in Your Home",
    date: "29 Oct 2024",
    pic: Article5,
    content: "",
  },
  {
    title: "Clearing the Air: Tackling Hidden Pollutants in Your Home",
    date: "25 Oct 2024",
    pic: Article4,
    content: "",
  },
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
