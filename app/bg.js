import Header from "./components/header/Header";
import { fetchBGSlides } from "@/utils/apiRequests";

const Page = async () => {
  const movies = await fetchBGSlides();

  return (
    <div>
      <Header BGSlides={movies} />
    </div>
  );
};

export default Page;
