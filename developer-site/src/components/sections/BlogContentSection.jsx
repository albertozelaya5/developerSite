import { sectionBlogs } from "@/temp/heroData";
import { useParams } from "react-router-dom";

export const BlogContentSection = () => {
  const { title } = useParams();

  let blog = sectionBlogs?.filter((blog) => {
    return blog?.title === title;
  });

  blog = blog[0];
  return (
    <div key={blog?.id}>
      <div className="px-8 sm:px-6 lg:pt-0 mt-5 md:mt-10 lg:mt-20 lg:px-40 xl:px-52">
        <h3 className="tracking-wide text-2xl my-1 lg:text-3xl">
          {/* {blog?.label} */}
          Herramientas de Integración Bancaria
        </h3>
        <div className="pt-5 sm:pt-8 lg:text-lg">
          <p className="">
            {/* {blog?.content} */} Descubre cómo nuestras APIs pueden
            transformar tu negocio al ofrecerte acceso directo a servicios bancarios esenciales. Aprovecha nuestras
            soluciones seguras y eficientes para realizar transacciones, acceder a información financiera en tiempo real
            y mejorar la experiencia de tus clientes. Perfecto para desarrolladores que buscan innovar y optimizar
            procesos financieros a través de una integración fluida y confiable.
          </p>
          <p className="pt-10 sm:pt-8"></p>
        </div>
      </div>
    </div>
  );
};
