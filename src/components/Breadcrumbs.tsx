import { Breadcrumb } from "react-bootstrap";
import { Home } from "./Icons";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className="my-3">
      <Breadcrumb.Item href="#">
        <span className="py-1 px-2">
          <Home className="fs-6" />
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        <span className="py-1 px-2">Persons</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        <span className="py-1 px-2">Search “John Smith”</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
