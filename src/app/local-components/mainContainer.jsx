

import FormComponent from "./formComponent";

const MainContainer = () => {
  return (
    <div className="grid place-items-center">
      <div className="text-center mt:10 md:mt-20 mb-6">
        <h2 className="text-[1.4rem] md:text-[2.5rem] font-bold p-2">
          Taste the <span className="text-blue-500">feeling</span>
        </h2>
        <p className="p-2">
          Connect and upload excel sheet to your database table for free
        </p>
      </div>
      <div className="flex justify-center">
        <FormComponent />
      </div>
    </div>
  );
};
export default MainContainer;



