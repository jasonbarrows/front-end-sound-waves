"use client";

import { GiSoundWaves } from "react-icons/gi";
import { PiWaves } from "react-icons/pi";

import Link from "next/link";
import { UserContent, UserContext } from "@/app/context";

import { Fragment, useState, useContext, useEffect, useRef } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "Jason's Tailwind Masterclass",
    description: "Hot hacks to put some sizzle in your styling",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Adam's Tales of Wizardry",
    description: "The art, skill, or accomplishments of a wizard",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Valentina - Mother of Dragons",
    description: "All things Olaf",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Big C for Cannibalism",
    description: "...",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Marija's 50 Shades of Pink",
    description: "For adults only",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Example() {
  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContent;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/waves" className="-m-1.5 p-1.5">
            <span className="sr-only">SoundWaves</span>
            <GiSoundWaves className="h-8 w-8" />
          </Link>
        </div>
        <div>
          <Link href="/waves">
            <p className="text-2xl text-violet-900">
              <span className="font-extralight">Sound</span>
              <span className="font-semibold">Waves</span>
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <PiWaves className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/waves"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            The Ocean
          </Link>
          <Link
            href="/boards"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Boards
          </Link>
          <Link
            href="/waves/new"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Make a Wave
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <span className="text-sm font-semibold leading-6 text-gray-900">
              Logged in as {currentUser?.username}
            </span>
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-sky-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/waves"
              className="-m-1.5 p-1.5"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">SoundWaves</span>
              <GiSoundWaves className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/waves"
                  className="-mx-3 text-center block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  The Ocean
                </Link>
                <Link
                  href="/boards"
                  className="-mx-3 text-center block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  View Boards
                </Link>
                <Link
                  href="/waves/new"
                  className="-mx-3 text-center block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Make a Wave
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 text-center block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Change User
                </Link>
                <span className="-mx-3 text-center block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Aloha, {currentUser?.username}
                </span>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
