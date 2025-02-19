import { Breadcrumb } from "react-bootstrap";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb className="my-3">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Persons
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Search “John Smith”</Breadcrumb.Item>
    </Breadcrumb>
  );
};
