import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Parallax from "@/components/parallax";
import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import NewsLetter from "../assets/blog/newsletter.jpg";
import NewsLetter_cropped from "../assets/blog/newsletter_cropped.jpg";

import { articles } from "@/data/articles";
import { useState } from "react";

const Blog = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const [email, setEmail] = useState("");
  return (
    <>
      <Helmet>
        <title>Blog · Xiaomi</title>
        <meta
          name="description"
          content="Stay updated with the latest tips, insights, and news on air quality, sustainable living, and home essentials. Our blog offers expert advice and practical solutions to help you breathe easier and live better."
        />
      </Helmet>
      <main className="flex flex-col gap-20 md:gap-48">
        <Splash src={articles[5].pic} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex min-h-svh w-full items-center justify-center px-4 py-12 pt-32 md:min-h-full md:px-16 md:py-32 lg:justify-end">
            <div className="flex max-w-lg flex-col items-center gap-8 rounded-3xl bg-white px-8 py-6 text-left">
              <MiText className="font-medium text-emerald-600">
                Featured Read
              </MiText>
              <div>
                <MaskText
                  variant="splash"
                  text={articles[5].title}
                  className="mb-3 text-3xl font-medium sm:text-4xl lg:text-5xl"
                />
                <p className="mb-4 flex w-full items-start">
                  {articles[5].date}
                </p>
                <p className="text-slate-700">
                  Transform your home into a sanctuary with these essentials for
                  a cleaner, healthier environment. From air purifiers to
                  natural cleaning, discover what you need.
                </p>
              </div>
              <Button asChild>
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
            <div className="grid w-full grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="group rounded-3xl bg-white p-4 md:p-6"
                >
                  <Link to={`/article/${index}`}>
                    <AspectRatio
                      ratio={3 / 2}
                      className="mb-6 overflow-hidden rounded-3xl"
                    >
                      <img
                        src={article.pic}
                        alt={article.title}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
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
          <div className="absolute inset-0 z-10 from-black/80 to-white/0 md:bg-gradient-to-r"></div>
          <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-start gap-12 px-6 py-24 text-center md:w-4/5 md:items-start md:justify-center md:px-24 md:text-left lg:w-3/5 lg:p-32">
            <div className="flex flex-col gap-4">
              <MaskText
                variant="header"
                text="Join Us on the Journey to Pure Air"
                className="text-slate-50"
              />
              <FadeIn>
                <MiText className="text-slate-200">
                  Be the first to know about new articles, wellness trends, and
                  air-purifying tips.
                </MiText>
              </FadeIn>
            </div>
            <FadeIn className="w-full">
              <Input
                variant={"default"}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-slate-600 text-slate-50 placeholder:text-slate-200 focus-visible:ring-emerald-400"
              />
            </FadeIn>
            <FadeIn>
              <Button
                onClick={() => {
                  if (email) toast("Subscribed successfully!");
                }}
              >
                Subscribe
              </Button>
            </FadeIn>
          </div>
          <Parallax
            src={isLarge ? NewsLetter : NewsLetter_cropped}
            alt="Smart Air Purifier 4"
            className="h-[75vh] w-full brightness-50 contrast-[0.9] md:brightness-100"
          />
        </section>
      </main>
    </>
  );
};

export default Blog;
