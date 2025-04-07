import { Button } from "@/components/ui/button";

export const ContactUs = () => {
  const scrollToBlogs = () => {
    const blogsSection = document.getElementById("blogs");
    blogsSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full pt-12">
      <div className="max-w-[1240px] mx-auto px-4 mb-4 xl:px-20 lg:px-12 md:px-8">
        <h1>¿Tienes una pregunta?</h1>
        <Button
          className="md:block hover:bg-[#A32035] bg-RED_DARK border border-RED_LIGHT hover:bg-transparent hover:text-RED_LIGHT transition ease-out duration-200 text"
          onClick={scrollToBlogs}
        >
          Contáctanos
        </Button>
      </div>
    </div>
  );
};
