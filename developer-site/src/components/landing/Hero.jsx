import { data } from "@/temp/heroData";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

export const Hero = () => {
  const { title, description, imageUrl } = data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-full w-full py-4 px-4 flex flex-col lg:flex-row items-center gap-x-5 justify-center xl:px-20 lg:px-12 md:px-8">
      <div className="flex-1">
        {loading ? <Skeleton animation="pulse" className="rounded-md shadow-md lg:min-h-96 min-h-96 min-w-96"/> : <img loading="lazy" src={imageUrl} alt={title} className="rounded-md shadow-md" />}
      </div>
      <div className="max-w-lg h-full flex flex-[0.5] flex-col justify-center mt-5 md:max-md:mt-0">
        <h1 className="text-2xl md:text-4xl mb-10">{title}</h1>
        <p className="text-lg">{description}</p>
        <Link to={`/apis`}>
          <div className="flex place-content-center lg:flex-none lg:place-content-start">
            <Button
              type="button"
              className="mt-8 md:mt-12 lg:mt-12 hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text-white"
            >
              Más información
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};
