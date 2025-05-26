import Buttons from "@/components/Buttons";
import Data from "@/components/Grid";


export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <div className="flex-grow">
        <Data/>
      </div>
    </div>
  );
}
