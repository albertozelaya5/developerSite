import { ThemeProvider } from "@/components/themeProvider";

const NotFound = () => {
  return (
    <ThemeProvider>
      <div className="py-20 md:py-48 lg:py-20">
        <div className="px-8 sm:px-6 pt-10 lg:pt-0 lg:mt-20 lg:px-40 xl:px-52">
          <h3 className=" text-2xl my-1 lg:text-5xl font-semibold">Uy! ocurrió un error...</h3>
          <div className="pt-6 sm:pt-2 lg:text-lg">
            <p className="">Lo sentimos, pero la página solicitada no existe.</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFound;