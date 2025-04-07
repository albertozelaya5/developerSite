import { Logo } from ".";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { storeLinks } from "@/temp/heroData";
import { IoIosArrowUp } from "react-icons/io";
export const FooterApi = () => {
  const scrollToBegin = () => {
    const begin = document.getElementById("header");
    begin.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center space-x-3">
        <p className="">Regresar al inicio</p>
        <div onClick={scrollToBegin} className="cursor-pointer">
          <IoIosArrowUp
            className="border-neutral-200 bg-neutral-100 rounded-t-lg dark:bg-[#333333] dark:border-[#1F1F1F]"
            size="26px"
          />
        </div>
      </div>
      <footer className="border-t-[1px] border-neutral-200 bg-neutral-100 dark:bg-[#333333] dark:border-[#1F1F1F] text-[#737373] dark:text-inherit">
        <div className="px-5 xl:my-20">
          <div className=" xl:grid xl:grid-cols-6 xl:items-center xl:justify-center sm:p-10">
            <div className="xl:grid xl:col-span-2 xl:grid-rows-1 lg:ms-12">
              <div
                className="xl:flex xl:w-full xl:flex-col xl:space-y-2 text-neutral-500/90 dark:text-inherit lg:relative"
                id="Iconos"
              >
                <div className="my-6 flex flex-col  xl:absolute xl:-top-28 sm:-ml-2 md:-ml-0">
                  <Logo className="" />
                  <SocialList />
                </div>
              </div>
            </div>
            <FooterList />
          </div>
          <div className=" items-center my-10 sm:ms-10 xl:mx-0 lg:flex lg:justify-between">
            <StoresLinks />
            <div className=" -mt-4 text-sm sm:text-base lg:static lg:order-first xl:order">
              <div className="">
                <p className="xl:ms-12 pt-4">© 2024 Banco Hondureño del Café S.A.</p>
              </div>
            </div>
          </div>
        </div>
        <FooterSub />
      </footer>
    </div>
  );
};

export const FooterList = () => {
  return (
    <div className="xl:grid xl:col-span-4 md:grid md:grid-cols-3 xl:grid-cols-3 text-sm sm:text-base sm:flex sm:flex-wrap sm:-mt-4 md:-mt-6 xl:-pt-20">
      <ul className="my-9 sm:my-6 sm:pe-10 md:px-2">
        <li className="mb-2 font-bold">Sobre BANHCAFE</li>
        <div>
          <a href="https://www.banhcafe.hn/sobre-nosotros">
            <li className="leading-[1.7rem] hover:underline cursor-pointer">Nuestra historia</li>
          </a>
          <a href="https://www.banhcafe.hn/sobre-nosotros?tab=4#fundacion-banhcafe">
            <li className="leading-[1.7rem] hover:underline cursor-pointer">Fundación BANHCAFE</li>
          </a>
          <a href="https://www.banhcafe.hn/sobre-nosotros?tab=3#estados-financieros">
            <li className="leading-[1.7rem] hover:underline cursor-pointer">Estados Financieros y balance general</li>
          </a>
          <a href="https://www.banhcafe.hn/sobre-nosotros?tab=2#valores">
            <li className="leading-[1.7rem] hover:underline cursor-pointer">Valores</li>
          </a>
        </div>
      </ul>
      <ul className="my-9 sm:my-6 sm:pe-10 md:px-2">
        <li className="mb-2 font-bold">Ayuda y apoyo</li>
        <a href="https://www.banhcafe.hn/">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Página principal</li>
        </a>
        <Link to={`/aboutus`}>
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Preguntas sobre nuestras APIs</li>
        </Link>
        <a href="https://www.banhcafe.hn/usuario-financiero/educacion-financiera">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Educación financiera</li>
        </a>
        <a href="https://www.banhcafe.hn/contactenos?tab=4#atms">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Encuentre su agencia</li>
        </a>
      </ul>
      <ul className="my-9 sm:my-6 sm:pe-10 md:px-2">
        <li className="mb-2 font-bold">Usuario financiero</li>
        <a href="https://www.banhcafe.hn/usuario-financiero/cnbs">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Comisión nacional de bancos y seguros</li>
        </a>
        <a href="https://www.banhcafe.hn/usuario-financiero/derechos-obligaciones-de-los-usuarios">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Derechos y obligaciones</li>
        </a>
        <a href="https://www.banhcafe.hn/usuario-financiero/fosede">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Fondo de seguro de depósito (FOSEDE)</li>
        </a>
        <a href="https://www.banhcafe.hn/usuario-financiero/tabla-de-comisiones">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Tabla de comisiones</li>
        </a>
        <a href="https://www.banhcafe.hn/usuario-financiero/formularios-y-contratos">
          <li className="leading-[1.7rem] hover:underline cursor-pointer">Formularios y contratos</li>
        </a>
      </ul>
    </div>
  );
};

