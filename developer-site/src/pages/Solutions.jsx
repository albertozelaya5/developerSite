import { HeroSection, BlogContentSection, BlogSolutionMemo } from "@/components/sections";
import { useFetchStrapi } from "@/hooks/useFetch";

export const Solutions = () => {
  // const heroComponent = contentPage.find((item) => item.__component === "solutions.solution-card-repeatable");

  // const cards = heroComponent? heroComponent.cardSolution: [];

  let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/solutions`);
  if (loading) return <p>Cargando ...</p>;
  if (error) return <p>No se pudo cargar la data</p>;

  return (
    <>
      <HeroSection contentPage={data ? data.data.components : []} />
      <BlogContentSection contentPage={data ? data.data.components : []} />
      <BlogSolutionMemo contentPage={data ? data.data.components : []} />
      {/* <ContactUs /> */}
    </>
  );
};
