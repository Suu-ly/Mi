import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import HomeSplash from "../assets/home/home_splash.png";

const Article = () => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <Helmet>
        <title>Article Title · Xiaomi</title>
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
        <div className="max-w-3xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Introducing Smart Air Purifier 4"
            className="mb-8"
          />
          <MaskText variant="header" text={`This is article number ${id}`} />
        </div>
        <div className="h-[200vh]"></div>
      </main>
    </>
  );
};

export default Article;
