import Navbar from "../../../components/navbar";
import PantsList from "../../../components/pantsProducts";
import Footer from "../../../components/footer";

export default function Pants() {
  return (
    <div>
      <div className="w-screen">
        <Navbar path={"pant"} />
      </div>
      <div className="relative">
        <img className="w-full h-auto" src="/shirt-topic.png"></img>
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mt-12 md:mt-20 lg:mt-24 xl:mt-32 ml-20 md:ml-24 lg:ml-50 xl:ml-64">
          PANTS
        </div>
        <div className="bg-white px-8 py-12">
          <PantsList />
        </div>
        <div className="bottom-0 w-full mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}