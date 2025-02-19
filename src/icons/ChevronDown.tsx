interface ChevronDownProps {
  width?: string;
  height?: string;
  className?: string;
}

export const ChevronDown = ({ width, height, className }: ChevronDownProps) => {
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
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
