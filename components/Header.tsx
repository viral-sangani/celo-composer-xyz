import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideConnectBtn, setHideConnectBtn] = useState(false);

  const router = useRouter();

  const { connectModalOpen, openConnectModal } = useConnectModal();

  useEffect(() => {
    if (window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
    }
  }, [connectModalOpen]);

  return (
    <>
      <Disclosure as="nav" className="bg-prosperity border-b border-black">
        {({ open, close }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="md:lex flex-shrink-0 items-center hidden">
                    <Image
                      className="block h-8 w-auto sm:block lg:block"
                      src="/logo.svg"
                      width="24"
                      height="24"
                      alt="Celo Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      href="/"
                      className={`inline-flex items-center ${
                        router.pathname === "/" && "border-b-2 border-black"
                      } px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      Home
                    </Link>
                    {/* <Link
                      href="/social-connect"
                      className={`inline-flex items-center ${
                        router.pathname === "/social-connect" &&
                        "border-b-2 border-black"
                      } px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      SocialConnect
                    </Link> */}
                    <Link
                      href="/minipay"
                      className={`inline-flex items-center ${
                        router.pathname === "/minipay" &&
                        "border-b-2 border-black"
                      } px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      MiniPay
                    </Link>
                    <Link
                      href="/valora"
                      className={`inline-flex items-center ${
                        router.pathname === "/valora" &&
                        "border-b-2 border-black"
                      } px-1 pt-1 text-sm font-medium text-gray-900`}
                    >
                      Valora
                    </Link>
                  </div>
                </div>
                <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!hideConnectBtn && (
                    <ConnectButton
                      showBalance={{ smallScreen: false, largeScreen: true }}
                      chainStatus={{ smallScreen: "none", largeScreen: "icon" }}
                    />
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 flex flex-col px-5 space-y-4 text-base">
                <div>
                  <Link
                    href="/"
                    className={`inline-flex items-center ${
                      router.pathname === "/" && "border-b-4 border-black"
                    } px-1 pt-1 font-medium text-gray-900`}
                  >
                    Home
                  </Link>
                </div>
                {/* <div>
                  <Link
                    href="/social-connect"
                    className={`inline-flex items-center ${
                      router.pathname === "/social-connect" &&
                      "border-b-4 border-black"
                    } px-1 pt-1 font-medium text-gray-900`}
                  >
                    SocialConnect
                  </Link>
                </div> */}
                <div>
                  <Link
                    href="/minipay"
                    className={`inline-flex items-center ${
                      router.pathname === "/minipay" &&
                      "border-b-4 border-black"
                    } px-1 pt-1 font-medium text-gray-900`}
                  >
                    MiniPay
                  </Link>
                </div>
                <div>
                  <Link
                    href="/valora"
                    className={`inline-flex items-center ${
                      router.pathname === "/valora" && "border-b-4 border-black"
                    } px-1 pt-1 font-medium text-gray-900`}
                  >
                    Valora
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }
