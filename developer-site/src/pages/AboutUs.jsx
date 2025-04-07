import { BlogContentSection, HeroSection } from "@/components/sections";
import Accordeon from "@/components/sections/Accordeon";
import HeroForm from "@/components/sections/HeroForm";
import { useFetchStrapi } from "@/hooks/useFetch";

export const AboutUs = () => {

  /* CADENA DE CONEXION */
    let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/aboutus`);
    if (loading) return <p>Cargando ...</p>;
    if (error) return <p>No se pudo cargar la data</p>;

  return (
    <>
      <HeroSection contentPage={data ? data.data.components : []} />
      <BlogContentSection />
      <Accordeon contentPage={data ? data.data.components : []} />
      <HeroForm contentPage={data ? data.data.components : []} />
      {/* <BlogsSection contentPage={data ? data.data.components : []} /> */}
    </>
  );
}