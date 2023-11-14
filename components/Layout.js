import { useState, useEffect, Fragment } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Transition } from "@headlessui/react";

export default function Layout({ children }) {
  
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(true);

  function handleResize() {    
      if (innerWidth <= 768) {
         setShowNav(false);
         setIsMobile(true);
      } else {
         setShowNav(true);
         setIsMobile(false);
      }
  }

  useEffect(() => {
    
    // Adiciona o ouvinte de evento no momento da montagem do componente
    window.addEventListener("resize", handleResize);

    // Inicializa o estado no momento da montagem
    handleResize();

    // Remove o ouvinte de evento no momento da desmontagem do componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };


    // addEventListener("resize", handleResize);

    // if (typeof window != undefined) {
    //   addEventListener("resize", handleResize);
    // }

    // return () => {
    //   removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <>
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={isMobile ? showNav : false}  setShowNav={setShowNav} />        
        {/*<SideBar showNav={showNav} />*/}
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] 
            ${
               // showNav && !isMobile ? "pl-56" : ""
               showNav ? "pl-56" : ""
               // showNav ? "pl-56" : ""
            }
        `}
      >
        <div className="px-4 md:px-4">
            {children}
        </div>
      </main>
    </>
  );
}
