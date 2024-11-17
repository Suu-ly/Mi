import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { articles } from "@/data/articles";

const Article = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const params = useParams();
  const id = params.id;

  const article = articles[parseInt(id)];
  return (
    <>
      <Helmet>
        <title>{article.title} · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-20 md:gap-48">
        <Splash
          src={
            isLarge
              ? article.pic
              : article.pic_cropped
                ? article.pic_cropped
                : article.pic
          }
          alt="Xiaomi Smart Air Purifier 4"
        >
          <div className="justify-centre flex min-h-svh w-full items-end px-4 py-12 sm:px-48 md:gap-16 md:px-48 md:py-24 lg:px-64 2xl:px-96">
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-white/0 to-black/30"></div>
            <div className="relative z-20 flex flex-col items-start gap-8 text-left">
              <MaskText
                variant="splash"
                text={article.title}
                className="text-slate-50"
              />
              <p className="text-slate-200">{article.date}</p>
            </div>
          </div>
        </Splash>

        <section className="flex flex-col gap-8 px-4 py-12 sm:px-48 md:gap-16 md:px-48 md:py-24 lg:px-64 2xl:px-96">
          {article.content.body.map((section, i) => (
            <div key={i} className="mb-6 flex flex-col gap-4 md:gap-6">
              {/* Conditionally render paraTitle if it exists */}
              {section.paraTitle && (
                <h6 className="mb-2 font-display text-2xl font-semibold md:text-4xl">
                  {section.paraTitle}
                </h6>
              )}

              {/* Render paraText */}
              <MiText className="text-justify">{section.paraText}</MiText>

              {/* Render paraText2 if exists */}
              {section.paraText2 && (
                <MiText className="mt-1 text-justify">
                  {section.paraText2}
                </MiText>
              )}
              {/* Render paraText3 if exists */}
              {section.paraText3 && (
                <MiText className="mt-1 text-justify">
                  {section.paraText3}
                </MiText>
              )}
              {/* Render paraText4 if exists */}
              {section.paraText4 && (
                <MiText className="mt-1 text-justify">
                  {section.paraText4}
                </MiText>
              )}
              {/* Render paraText5 if exists */}
              {section.paraText5 && (
                <MiText className="mt-1 text-justify">
                  {section.paraText5}
                </MiText>
              )}
            </div>
          ))}

          {/* Display the Sources at the end of the article */}
          <div className="flex flex-col gap-2 md:gap-6">
            <h6 className="mb-8 mt-12 font-display text-xl font-semibold md:mb-6 md:text-2xl">
              Sources:
            </h6>
            {article.content.sources.map((source, i) => (
              <div key={i} className="mb-6 flex flex-col md:gap-4">
                <h6 className="font-normal text-slate-500 md:text-xl">
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-indigo-700"
                  >
                    {source.linkTitle}
                  </a>
                  <span className="mx-4">|</span>
                  <span>{source.supporting}</span>
                </h6>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Article;
