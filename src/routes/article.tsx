import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";

import MiText from "@/components/ui/miText";
import { articles } from "@/data/articles";

const Article = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");
  const params = useParams();
  const id = params.id;

  if (!id) return <Navigate to="/404" />;

  const article = articles[parseInt(id)];
  return (
    <>
      <Helmet>
        <title>{article.title} · Xiaomi</title>
        <meta name="description" content={article.content.body[0].paraText} />
      </Helmet>
      <main className="flex flex-col gap-16">
        <Splash
          src={
            isLarge
              ? article.pic
              : article.pic_cropped
                ? article.pic_cropped
                : article.pic
          }
          alt="Xiaomi Smart Air Purifier 4"
          className="relative"
        >
          <div className="mx-auto flex max-w-4xl items-end px-4 pb-16 md:px-16">
            {/* Gradient overlay */}
            <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-slate-50/0 to-slate-50/60 delay-500 duration-700 animate-in fade-in fill-mode-both"></div>
            <div className="relative z-20 flex flex-col items-start gap-8 text-left">
              <MaskText variant="splash" text={article.title} />
              <MiText>{article.date}</MiText>
            </div>
          </div>
        </Splash>

        <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 md:gap-16 md:px-16">
          {article.content.body.map((section, i) => (
            <div
              key={i}
              className="mb-6 flex flex-col gap-4 text-lg text-slate-700 md:gap-6"
            >
              {/* Conditionally render paraTitle if it exists */}
              {section.paraTitle && (
                <h6 className="mb-2 font-display text-2xl font-medium text-slate-900">
                  {section.paraTitle}
                </h6>
              )}

              {/* Render paraText */}
              <p className="text-justify">{section.paraText}</p>

              {/* Render paraText2 if exists */}
              {section.paraText2 && (
                <p className="mt-1 text-justify">{section.paraText2}</p>
              )}
              {/* Render paraText3 if exists */}
              {section.paraText3 && (
                <p className="mt-1 text-justify">{section.paraText3}</p>
              )}
              {/* Render paraText4 if exists */}
              {section.paraText4 && (
                <p className="mt-1 text-justify">{section.paraText4}</p>
              )}
              {/* Render paraText5 if exists */}
              {section.paraText5 && (
                <p className="mt-1 text-justify">{section.paraText5}</p>
              )}
            </div>
          ))}

          {/* Display the Sources at the end of the article */}
          <div>
            <h6 className="mb-4 font-display text-2xl font-medium text-slate-900">
              Sources:
            </h6>
            {article.content.sources.map((source, i) => (
              <div key={i} className="mb-4 flex flex-col gap-2">
                <h6 className="font-normal text-slate-700 md:text-lg">
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline transition-colors hover:text-blue-800"
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
