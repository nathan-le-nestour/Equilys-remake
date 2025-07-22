interface RadioGroupProps {
  option1: string;
  option2: string;
  name: string;
}

export default function RadioGroup({
  option1,
  option2,
  name,
}: RadioGroupProps) {
  return (
    <>
      <div className="">
        <input type="radio" name={name} className="mr-2" />
        <label htmlFor={name}>{option1}</label>
      </div>
      <div className="mb-5">
        <input type="radio" name={name} className="mr-2" />
        <label htmlFor={name}>{option2}</label>
      </div>
    </>
  );
}
