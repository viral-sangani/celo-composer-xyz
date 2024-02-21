type Props = {
  title: string;
  onClick: () => void;
  widthFull?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

function MinipayButton({
  title,
  onClick,
  widthFull = false,
  disabled,
  loading,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled ?? loading}
      className={`${
        widthFull ? "w-full" : "px-4"
      } ${className} font-bold bg-minipaySecondary rounded-2xl text-white py-3 flex justify-center items-center px-2`}
    >
      {loading ? <>Loading...</> : title}
    </button>
  );
}

export default MinipayButton;
