import Image from "next/image";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import CountryCardsWrapper from "./components/CountryCardsWrapper";
import { Suspense } from "react";

export default async function HomePage({searchParams}:{searchParams: Promise<{name: string, filter: string}>}) {
  const {name, filter} = await searchParams

  return ( 
    <div className=" h-[100%] p-20 pt-10">
      <div className="flex flex-wrap items-center justify-between">
        <SearchBar/>
        <Filter/>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <CountryCardsWrapper name={name} filter={filter}/>
      </Suspense>
      
      
      
    </div>
  );
}
