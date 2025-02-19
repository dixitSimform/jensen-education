import { Button, Dropdown, Stack } from "react-bootstrap";
import { Header } from "../components/Header";
import { ChevronDown } from "../icons/ChevronDown";

export const Styleguide = () => {
  return (
    <>
      <Header title="Styleguide" />
      <Stack gap={3} className="px-3 py-4">
        <h1>h1. heading</h1>
        <h2>h2. heading</h2>
        <h3>h3. heading</h3>
        <h4>h4. heading</h4>
        <h5>h5. heading</h5>
        <h6>h6. heading</h6>
        <Stack gap={3} direction="horizontal">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </Stack>
        <Stack gap={3} direction="horizontal">
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </Stack>
        <Dropdown>
          <Dropdown.Toggle bsPrefix="none" variant="outline-primary">
            Show 5 user
            <ChevronDown />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Pagination>{items}</Pagination> */}
      </Stack>
    </>
  );
};
