/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { Header } from "../components/common/Header";
import { ChevronDown } from "../icons/ChevronDown";
import { useState } from "react";
import { Loader } from "../components/common/Loader";
import { NoData } from "../components/common/NoData";
import { Plus } from "../icons/Plus";
import { PersonCard } from "../components/persons/PersonCard";

export const Styleguide = () => {
  const [value, setValue] = useState([]);
  const handleChange = (val: any) => setValue(val);

  return (
    <>
      <Header title="Styleguide" />
      <Stack gap={3} className="px-3 py-4">
        <Stack className="align-items-center" direction="horizontal" gap={3}>
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Heading
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <h1>h1. heading</h1>
        <h2>h2. heading</h2>
        <h3>h3. heading</h3>
        <h4>h4. heading</h4>
        <h5>h5. heading</h5>
        <h6>h6. heading</h6>
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Buttons
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Stack gap={3} direction="horizontal" className="flex-wrap">
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
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Outline Buttons
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Stack gap={3} direction="horizontal" className="flex-wrap">
          <Button variant="outline-primary">
            <Plus className="me-2 align-bottom" /> Primary
          </Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
        </Stack>
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Dropdown
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="none"
            variant="outline-primary ls-normal fw-medium text-none"
          >
            Show 5 user
            <ChevronDown className="ms-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Input Field
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="text-uppercase mb-md-3 mb-2 form-label">
              Ability Title
            </Form.Label>
            <Form.Control type="text" size="lg" />
          </Form.Group>
        </Form>
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Toggle Button (Checkbox)
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
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
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Person Card
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <PersonCard
          key="velasquezdana@bowen.info"
          image="/person/2.jpg"
          name="Julia Guzman"
          number="(953)522-9112"
          email="velasquezdana@bowen.info"
          department="HR Department"
        />
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Grade Card
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Row className="gap-md-0 gap-3">
          <Col md="4" xs="12">
            <Stack gap={2} className="border border-primary rounded p-3">
              <h6 className="mb-0">Grade C</h6>
              <p className="text-sm font-tiempos-text">
                A red flower blooms in the garden.
              </p>
            </Stack>
          </Col>
        </Row>
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            Loader
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <Loader />
        <Stack
          className="align-items-center mt-4"
          direction="horizontal"
          gap={3}
        >
          <div className="fw-bold text-uppercase flex-shrink-0 text-sm ls-2">
            No Data Found
          </div>
          <div className="border-top pb-1 mt-1 w-100"></div>
        </Stack>
        <NoData />
      </Stack>
    </>
  );
};
