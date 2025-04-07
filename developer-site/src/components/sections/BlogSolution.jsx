import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { Card } from "../ui/card";

const BlogSolution = ({ contentPage }) => {
  const solutionComponent = contentPage.find((item) => item.__component === "solutions.solution-card-repeatable");
  const cards = solutionComponent ? solutionComponent.cardSolution : [];

  const [loading, setLoading] = useState(true);

  //* Time out para Skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full md:mt-4 lg:pt-12 mb-4 !scroll-smooth" id="blogs">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 xl:gap-4 px-4 h-full xl:px-10 lg:px-12 md:px-8 relative">
          {cards.map((card) => {
            const idApi = card ? card.api : [];
            const cardImg = getImageUrl(import.meta.env.VITE_LOCAL_URL, card.cardImg?.url);
            const logo = getImageUrl(import.meta.env.VITE_LOCAL_URL, card.logo?.url);
            return (
              <Link to={`/solutions/${idApi.id}`} key={card.id}>
                {loading ? (
                  <Skeleton
                    className="w-full md:min-h-[420px] lg:min-h-[420px] lg:max-h-[430px] xl:min-h-[420px]"
                    animation="wave"
                    style={{ borderRadius: "20px" }}
                  />
                ) : (
                  <div key={card.id}>
                    <div className="-left-4 -top-4 z-10 overflow-visible relative">
                      <img src={logo} alt="icono" className="w-9 absolute fill-current" loading="lazy" />
                    </div>
                    <Card key={card.id}>
                      <div className="w-full rounded-xl border bg-card text-card-foreground md:min-h-[420px] lg:min-h-[420px] lg:max-h-[430px] lg:relative xl:min-h-[420px] md:relative">
                        <div
                          className={`overflow-hidden bg-cover bg-no-repeat `}
                          // style={{ backgroundImage: `var(--banhcoffee)` }}
                        >
                          <ProgressiveImage src={cardImg} alt={card.title} />
                        </div>
                        <div className="mx-6 my-2 divide-y-2 divide-gray-400">
                          <h3 className="font-semibold text-2xl my-1 text-card-foreground md:text-lg xl:text-2xl">
                            {card.title}
                          </h3>
                          <p className="md:text-base pt-4 line-clamp-3">{card.descCard}</p>
                        </div>
                        <div
                          className={`w-full md:block py-3  text-white overflow-hidden rounded-b-lg px-6 font-semibold md:absolute lg:absolute bottom-0`}
                          style={{ backgroundColor: `var(--${card.buttonColor})` }}
                        >
                          <div
                            href=""
                            className="md:px-0  capitalize transition ease-in duration-150 hover:underline hover:underline-offset-2"
                          >
                            Deseo saber más
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProgressiveImage = ({ src, alt }) => {
  //* Estilo base para la imagen
  const baseStyle = {
    // transition: "transform 200ms ease-in-out",
    // transform: hover ? "scale(1.1)" : "scale(1)", // Aplica escala en hover
    opacity: 0.85, // Opacidad inicial
  };
  return (
    <LazyLoad
      height={224}
      offset={50}
      once
      placeholder={<Skeleton animation="wave" height={224} style={{ borderRadius: "20px" }} />}
    >
      <img
        src={src} // La imagen de alta resolución
        alt={alt}
        loading="lazy"
        className="h-56 w-full object-cover overflow-hidden"
        // onMouseEnter={() => setHover(true)} // Establece hover a true
        // onMouseLeave={() => setHover(false)} // Establece hover a false
        style={baseStyle} // Aplica el estilo
      />
    </LazyLoad>
  );
};

export const BlogSolutionMemo = React.memo(BlogSolution);
