import { Pagination } from "react-bootstrap";

export const PageNumbers = () => {
  return (
    <Pagination className="mb-0">
      <Pagination.Item active> {1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{8}</Pagination.Item>
      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>
    </Pagination>
  );
};
