import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { iconComponents } from "@/hooks";

export const Feature = ({ card }) => {
  // const Icon = Icons[item.icon];

  // Declaración de la variable fuera del retorno del componente
  // const cardIcon = getImageUrl(import.meta.env.VITE_LOCAL_URL, card.icon?.url);

  /* React icons Dinamicamente */
  const Icon = iconComponents[card.iconComponent];

  return (
    <Card className="">
      <CardHeader>
        <div className="flex items-center gap-x-2">
          {/* Usar la variable cardIcon para la fuente de la imagen */}
          {Icon ? <Icon size={30} alt="icono" /> : <p>No icon found</p>} <CardTitle>{card.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <span className="text-justify text-foreground">{card.desc}</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};
