interface PlusProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Plus = ({ width, height, className }: PlusProps) => {
  return (
    <svg
      className={className || ""}
      width={width || 14}
      height={height || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99992 0.333328C7.46016 0.333328 7.83325 0.706424 7.83325 1.16666V12.8333C7.83325 13.2936 7.46016 13.6667 6.99992 13.6667C6.53968 13.6667 6.16658 13.2936 6.16658 12.8333V1.16666C6.16658 0.706424 6.53968 0.333328 6.99992 0.333328Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.333252 6.99999C0.333252 6.53976 0.706348 6.16666 1.16659 6.16666H12.8333C13.2935 6.16666 13.6666 6.53976 13.6666 6.99999C13.6666 7.46023 13.2935 7.83333 12.8333 7.83333H1.16659C0.706348 7.83333 0.333252 7.46023 0.333252 6.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};
