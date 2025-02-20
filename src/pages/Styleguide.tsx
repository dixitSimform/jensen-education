/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dropdown,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Header } from "../components/Header";
import { ChevronDown } from "../icons/ChevronDown";
import { useState } from "react";
import { Loader } from "../components/Loader";
import { NoData } from "../components/NoData";

export const Styleguide = () => {
  const [value, setValue] = useState([]);
  const handleChange = (val:any) => setValue(val);

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
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={handleChange}
          className="d-block"
        >
          <ToggleButton
            id="tbg-btn-1"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            value={1}
            bsPrefix="btn-check btn-selection"
          >
            Option 1
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={2}
          >
            Option 2
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-3"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={3}
          >
            Option 3
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-4"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={4}
          >
            Option 4
          </ToggleButton>
        </ToggleButtonGroup>
        <Loader />
        <NoData />
      </Stack>
    </>
  );
};
