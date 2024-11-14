import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HomeSplash from "../assets/home/home_splash.png";
import FadeIn from "@/components/fadein";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { articles } from "@/data/articles";
import Article1 from "../assets/blog/article1.png";
import Article2 from "../assets/blog/article2.png";
import Article3 from "../assets/blog/article3.png";
import Article4 from "../assets/blog/article4.png";
import Article5 from "../assets/blog/article5.png";
import Article6 from "../assets/blog/article6.jpeg";

const Blog = () => {
  const article = articles[0]; // Replace with your logic to select an article
  return (
    <>
      <Helmet>
        <title>Blog · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={HomeSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex min-h-svh w-full items-end justify-end px-4 py-12 md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-end gap-8 text-right">
              <MaskText variant="splash" text="Home Essentials:" />
              <MaskText
                variant="splash"
                text="Must-Have Items for a Healthier, Happier Living Space"
              />
              <MiText className="font-medium text-slate-800">
                Meet Xiaomi Smart Air Purifier 4, your new best friend for
                cleaner, fresher air at home
              </MiText>
              <Button asChild>
                <Link to="/product">Discover More</Link>
              </Button>
            </div>
          </div>
        </Splash>
        <div className="max-w-3xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Introducing Smart Air Purifier 4"
            className="mb-8"
          />
          <MiText>
            Designed to tackle indoor air pollution head-on and ensure that
            every breath you take is pure and healthy.
          </MiText>
        </div>
        {/* <div className="h-[200vh]"></div> */}

        <section className="mb-48 flex flex-col items-start px-4 md:px-16">
          <MaskText
            variant="header"
            text="Latest Articles"
            className={`mb-8`}
          />
          <FadeIn>
            <div className="mb-16 grid w-full grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
              {articles.map((article, index) => (
                <div key={index}>
                  <Link to={`/article/${index}`}>
                    <AspectRatio ratio={3 / 2} className="mb-6">
                      <img
                        src={article.pic}
                        alt={article.title}
                        className="size-full rounded-3xl object-cover"
                      />
                    </AspectRatio>
                    <h6 className={`mb-2 font-display text-2xl font-semibold`}>
                      {article.title}
                    </h6>
                    <p>{article.date}</p>
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
};

export default Blog;
