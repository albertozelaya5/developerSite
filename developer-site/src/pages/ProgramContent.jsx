import { ContactForm } from "@/components/contactUs";
import BlogContent from "@/components/programs/BlogContent";
import HeroBlog from "@/components/programs/HeroBlog";
import { ThemeProvider } from "@/components/themeProvider";
import { useFetchStrapi } from "@/hooks/useFetch";

export const ProgramContent = () => {
  let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/apis`);

  if (loading) return <p>Cargando ...</p>;
  if (error) return <p>No se pudo cargar la data</p>;

  // Extraer todas las APIs de los cards dentro del componente 'apis.card-repeatable'
  const apis =
    data?.data?.components
      .find((component) => component.__component === "apis.card-repeatable")
      ?.cards.map((card) => card.api) || [];

  return (
    <ThemeProvider>
      <HeroBlog contentPage={apis} />
      <BlogContent contentPage={apis} />
      {/* <BlogsSection /> */}
      <ContactForm />
    </ThemeProvider>
  );
};
