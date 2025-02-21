import { Badge, Card } from "react-bootstrap";

type TPersonCard = {
  image: string;
  name: string;
  number: string;
  email: string;
  department: string;
};

export const PersonCard = (props: TPersonCard) => {
  const { department, email, image, name, number } = props;
  return (
    <Card className="person-card shadow-card flex-row">
      <div className="person-card-image flex-shrink-0">
        <Card.Img
          variant="left"
          src={image}
          alt={name}
          className="w-100 h-100 object-fit-cover"
        />
      </div>
      <Card.Body className="person-card-content d-flex flex-column justify-content-center gap-md-3 gap-2">
        <h4 className="mb-0 h5">{name}</h4>
        <div className="d-flex gap-md-2 gap-1 flex-wrap">
          <Badge
            pill
            bg="body"
            text="primary"
            className="px-3 py-md-2 py-1 fw-normal"
          >
            <span className="lh-base d-block">{number}</span>
          </Badge>
          <Badge
            pill
            bg="body"
            text="primary"
            className="px-3 py-md-2 py-1 fw-normal"
          >
            <span className="lh-base d-block">{email}</span>
          </Badge>
          <Badge
            pill
            bg="body"
            text="primary"
            className="px-3 py-md-2 py-1 fw-normal"
          >
            <span className="lh-base d-block">{department}</span>
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
};
