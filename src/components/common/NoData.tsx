import { Stack } from "react-bootstrap";
import { NoDataFound } from "../../icons/NoDataFound";
import { NoDataProps } from "../../types/common";



export const NoData = ({ title, description }: NoDataProps) => {
  const titleText = title || "No Data Found";
  const descriptionText =
    description ||
    "We're sorry, we could not find any data you are looking for, please try again later.";
  return (
    <Stack className="align-items-center py-lg-5 py-4 my-xl-4 text-center">
      <NoDataFound />
      <h5 className="mb-2 text-uppercase">{titleText}</h5>
      <p className="text-sm">{descriptionText}</p>
    </Stack>
  );
};
