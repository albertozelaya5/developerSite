import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export const HeroSection = ({ contentPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (!Array.isArray(contentPage)) {
    console.error("Expected contentPage to be an array, but got:", contentPage);
    return <p>Invalid content data.</p>;
  }

  const heroComponent = contentPage.find((item) => item.__component === "components.hero");
  if (!heroComponent) {
    return <p>Hero component not found.</p>;
  }

  const backgroundImageUrl = getImageUrl(import.meta.env.VITE_LOCAL_URL, heroComponent.bgImage?.url);
  const heroImageUrl = heroComponent.heroImg?.url
    ? getImageUrl(import.meta.env.VITE_LOCAL_URL, heroComponent.heroImg?.url)
    : undefined;
  const backgroundColor = `var(--${heroComponent.bgColor})` || "#A41F35";

  return (
    <div key={heroComponent.id} className="">
      {loading ? (
        <Skeleton animation="pulse" className="pt-64" style={{ borderRadius: "20px" }} />
      ) : (
        <div className="overflow-hidden" id="hero">
          <div
            className="pt-16 py-8 grid grid-cols-3 md:gap-4 sm:gap-y-8 w-full relative mx-auto  lg:-my-14 lg:pt-20 xl:-my-0 xl:pt-14"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundColor,
            }}
          >
            <div className="max-w-[1240px] mx-auto col-span-3 sm:col-span-2 text-gray-900 pt-6 sm:pt-0">
              <div className="sm:pt-8 px-8 sm:px-6 lg:py-20 lg:px-24">
                <div className="col-span-2 w-full">
                  <h1 className="font-bold text-2xl my-1 lg:text-3xl capitalize">{heroComponent.title}</h1>
                  <div className="pt-5 lg:text-lg">{heroComponent.content}</div>
                </div>
              </div>
            </div>
            {heroImageUrl && (
              <div className="hidden sm:inline-block">
                <img
                  src={heroImageUrl}
                  loading="lazy"
                  className="object-scale-down h-60 mx-auto lg:h-64 xl:h-[20em] rounded-lg"
                  style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
