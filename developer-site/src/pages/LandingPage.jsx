import { useSelector } from "react-redux";
import { ThemeProvider } from "@/components/themeProvider";
import { Features, Hero } from "@/components/landing";
import { Reader } from "@/components/reader";
import { useFetchStrapi } from "@/hooks/useFetch";

export const LandingPage = () => {
  const { status } = useSelector((state) => state.auth);

  let { loading, data, error } = useFetchStrapi(`${import.meta.env.VITE_LOCAL_URL}/api/page/landing`);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>No se pudo cargar la data</p>;

  return (
    <ThemeProvider>
      <div className="flex flex-col">
        <main>
          <Hero />
          <Reader />
          {status === "authenticated" ? (
          <Reader /> // Se muestra cuando el usuario está autenticado
          ) : (
            "" // Mensaje alternativo cuando no está autenticado
          )}
          <Features contentPage={data ? data.data.components : []} />
        </main>
      </div>
    </ThemeProvider>
  );
};
