import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Accordeon = ({ contentPage }) => {
  const acordeonComponent = contentPage.find((item) => item.__component === "about-us.acordeon-repeat");

  const acordeons = acordeonComponent ? acordeonComponent.acordeon : [];
  return (
    <div>
      <div className="px-8 sm:px-6 mb-10 lg:py-0 lg:my-20 lg:px-40 xl:px-52">
        {acordeons.map((acordeon) => {
          return (
            <Accordion type="single" collapsible key={acordeon.id}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{acordeon.title}</AccordionTrigger>
                <AccordionContent>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{acordeon.desc}</ReactMarkdown>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
      <div className="text-center py-4 md:py-8 lg:py-10 bg-BG_DARK dark:bg-card">
        <h3 className="tracking-wide text-xl font-semibold md:font-normal md:text-2xl md:my-1 lg:text-3xl px-1 md:px-0 ">
          ¡Tome la mejor decisión!
        </h3>
      </div>
    </div>
  );
};

export default Accordeon;
