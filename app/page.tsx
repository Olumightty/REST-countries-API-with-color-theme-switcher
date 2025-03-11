import Image from "next/image";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

export default function HomePage() {
  return ( 
    <div className="bg-gray-50 h-full p-20">
      <div className="flex items-center justify-between">
        <SearchBar/>
        <Filter/>
      </div>
      
      
    </div>
  );
}
