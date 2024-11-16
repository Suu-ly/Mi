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
            "Not all air purifiers are equal. There are multiple types, including HEPA filters, activated carbon filters, and UV purifiers, each targeting different pollutants. The Xiaomi Air Purifier 4 uses a HEPA and activated carbon combination to capture particles, VOCs, and odors, making it suitable for various indoor pollutants.",
        },
        {
          paraTitle: "Myth #2: Air Purifiers Remove All Indoor Pollutants",
          paraText:
            "While air purifiers are highly effective for many airborne particles, they may not eliminate all pollutants. For example, gases from paint or chemicals require an air purifier with activated carbon filters, like the one in the Xiaomi Air Purifier 4. It’'s also worth noting that proper ventilation and regular cleaning are essential for a truly clean indoor environment.",
        },
        {
          paraTitle:
            "Myth #3: Air Purifiers Are Only Necessary for Allergy Sufferers",
          paraText:
            "Even those without allergies can benefit from improved air quality. Pollutants like VOCs, dust, and pet dander affect everyone, even if symptoms aren’t immediately noticeable. Prolonged exposure to poor air quality has been linked to respiratory and cardiovascular issues over time.",
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
      sources: [
        {
          link: "https://airpurifiers.com/tech-center/differences-between-an-air-purifier-and-an-air-cleaner/",
          supporting: "AirPurifiers.com",
          linkTitle: "Differences Between an Air Purifier and an Air Cleaner",
        },
        {
          link: "https://www.livescience.com/air-purifier-myths-debunked",
          supporting: "Live Science",
          linkTitle: "Air purifier myths debunked: What you need to know",
        },
        {
          link: "https://www.cdc.gov/niosh/ventilation/prevention/air-cleanliness.html",
          supporting: "U.S. Centers for Disease Control and Prevention, CDC",
          linkTitle: "Improving Air Cleanliness",
        },
        {
          link: "https://www.lung.org/research/sota/health-risks#:~:text=Both%20ozone%20and%20particle%20pollution%20can%20impact%20the,at%20higher%20risk%20of%20poor%20outcomes%20from%20COVID-19.",
          supporting: "American Lung Association",
          linkTitle: "Health Impact of Pollution",
        },
      ],
    },
  },
  {
    title:
      "Tech for Health: How Smart Air Purifiers Are Changing Home Wellness",
    date: "29 Oct 2024",
    pic: Article5,
    content: {
      body: [
        {
          paraText:
            "For many homeowners, creating a sanctuary of health and comfort is a top priority. With advances in air purifier technology, it's now easier than ever to control the quality of your indoor air. Smart air purifiers are equipped with features that go beyond traditional filtration, providing users with a modern, more responsive approach to managing air quality.",
        },
        {
          paraTitle: "Smart Air Purifiers: More Than Just Filters",
          paraText:
            "Traditional air purifiers typically use HEPA filters, which are highly effective in capturing microscopic particles, but modern smart purifiers go beyond filtration to offer real-time data and enhanced control. Here are a few of the key features that make smart air purifiers an excellent choice for wellness-conscious homeowners:",
        },
        {
          paraTitle: "1. Air Quality Monitoring and Real-Time Feedback",
          paraText:
            "Many smart air purifiers come with sensors that continuously measure indoor air quality. These sensors detect pollutant levels and provide real-time updates, often displayed via color-coded lights or in a mobile app. Homeowners can see the exact quality of their air and know when to adjust settings if pollution levels rise.",
        },
        {
          paraTitle: "2. Remote Control and Scheduling",
          paraText:
            "Smart purifiers connect to mobile apps, enabling users to monitor and control their devices remotely. Whether you're adjusting fan speed, turning the unit on before you arrive home, or checking the status of your air quality, the app provides convenient, on-the-go control. This automation makes managing air quality less of a chore and more of an integrated wellness feature.",
        },
        {
          paraTitle: "3. Adaptive Settings for Optimal Performance",
          paraText:
            "Advanced smart purifiers offer auto-mode settings that adjust based on air quality readings, increasing fan speeds when pollutants are detected. This proactive approach saves energy and ensures effective purification. For busy homeowners, this feature adds convenience and peace of mind.",
        },
        {
          paraTitle: "Choosing the Right Air Purifier for Your Home",
          paraText:
            "With so many air purifiers on the market, selecting the right one can seem overwhelming. Here are the essential factors to consider when choosing the best air purifier for your space:",
        },
        {
          paraText:
            "Filters: Look for HEPA filters to capture fine particles like those in haze, and activated carbon filters to remove odors and chemicals. Some models also include UV light to neutralize bacteria and viruses.",
        },
        {
          paraText:
            "CADR (Clean Air Delivery Rate): This refers to how efficient an air purifier can pump out clean air in a room. A higher CADR means faster, more effective air purification.",
        },
        {
          paraText:
            "Coverage Area: Different air purifiers can support different room sizes. Make sure the purifier’s coverage suits your room size for optimal air quality.",
        },
        {
          paraText:
            "Noise Level: For quieter rooms like bedrooms, choose a model with low decibel ratings for undisturbed sleep.",
        },
        {
          paraText:
            "Energy Efficiency: Opt for energy-efficient models to save on utility costs.",
        },
        {
          paraText:
            "Other features you should consider in an air purifier include smart sensors that can detect air quality and automatically adjust settings to fit the situation. This means you can save energy and enjoy quieter operation when not needed.",
        },
        {
          paraTitle:
            "Introducing the Xiaomi Smart Air Purifier 4: Clean Air Made Simple",
          paraText:
            "The Xiaomi Smart Air Purifier 4 combines high-grade filtration with smart technology to deliver clean air seamlessly. Equipped with a high-efficiency HEPA filter, it captures up to 99.97% of airborne particles, from allergens to tiny PM3.0 particles. The purifier’s activated carbon filter also neutralizes odors and VOCs, ensuring that your home remains a fresh, comfortable space. Its app-based control allows you to monitor air quality and adjust settings remotely, perfect for users seeking a modern, low-maintenance way to enhance their indoor environment.",
        },
        {
          paraText:
            "Smart air purifiers provide a straightforward, effective way to create a healthier living space, and they bring wellness-focused technology directly into your home. With this tech, improving indoor air quality is as easy as pressing a button, helping you breathe easier every day.",
        },
      ],
      sources: [
        {
          link: "https://www.lung.org/clean-air/indoor-air/building-type-air-resources/at-home",
          supporting: "American Lung Association",
          linkTitle: "Clean Air at Home",
        },
        {
          link: "https://www.figma.com/exit?url=https%3A%2F%2Fwww.epa.gov%2Findoor-air-quality-iaq%2Fair-sensor-technology-and-indoor-air-quality",
          supporting: "U.S. Environmental Protection Agency, US EPA",
          linkTitle: "Air Sensor Technology and Indoor Air Quality",
        },
        {
          link: "https://www.straitstimes.com/life/best-air-purifier-for-home-singapore",
          supporting: "The Straits Times",
          linkTitle:
            "How to choose the best air purifier for your home in 2024",
        },
      ],
    },
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
    content: {
      body: [
        {
          paraText:
            "Sustainability is more than a trend—it's a necessity for our planet's future. Companies are increasingly adopting eco-friendly manufacturing practices, and Xiaomi is no exception. With the Smart Air Purifier 4, Xiaomi has implemented thoughtful innovations that minimize environmental impact.",
        },
        {
          paraTitle: "Sustainable Materials and Production",
          paraText:
            "One core aspect of sustainable manufacturing is using materials that are responsibly sourced and recyclable. Xiaomi ensures that the plastic and electronic components in the Smart Air Purifier 4 are recyclable and meet high environmental standards. This reduces waste and promotes a circular economy, where products are reused rather than discarded.",
        },
        {
          paraTitle: "Energy Efficiency",
          paraText:
            "The Smart Air Purifier 4 is designed to consume minimal energy without sacrificing performance. Equipped with an optimized power-saving mode, it purifies air efficiently, contributing to lower household energy consumption. This is not only eco-friendly but also cost-effective for users.",
        },
        {
          paraTitle: "Longevity and Reduced Waste",
          paraText:
            "Xiaomi emphasizes quality and durability in its design, aiming to reduce the need for frequent replacements. A longer product life means less waste, and by producing items meant to last, Xiaomi actively reduces its carbon footprint.",
        },
        {
          paraTitle:
            "Beyond the Product: Xiaomi’s Broader Sustainability Goals",
          paraText:
            "Xiaomi is committed to broader environmental goals, including energy reduction, waste management, and eco-conscious packaging. These practices ensure that from manufacturing to disposal, the Smart Air Purifier 4 remains as green as possible.",
        },
        {
          paraText:
            "Sustainable manufacturing practices not only reduce harm to the planet but also provide consumers with reliable, high-quality products they can feel good about using. By choosing eco-friendly tech, you contribute to a healthier planet and a cleaner home.",
        },
      ],
      sources: [
        {
          link: "https://www.ellenmacarthurfoundation.org/topics/circular-economy-introduction/overview",
          supporting: "Ellen MacArthur Foundation",
          linkTitle: "Circular Economy Explained",
        },
        {
          link: "https://www.iso.org/sectors/environment/circular-economy",
          supporting: "International Standards Organization, ISO",
          linkTitle: "Environmental Sustainability: Circular Economy",
        },
      ],
    },
  },
  {
    title:
      "Home Essentials: Must-Have Items for a Healthier, Happier Living Space",
    date: "12 Aug 2024",
    pic: Article3,
    content: "",
  },
];
