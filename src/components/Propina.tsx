import { PropinaOptions } from "../data/propinas";

type PropinaProps = {
  updatePropina: React.Dispatch<React.SetStateAction<number>>;
  propina: number;
};

const Propina = ({ updatePropina, propina }: PropinaProps) => {
  return (
    <div className="">
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {PropinaOptions.map((tipo) => (
          <div className="flex gap-2" key={tipo.id}>
            <label htmlFor={tipo.id}>{tipo.label}</label>
            <input
              id={tipo.id}
              type="radio"
              name="tip"
              value={tipo.value}
              onChange={(e) => updatePropina(+e.target.value)}
              checked={tipo.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Propina;
