interface PlusProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Plus = ({ width, height, className }: PlusProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99992 3.33333C10.4602 3.33333 10.8333 3.70642 10.8333 4.16666V15.8333C10.8333 16.2936 10.4602 16.6667 9.99992 16.6667C9.53968 16.6667 9.16658 16.2936 9.16658 15.8333V4.16666C9.16658 3.70642 9.53968 3.33333 9.99992 3.33333Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33325 9.99999C3.33325 9.53976 3.70635 9.16666 4.16659 9.16666H15.8333C16.2935 9.16666 16.6666 9.53976 16.6666 9.99999C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333H4.16659C3.70635 10.8333 3.33325 10.4602 3.33325 9.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};
