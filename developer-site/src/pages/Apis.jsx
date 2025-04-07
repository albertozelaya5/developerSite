import { ApiFilter, HeroSection } from "@/components/sections";
import { useFetchStrapi } from "@/hooks/useFetch";

export const Apis = () => {
  let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/apis`);
  if (loading) return <p>Cargando ...</p>;
  if (error) return <p>No se pudo cargar la data</p>;

  return (
    <>
      <HeroSection contentPage={data ? data.data.components : []} />
      <ApiFilter contentPage={data ? data.data.components : []} />
    </>
  );
};
