// TitleHandler.js
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { componentsMapping } from "@/components/componentMap/componentsMapping";

export const TitleHandler = ({blogs}) => {
  const { title } = useParams();

  const Component = componentsMapping[title];
  if (Component) {
    return <Component />;
  } else {
      return <NotFound/>
  }
};
