import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav, setShowNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      {/*Logo*/}
      <div className="flex justify-center mt-0 mb-1">
        <picture>
          <img
            className="p-4 w-16 h-16 rounded-full"
            src="/logo.jpeg"
            alt="company logo"
          />
        </picture>
        
        <div className="flex items-center py-2">          
            <p className="text-gray-700 text-3xl font-bold">Factory</p>
        </div>
      </div>

      <div className="flex flex-col">

        <Link href="/">
          <div
            className={`pl-2 py-2 mx-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <div className="mr-2">
              <HomeIcon
                className="h-5 w-5"
              />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>

        <Link href="/clients">
          <div
            className={`pl-2 py-2 mx-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Clientes</p>
            </div>
          </div>
        </Link>
        <Link href="/loans">
          <div
            className={`pl-2 py-2 mx-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Emprestimos</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
