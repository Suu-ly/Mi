import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Parallax from "@/components/parallax";
import NewsLetter from "../assets/blog/newsletter.jpg";
import NewsLetter_cropped from "../assets/blog/newsletter_cropped.jpg";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { articles } from "@/data/articles";

const Blog = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const article = articles[0]; // Replace with your logic to select an article
  return (
    <>
      <Helmet>
        <title>Blog · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-20 md:gap-48">
        <Splash src={articles[5].pic} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex min-h-svh w-full items-center justify-center px-4 py-12 pt-32 md:min-h-full md:px-16 md:py-32 lg:justify-end">
            <div className="flex max-w-3xl flex-col items-center gap-8 rounded-2xl bg-white bg-opacity-80 px-9 py-7 text-left lg:absolute">
              <MiText className="font-medium text-emerald-600">
                Featured Read
              </MiText>
              <MaskText variant="splash" text={articles[5].title} />
              <p className="flex w-full items-start">{articles[5].date}</p>
              <MiText className="font-medium text-slate-800">
                Transform your home into a sanctuary with these essentials for a
                cleaner, healthier environment. From air purifiers to natural
                cleaning, discover what you need.
              </MiText>
              <Button asChild className="flex items-center">
                <Link to="/article/5">Read More</Link>
              </Button>
            </div>
          </div>
        </Splash>

        <section className="mb-8 flex flex-col items-start px-4 md:px-16">
          <MaskText
            variant="header"
            text="Latest Articles"
            className={`mb-16`}
          />
          <FadeIn>
            <div className="grid w-full grid-cols-1 gap-16 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
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

        <section className="relative flex-col gap-16">
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-r from-black/50 to-white/0"></div>
          <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-start gap-12 px-6 py-24 text-center md:w-4/5 md:items-start md:justify-center md:px-24 md:text-left lg:w-3/5 lg:p-32">
            <div className="flex flex-col gap-4">
              <MaskText
                variant="header"
                text="Join Us on the Journey to Pure Air"
                className="text-slate-50"
              />
              <MiText className="text-slate-200">
                Be the first to know about new articles, wellness trends, and
                air-purifying tips.
              </MiText>
            </div>
            <Input
              variant={"default"}
              type="email"
              placeholder="Email"
              className="border-white text-slate-50 placeholder:text-slate-200"
            />
            <Button asChild>
              <Link to="/subscriebe">Subscribe</Link>
            </Button>
          </div>
          <Parallax
            src={isLarge ? NewsLetter : NewsLetter_cropped}
            alt="Smart Air Purifier 4"
            className="h-[75vh] w-full"
          />
        </section>
      </main>
    </>
  );
};

export default Blog;
