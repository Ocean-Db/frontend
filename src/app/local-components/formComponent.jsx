import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SelectElement from "./selectComponent";

const inputData = [
  "Hostname or IP adress",
  "Port number",
  "Database name",
  "Username",
  "Password",
];

const FormComponent = () => {
  return (
    <div className="mb-10 p-10 bg-slate-50">
      <div className="my-10">
        <div>
          <SelectElement />
        </div>
        {inputData.map((input) => (
          <Input
            className="p-2 my-2 rounded-[5px] border-zinc-200"
            type="text"
            placeholder={input}
          ></Input>
        ))}
        <div>
          <Input
            className="p-2 my-2 rounded-[5px] border-zinc-200"
            type="file"
            placeholder="Upload Excel/CSV file"
          />
        </div>
      </div>
      <div className="w-100">
        <Button className="bg-blue-500 text-white p-2 hover:bg-blue-400 w-[100%] rounded-[5px]">
          Commit
        </Button>
      </div>
    </div>
  );
};
export default FormComponent;
