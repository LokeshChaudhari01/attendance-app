// import { useData } from "../hooks/useData";
import Card from "./Card";
import { useSubjects } from "../hooks/useAllData";
import Spinner from "./Spinner";

function Main() {
  const { isLoading, data: dataObj } = useSubjects();
  
  if (isLoading) return <Spinner /> ;

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {dataObj.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Main;

