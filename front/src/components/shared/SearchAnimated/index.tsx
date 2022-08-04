import { ReactElement } from "react";
import SearchIcon from "../../../assets/icons/Search";
import useSearchAnimated from "./hooks/useSearchAnimated";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isRequired?: boolean;
  onLeftIcon?: ReactElement;
  onRightIcon?: ReactElement;
  handleRightIconClick?: () => void;
  handleLeftIconClick?: () => void;
  label?: string;
  dataTestId?: string;
  className?: string;
};

export function SearchAnimated({
  className,
  dataTestId,
  handleLeftIconClick,
  handleRightIconClick,
  isRequired,
  label,
  onLeftIcon,
  onRightIcon,
  ...rest
}: InputProps) {
  const { handleSearch, handleSearchColor, openSearch, searchColor } =
    useSearchAnimated();

  return (
    <div
      className={`flex gap-2 items-center border-white rounded-2xl px-4 py-2 ${
        openSearch ? `border-[1px]` : ``
      } duration-200 `}
    >
      <button
        onClick={handleSearch}
        onPointerEnter={() => {
          handleSearchColor("#e708ee");
        }}
        onPointerLeave={() => {
          handleSearchColor("#fff");
        }}
      >
        <SearchIcon fill={searchColor} />
      </button>
      <input
        id="searchInput"
        className={`bg-transparent text-primary-white ${
          openSearch ? `w-[300px]` : `w-0`
        } duration-200 outline-none`}
        onChange={rest.onChange}
        value={rest.value}
      />
    </div>
  );
}
