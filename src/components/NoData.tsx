import { Stack } from "react-bootstrap";
import { NoDataFound } from "../icons/NoDataFound";

interface NoDataProps {
  title?: string;
  description?: string;
}

export const NoData = ({ title, description }: NoDataProps) => {
  const titleText = title || "No Data Found";
  const descriptionText =
    description ||
    "We're sorry, we could not find any data you are looking for, please try again later.";
  return (
    <Stack className="align-items-center">
      <NoDataFound />
      <h5 className="mb-2 text-uppercase">{titleText}</h5>
      <p className="text-sm">{descriptionText}</p>
    </Stack>
  );
};
