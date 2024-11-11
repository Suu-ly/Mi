import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Page not found!</title>
      </Helmet>
      <main className="flex h-dvh w-screen flex-col items-center justify-center gap-12">
        <MiText variant="header">Page Not Found!</MiText>
        <MiText className="text-center">It seems an error has occurred.</MiText>
        <Button asChild>
          <Link to="">Return home</Link>
        </Button>
      </main>
    </>
  );
};

export default Error;
