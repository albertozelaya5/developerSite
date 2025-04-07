import { useParams } from "react-router-dom";
import { getImageUrl } from "@/hooks";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

const BlogContent = ({ contentPage }) => {
  const [loading, setLoading] = useState(true);
  /* Time out para Skeleton */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();
  // const heroComponent = contentPage.find((item) => item.__component === "solutions.solution-card-repeatable");

  // Encuentra la API específica basándose en el id de la URL
  const api = contentPage.find((item) => item?.id.toString() === id) || {};
  const cards = api ? api.cardGriadient : [];
  const backgroundImageUrl = getImageUrl(import.meta.env.VITE_LOCAL_URL, api.slideImg?.url);

  return (
    <>
      <div className="text-center py-4 md:py-8 lg:py-10 bg-BG_DARK dark:bg-card">
        <h3 className="tracking-wide text-xl font-semibold md:font-normal md:text-2xl md:my-1 lg:text-3xl px-1 md:px-0 ">
          Encuentre las APIs que su empresa necesita
        </h3>
      </div>
      {loading ? (
        <Skeleton animation="pulse" className="py-6 w-full lg:min-h-screen p-4 -mt-0 sm:min-h-[60vh]" />
      ) : (
        <div
          className="py-6 w-full sm:h-[60vh] md:min-h-[70vh] lg:h-[80vh] xl:h-screen p-4 flex text-white -mt-0 relative dark:grayscale"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <div className="mx-auto grid grid-cols-1 md:content-center md:grid-cols-2 gap-x-10 gap-y-10 xl:min-w-[1200px]">
            {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{api.content}</ReactMarkdown> */}
            {cards.map((card) => {
              return (
                <div
                  className="w-full rounded-xl md:min-h-[260px] lg:min-h-[300px] xl:max-h-[20px] sm:relative lg:relative backdrop-blur-lg lg:max-w-[380px] mx-auto bg-black/20 py-1 sm:py-0"
                  id={card.id}
                  key={card.id}
                >
                  <div className="mx-6 my-2 divide-y-2 divide-gray-400">
                    <h3 className="sm:text-xl sm:text-start font-semibold text-xl my-1 md:text-2xl xl:text-2xl text-center text-nowrap capitalize">
                      {card.title}
                    </h3>
                    <p className="sm:text-sm md:text-base pt-1 md:pt-2 lg:pt-4 line-clamp-4 lg:line-clamp-6 lg:text-lg">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="text-center py-4 md:py-8 lg:py-10 bg-BG_DARK dark:bg-card">
        <h3 className="tracking-wide text-xl font-semibold md:font-normal md:text-2xl md:my-1 lg:text-3xl px-1 md:px-0 ">
          ¿Tiene más preguntas?
        </h3>
      </div>
    </>
  );
};

export default BlogContent;
