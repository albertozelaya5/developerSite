import { ContactForm } from "@/components/contactUs";
import { HeroSection } from "@/components/sections";
import { useFetchStrapi } from "@/hooks/useFetch";

const ContactUs = () => {
  /* CADENA DE CONEXION */
  let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/contactUs`);
  if (loading) return <p>Cargando ...</p>;
  if (error) return <p>No se pudo cargar la data</p>;
  return (
    <>
      <HeroSection contentPage={data ? data?.data?.components : []} />
      <ContactForm />
    </>
  );
};

export default ContactUs;
