import { ChangeEvent } from "react";

interface inputTemplateType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  function FormInput({ label, placeholder, onChange }: inputTemplateType) {
    return (
      <div className="">
        <div className="my-1 text-base font-medium text-gray-700">
          <label className="">{label}</label>
        </div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-xl w-full p-2.5"
        />
      </div>
    );
  }


  export default FormInput