"use client";

import { CarCard, Hero, SearchBar, ZCFilter } from "@components";
import ShowMore from "@components/ShowMore";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const carResponse = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setCars(carResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCars();
  }, [manufacturer, year, limit, fuel, model]);

  const isEmpty = !Array.isArray(cars) || cars?.length < 1 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="pt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore Cars You Might Like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <ZCFilter title="fuel" options={fuels} setFilter={setFuel} />
            <ZCFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {cars?.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div>
                <Image src="/loader.svg" alt="loader" height={20} width={20} />
              </div>
            )}
            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > cars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops No Cars </h2>
          </div>
        )}
      </div>
    </main>
  );
}
