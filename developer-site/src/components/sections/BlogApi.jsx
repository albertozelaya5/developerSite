import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react"; 

const BlogApi = ({ contentPage, articles, filterCategory }) => {
  // const { id } = useParams();
  /* Time out para Skeleton */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const cards = articles;

  return (
    <div className="w-full pt-12 md:pt-10 lg:pt-14 xl:pt-24 mb-4 relative">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 ss:grid-cols-1 gap-8 px-4 h-full xl:px-20 lg:px-12 md:px-8">
          {cards.map((card) => {
            const logoUrl = getImageUrl(import.meta.env.VITE_LOCAL_URL, card.logo.url);
            return (
              <Link to={`/apis/${card.id - 1}`} key={card.id}>
                {loading ? (
                  <Skeleton
                    className="w-full border sm:min-h-[260px] md:min-h-[220px] lg:min-h-[300px] xl:min-h-[300px]"
                    animation="wave"
                    style={{ borderRadius: "20px" }} // Adjust the borderRadius to match your card's styling
                  />
                ) : (
                  <div>
                    <div className="-left-2 -top-4 z-10 overflow-visible relative lg:-left-3">
                      <img src={logoUrl} alt="Logo" className="w-9 absolute fill-current" loading="lazy" />
                    </div>
                    <Card className="">
                      <div className="w-full rounded-xl min-h-[200px] sm:min-h-[220px] border bg-card text-card-foreground md:min-h-[220px] lg:min-h-[300px] xl:min-h-[300px] sm:relative lg:relative">
                        <div className="mx-6 my-2 divide-y-2 divide-gray-400">
                          <h3 className="sm:text-xl sm:text-start font-semibold text-2xl my-1 text-card-foreground xl:text-2xl text-center text-nowrap">
                            {card.title}
                          </h3>
                          <p className="sm:text-sm md:text-base pt-4 line-clamp-4 lg:line-clamp-6">{card.descCard}</p>
                        </div>
                        <div
                          className={`sm:absolute sm:bottom-0 w-full md:block py-3  transition ease-out duration-200 text-white overflow-hidden rounded-b-lg px-6 font-semibold lg:absolute bottom-0`}
                          style={{ backgroundColor: `var(--${card.bgColor})` }}
                        >
                          <div className="hover:underline hover:underline-offset-2 capitalize underline underline-offset-2 md:px-0 text-card-foreground">
                            Acciones:
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

export const BlogApiMemo  = React.memo(BlogApi);
