import NewDummyCard from "./NewDummyCard";
const SmileForNeuroDiversity = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>

        <div className="min-h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10 px-6">
            {/* Text Content */}
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
                Don't just <br className="hidden sm:block lg:hidden" /> take our
                word for it...
              </h2>
              <p className="mt-4 text-gray-300">
                These are some of the things our customers are saying
              </p>
            </div>

            <div>
              <NewDummyCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmileForNeuroDiversity;
