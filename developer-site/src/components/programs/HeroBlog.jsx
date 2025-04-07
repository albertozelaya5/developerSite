import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HeroBlog = ({ contentPage }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const api = contentPage.find((item) => item?.id.toString() === id) || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  const hero = api.hero || {};

  const backgroundImageUrl = getImageUrl(import.meta.env.VITE_LOCAL_URL, hero.bgImage?.url);
  const backgroundIconUrl = getImageUrl(import.meta.env.VITE_LOCAL_URL, hero.heroImg?.url);

  return (
    <div className="overflow-hidden" id="hero">
      {loading ? (
        <Skeleton animation="pulse" className="pt-64" style={{ borderRadius: "20px" }} />
      ) : (
        <div
          key={hero.id}
          className="py-10 grid grid-cols-3 md:gap-4 sm:gap-y-8 w-full md:pt-8 relative mx-auto lg:-my-14 lg:pt-20 xl:-my-0 xl:pt-12 "
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundColor: `var(--${hero.bgColor})`,
          }}
        >
          <div className="max-w-[1240px] mx-auto col-span-3 sm:col-span-2 text-gray-900 pt-6 sm:pt-0">
            <div className="sm:pt-8 px-8 sm:px-6 lg:py-20 lg:px-24">
              <div className="col-span-2 w-full">
                <h1 className="font-bold text-2xl my-1 lg:text-3xl">{hero.title}</h1>
                <div className="pt-5 lg:text-lg">
                  <p>{hero.content}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:inline-block ">
            <img
              src={backgroundIconUrl}
              alt="Author Image"
              className="object-scale-down h-60 mx-auto lg:h-64 xl:h-[20em] rounded-lg"
              style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBlog;
