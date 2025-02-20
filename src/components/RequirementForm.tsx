import { Form } from "react-bootstrap";

export const RequirementForm = () => {
  return (
    <Form>
      <Form.Group className="mb-md-4 mb-3">
        <Form.Label className="text-uppercase mb-md-3 mb-2">
          Requirement Title
        </Form.Label>
        <Form.Control type="text" size="lg" />
      </Form.Group>
      <Form.Group className="mb-md-4 mb-3">
        <Form.Label className="text-uppercase mb-md-3 mb-2">
          Requirement Description
        </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group className="mb-md-4 mb-3">
        <Form.Label className="text-uppercase mb-md-3 mb-2">Grade E</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group className="mb-md-4 mb-3">
        <Form.Label className="text-uppercase mb-md-3 mb-2">Grade C</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-uppercase mb-md-3 mb-2">Grade A</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
  );
};
