import { Form } from "react-bootstrap";

export const AbilityForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className="text-uppercase mb-md-3 mb-2">
          Ability Title
        </Form.Label>
        <Form.Control type="text" size="lg" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-uppercase mb-md-3 mb-2">
          Ability Description
        </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
  );
};
