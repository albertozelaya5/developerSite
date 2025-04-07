import { Feature } from "./Feature";

export const Features = ({ contentPage }) => {
  /* UBICAR LOS CARDS DE LANDING */


  /* PRIMERO SE UBICA EL ARRAY DENTRO DEL ARREAY DE COMPONENTS EL ".--component" ES EL TITLE */
  const landingComponent = contentPage.find((item) => item.__component === "landing.landing-repeatable");


  const cards = landingComponent? landingComponent.landingCard: [];

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-1 py-2 px-4 space-y-1 sm:space-y-0 sm:space-x-1 lg:space-x-2 xl:px-20 lg:px-12 md:px-8 xl:text-justify lg:text-justify md:text-justify">
      {cards.map((card, item) => (
        <Feature key={card.id} item={item} card={card}/>
      ))}
    </section>
  );
};

