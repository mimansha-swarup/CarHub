import { Hero, SearchBar, ZCFilter } from "@components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="pt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore Cars You Might Like</p>
        </div>

        <div className="home__filters">
          <SearchBar/>
        <div className="home__filters-container">

          <ZCFilter title="fuel" />
          <ZCFilter  title="year" />
        </div>
        </div>
      </div>
    </main>
  );
}
