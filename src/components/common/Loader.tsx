import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <Spinner animation="border" role="status" variant="secondary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};