export const FooterSub = () => {
  return (
    <div
      className="bg-home-background background-texture bg-primary bg-cover p-[1rem] text-white bg-blend-multiply"
      style={{ backgroundImage: `url(https://www.banhcafe.hn/background.webp)`, backgroundSize: `cover` }}
    >
      <div className="grid grid-cols-4 text-center gap-1 sm:gap-4 text-xs sm:text-sm divide-x divide-white justify-items-stretch h-full sm:flex sm:justify-center">
        <Link href="#" className="hover:underline h-full flex items-center">
          <p className="mx-auto sm:ms-3">Términos & Condiciones</p>
        </Link>

        <Link href="#" className="hover:underline h-full flex items-center">
          <p className="mx-auto sm:ms-3">Reclamos y canales de atención</p>
        </Link>

        <Link href="#" className="hover:underline h-full flex items-center">
          <p className="mx-auto sm:ms-3">Privacidad</p>
        </Link>

        <Link href="#" className="hover:underline h-full flex items-center">
          <p className="mx-auto sm:ms-3 ">Cookies</p>
        </Link>
      </div>
    </div>
  );
};

export function SocialList() {
  return (
    <div className="ms-5 flex mx-auto items-center justify-center gap-1">
      <div className="flex rounded-lg border-[1px] p-2 -mt-20 hover:bg-gray-300 transition duration-200 ease-in-out dark:hover:bg-slate-600">
        <a href="https://twitter.com/Banhcafe_HN">
          <FaTwitter icon="twitter" />
        </a>
      </div>
      <div className="flex rounded-lg border-[1px] p-2 -mt-20 hover:bg-gray-300 transition duration-200 ease-in-out dark:hover:bg-slate-600">
        <a href="https://www.facebook.com/banhcafe">
          <FaFacebookF icon="facebook" className="" />
        </a>
      </div>
      <div className="flex rounded-lg border-[1px] p-2 -mt-20 hover:bg-gray-300 transition duration-200 ease-in-out dark:hover:bg-slate-600">
        <a href="https://hn.linkedin.com/company/banhcafe">
          <FaLinkedinIn icon="linkedin" />
        </a>
      </div>
      <div className="flex rounded-lg border-[1px] p-2 -mt-20 hover:bg-gray-300 transition duration-200 ease-in-out dark:hover:bg-slate-600">
        <a href="https://www.instagram.com/banhcafe">
          <FaInstagram icon="instagram" />
        </a>
      </div>
    </div>
  );
}

export function StoresLinks() {
  return (
    <div className="sm:gap-5 -ms-2 md:-mt-8  lg:static lg:flex lg:justify-between">
      <div className="flex p-2 space-x-1  md:space-x-3 md:p-1 lg:p-0">
        <a
          href="https://apps.apple.com/us/app/banhcafe-online/id6449547967"
          className="flex space-x-1 w-[8rem] md:space-x-3 md:p-1 lg:p-0"
        >
          <img src={storeLinks.apple} className=" h-full my-auto" loading="lazy" />
        </a>
        <a
          href="https://appgallery.huawei.com/app/C108478085"
          className="flex space-x-1 w-[8rem] md:space-x-3 md:p-1 lg:p-0"
        >
          <img src={storeLinks.appGalery} className=" h-full object-contain" loading="lazy" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.jmacbhc.BANHCAFEMobileApp&pli=1"
          className="flex space-x-1 w-[8rem] md:space-x-3 md:p-1 lg:p-0"
        >
          <img src={storeLinks.googlePlay} className=" h-full object-contain" loading="lazy" />
        </a>
      </div>
    </div>
  );
}
