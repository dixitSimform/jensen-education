interface ChevronDownProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Search = ({ width, height, className }: ChevronDownProps) => {
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
        d="M9.80541 2.94002C6.01372 2.94002 2.93994 6.01379 2.93994 9.80548C2.93994 13.5972 6.01372 16.6709 9.80541 16.6709C13.5971 16.6709 16.6709 13.5972 16.6709 9.80548C16.6709 6.01379 13.5971 2.94002 9.80541 2.94002ZM1.68994 9.80548C1.68994 5.32344 5.32336 1.69002 9.80541 1.69002C14.2875 1.69002 17.9209 5.32344 17.9209 9.80548C17.9209 14.2875 14.2875 17.9209 9.80541 17.9209C5.32336 17.9209 1.68994 14.2875 1.68994 9.80548Z"
        fill="#092435"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5727 14.9629C14.8164 14.7185 15.2121 14.718 15.4565 14.9617L18.3932 17.8908C18.6376 18.1346 18.6381 18.5303 18.3944 18.7747C18.1506 19.0191 17.7549 19.0196 17.5105 18.7758L14.5738 15.8468C14.3294 15.603 14.3289 15.2073 14.5727 14.9629Z"
        fill="#092435"
      />
    </svg>
  );
};
