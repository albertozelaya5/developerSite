export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2 px-4 flex items-center justify-center">
      <p className="mr-2">
        &copy; Derechos reservados a <span className="font-bold">BANHCAFE</span>
      </p>
      <p className="font-semibold">{year}</p>
    </footer>
  );
};