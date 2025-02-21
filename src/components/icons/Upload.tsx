interface UploadProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Upload = ({ width, height, className }: UploadProps) => {
  return (
    <svg
      className={className || ""}
      width={width || 15}
      height={height || 14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1H1M11.8333 7.66667L7.5 3.66667M7.5 3.66667L3.16667 7.66667M7.5 3.66667V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
