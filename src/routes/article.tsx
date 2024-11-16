import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

import { articles } from "@/data/articles";

const Article = () => {
  const params = useParams();
  const id = params.id;

  const article = articles[parseInt(id)];
  return (
    <>
      <Helmet>
        <title>{article.title} · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={HomeSplash} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex min-h-svh w-full items-end justify-end px-4 py-12 md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-end gap-8 text-right">
              <MaskText variant="splash" text="Articles" />
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
        {/* <div className="max-w-3xl px-4 md:px-16">
          <MaskText variant="header" text={`This is article number ${id}`} />
        </div> */}
        {/* <div className="h-[200vh]"></div> */}

        <section className="flex flex-col px-4 py-12 md:gap-16 md:px-64 md:py-24">
          {article.content.map((section, i) => (
            <div key={i} className="mb-6 flex flex-col md:gap-6">
              {/* Conditionally render paraTitle if it exists */}
              {section.paraTitle && (
                <MiText variant="header" className="mb-2">
                  {section.paraTitle}
                </MiText>
              )}

              {/* Render paraText (either as part of the section or as the conclusion) */}
              <MiText className="text-justify">{section.paraText}</MiText>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Article;
