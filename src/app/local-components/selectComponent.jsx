import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
  } from "@/components/ui/select";
  
 
 
  const selectData = [
    "MySql server",
    "Amazon server",
    "MongoDB server",
    "Google Cloud server",
  ];
   
 const SelectElement = () => {
    return (
      <Select className="w-[100%] border-zinc-100">
        <SelectTrigger className="w-[100%]">
          <SelectValue placeholder="Select database" />
          <SelectContent className="bg-white">
           <SelectGroup>
           <SelectLabel>Servers</SelectLabel>
            {selectData.map((value) => (
              <SelectItem key={value} className="p-2" value={value}>{value}</SelectItem>
            ))}
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
        <SelectContent></SelectContent>
      </Select>
    );
  };
  
  export default SelectElement;