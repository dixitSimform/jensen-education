import { Breadcrumb } from "react-bootstrap";
import { Home } from "../../icons/Home";
import { BreadcrumbsProps } from "../../types/common";

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <Breadcrumb
      className="mb-3"
      bsPrefix="breadcrumb align-items-center fw-medium mb-0"
    >
      <Breadcrumb.Item href="#" className="p-1 lh-1">
        <Home />
      </Breadcrumb.Item>
      {items.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          href={item.link || undefined}
          active={index === items.length - 1}
        >
          {index === items.length - 1 ? (
            <span className="py-1 px-2 fw-semibold rounded-1">
              {item.label}
            </span>
          ) : (
            item.label
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
