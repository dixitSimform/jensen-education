import { Stack } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";

export const Persons = () => {
  return (
    <>
      <Header title="Persons" />
      <Stack className="px-4">
        <Breadcrumbs />
      </Stack>
    </>
  );
};
