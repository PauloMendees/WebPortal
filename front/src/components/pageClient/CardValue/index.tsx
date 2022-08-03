import { useQueryClient } from "@tanstack/react-query";
import { H1 } from "../../shared/Texts";
import useCardValue from "./hooks/useCardValue";

type CardValuesProps = {
  value: number | undefined;
  label: string;
};

export function CardValue(props: CardValuesProps) {
  const { getColorLabel } = useCardValue();
  const queryClient = useQueryClient();

  return (
    <div className="flex flex-col justify-between bg-grayscale-900 rounded-xl p-5 w-[150px] h-[180px]">
      <div className="flex flex-col gap-3">
        <span className={`${getColorLabel(props.label)}`}>
          {props.label + " - U$"}
        </span>
        <H1>{props.value}</H1>
      </div>
      <button
        className={`${getColorLabel(
          props.label
        )} hover:opacity-70 duration-200`}
        onClick={() => {
          switch (props.label) {
            case "Max":
              queryClient.invalidateQueries(["dolarMax"]);
              break;

            case "Media":
              queryClient.invalidateQueries(["dolarMedia"]);
              break;

            case "Min":
              queryClient.invalidateQueries(["dolarMin"]);
              break;
            default:
              break;
          }
        }}
      >
        {`Atualizar`}
      </button>
    </div>
  );
}
