interface UploadProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Upload = ({ width, height, className }: UploadProps) => {
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
        d="M17.5 2.5H2.5M15 10.8333L10 5.83333M10 5.83333L5 10.8333M10 5.83333V17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
