interface ChevronupProps {
  width?: string;
  height?: string;
  className?: string;
}

export const ChevronUp = ({ width, height, className }: ChevronupProps) => {
  return (
    <svg
      className={className || ""}
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12.5L10 7.5L5 12.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
