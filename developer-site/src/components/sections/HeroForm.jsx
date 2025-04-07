import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroForm = ({ contentPage }) => {
  /* Effect y state para skeleton */
  const [loading, setLoading] = useState(true);
  /* Time out para Skeleton */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!Array.isArray(contentPage)) {
    console.error("Expected contentPage to be an array, but got:", contentPage);
    return <p>Invalid content data.</p>;
  }

  // const { title } = useParams();
  const heroComponent = contentPage.find((item) => item.__component === "about-us.hero-promotion-form");
  if (!heroComponent) {
    return <p>Hero component not found.</p>;
  }

  const bgImage = getImageUrl(import.meta.env.VITE_LOCAL_URL, heroComponent.bgImage?.url);
  const backgroundColor = `var(--${heroComponent.bgColor})` || "#A41F35";

  return (
    <div key={heroComponent.id}>
      {loading ? (
        <Skeleton animation="pulse" height={800} width={1920} style={{ borderRadius: "20px" }} />
      ) : (
        <div className="overflow-hidden" id="hero">
          <div
            className="py-10 md:gap-4 sm:gap-y-8 w-full mx-auto -z-20 lg:-mt-8 xl:-my-0 xl:pt-4 lg:h-[50vh]"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundColor,
            }}
          >
            <div className="max-w-[1240px] md:pt-6 sm:pt-0 mx-auto">
              <div className="sm:pt-8 lg:py-20 ">
                <div className="text-center py-2 md:py-5 lg:py-10 bg-BG_DARK dark:bg-card">
                  <h1 className="font-semibold text-xl md:text-2xl my-1 lg:text-3xl capitalize text-center">
                    {heroComponent.title}
                  </h1>
                  <div className="">
                    <div className=" pt-3 md:pt-5 text-base text-center md:text-start lg:text-lg mx-5">{heroComponent.desc}</div>
                  </div>
                  <Link to={"/contactus"}>
                    <Button className=" mt-3 md:mt-5 hover:text-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent  transition ease-out duration-200 ">
                      Dar el siguiente paso
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroForm;
