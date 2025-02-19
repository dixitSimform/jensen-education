import { Col, Dropdown, Row, Stack } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { PersonCard } from "../components/PersonCard";
import { Searchbar } from "../components/Searchbar";
import { Filter } from "../components/Filter";
import { ChevronDown } from "../icons/ChevronDown";
import { PageNumbers } from "../components/PageNumbers";

export const Persons = () => {
  return (
    <>
      <Header title="Persons" />
      <Stack className="px-4">
        <Row>
          <Col lg="9" xs="12">
            <Breadcrumbs />
            <Searchbar />
            <Stack gap={2}>
              <PersonCard
                image="/images/1.avif"
                name="Courtney Henry"
                number="(239) 555-0108"
                email="Firstname.lastname.schoolname.com"
                department="School department"
              />
              <PersonCard
                image="/images/2.avif"
                name="Jerome Bell"
                number="(239) 555-0108"
                email="Firstname.lastname.schoolname.com"
                department="School department"
              />
              <PersonCard
                image="/images/3.avif"
                name="Dianne Russell"
                number="(239) 555-0108"
                email="Firstname.lastname.schoolname.com"
                department="School department"
              />
              <PersonCard
                image="/images/4.avif"
                name="Cameron Williamson"
                number="(239) 555-0108"
                email="Firstname.lastname.schoolname.com"
                department="School department"
              />
              <PersonCard
                image="/images/5.avif"
                name="Wade Warren"
                number="(239) 555-0108"
                email="Firstname.lastname.schoolname.com"
                department="School department"
              />
            </Stack>
            <Stack className="my-3 border-top border-light-subtle pt-3 flex-md-row align-items-center justify-content-between">
              <Dropdown>
                <Dropdown.Toggle bsPrefix="none" variant="outline-primary">
                  Show 5 user
                  <ChevronDown className="ms-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">5 user</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">10 user</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">15 user</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <PageNumbers />
            </Stack>
          </Col>
          <Col lg="3" xs="12">
            <Filter />
          </Col>
        </Row>
      </Stack>
    </>
  );
};
