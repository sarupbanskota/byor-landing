export { Navbar };

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { PrimaryButton } from "./PrimaryButton";
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const courses = [
  {
    name: "Build Your Own Redis",
    description:
      "Take your networking skills further, by dissecting how Redis works. ",
    href: "https://codecrafters.io/challenges/redis",
    icon: "logo/redis-half.png",
  },
  {
    name: "Build Your Own Docker",
    description: "Dive deep into how Docker works, including the Registry API.",
    href: "https://codecrafters.io/challenges/docker",
    icon: "logo/docker-half.png",
  },
  {
    name: "Build Your Own Git",
    description:
      "Master the inner workings of Git, and explain any complex scenario. ",
    href: "https://codecrafters.io/challenges/git",
    icon: "logo/git-half.png",
  },
  {
    name: "Build Your Own SQLite",
    description:
      "Gain a solid understanding of SQL’s file format and indexing.",
    href: "https://codecrafters.io/challenges/sqlite",
    icon: "logo/sqlite-half.png",
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Popover className="relative">
      <div className="flex justify-between md:justify-center items-center px-4 py-6 sm:px-6 md:space-x-10">
        <div className="flex justify-start self-start">
          <a href="/" className="flex">
            <span className="sr-only">CodeCrafters Logo</span>
            <img
              className="h-6 w-auto mr-2"
              src="/for/icons/CodeCrafters.png"
              alt=""
            />
            CodeCrafters
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="hidden md:flex items-center space-x-10"
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  )}
                >
                  <span>All Courses</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {courses.map((course) => (
                          <a
                            key={course.name}
                            href={course.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white sm:h-12 sm:w-12">
                              <img
                                src={course.icon}
                                alt="git icon"
                                className=" h-32 object-contain"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {course.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {course.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* <div className="p-5 bg-gray-50 sm:p-8">
                        <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-900">Enterprise</div>
                            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-blue-50 text-cyan-600">
                              New
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Empower your entire team with bulk licenses.
                          </p>
                        </a>
                      </div> */}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <a
            href="https://codecrafters.io/about"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="https://discord.com/invite/DeqUD2P"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Discord
          </a>

          {/* <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                  )}
                >
                  <span>More</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">{resource.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{resource.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover> */}
        </Popover.Group>
        {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <PrimaryButton text="Sign in" size="small" />
        </div> */}
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 ">
              <div className="flex items-center justify-between">
                <div>
                  <a href="/" className="flex">
                    <span className="sr-only">CodeCrafters Logo</span>
                    <img
                      className="h-6 w-auto mr-2"
                      src="/for/icons/CodeCrafters.png"
                      alt=""
                    />
                    CodeCrafters
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7 divide-y divide-gray-100">
                  {courses.map((course) => (
                    <a
                      key={course.name}
                      href={course.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 first:border-t border-gray-100"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                        <img
                          src={course.icon}
                          alt="git icon"
                          className="w-6 object-contain"
                        />
                      </div>
                      <div className="ml-3 text-base font-medium text-gray-900">
                        {course.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 overflow-hidden divide-solid divide-x divide-gray-100">
                <a
                  href="https://discord.gg/DeqUD2P"
                  className="py-6 px-5 text-base text-center font-medium text-gray-900 hover:text-gray-700 "
                >
                  Discord
                </a>

                <a
                  href="https://codecrafters.io/about"
                  className="py-6 px-5 text-base text-center font-medium text-gray-900 hover:text-gray-700 "
                >
                  About
                </a>

                {/* {resources.map((resource) => (
                  <a
                    key={resources.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))} */}
              </div>
              <div className="mt-6 text-center">
                {/* TODO: ADD W-FULL ON MOBILE FOR PRIMARYBUTTON, W-AUTO FROM MD: */}
                {/* <PrimaryButton text="Sign up" width="full" />
                <p className="mt-6  text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-cyan-600 hover:text-cyan-500">
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
