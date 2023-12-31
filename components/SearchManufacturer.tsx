

import React, { Fragment, useState } from "react";
import { SearchManufacturerProps } from "@types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers = query
    ? manufacturers?.filter((item) =>
        item
          .toLocaleLowerCase()
          .replace("/s+/g", "")
          ?.includes(query?.toLocaleLowerCase().replace("/s+/g", ""))
      )
    : manufacturers;
  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="carLogo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
          ></Combobox.Input>

          <Transition
            as={Fragment}
            leave="transition ease-in duration 100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterEnter={() => setQuery("")}
          >
            <Combobox.Options>
              {!filteredManufacturers.length && query ? (
                <Combobox.Option
                  value={query}
                  className={"search-manufacturer__option"}
                >
                  Create {query}
                </Combobox.Option>
              ) : (
                filteredManufacturers?.map((item) => (
                  <Combobox.Option
                    value={item}
                    key={item}
                    className={({ active }) => `
                  relative search-manufacturer__option ${
                    active ? "bg-primary-blue" : "text-gray-900"
                  }`}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
