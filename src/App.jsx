import All from "./All";

const App = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-[#eaeaea] w-[98.5%] h-[90vh] mt-13 rounded-2xl  overflow-y-auto scroll-smooth hide-scrollbar">
        <All />
      </div>
    </div>
  );
};

export default App;
