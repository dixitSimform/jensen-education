import { Breadcrumb } from "react-bootstrap";
import { Home } from "../icons/Home";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb
      className="mb-3"
      bsPrefix="breadcrumb align-items-center fw-medium"
    >
      <Breadcrumb.Item href="#" className="p-1 lh-1">
        <Home />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Persons
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <span className="py-1 px-2 fw-semibold rounded-1">
          Search “John Smith”
        </span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
