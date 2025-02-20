import { Col, Dropdown, Row, Stack } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { PersonCard } from "../components/PersonCard";
import { Searchbar } from "../components/Searchbar";
import { Filter } from "../components/Filter";
import { ChevronDown } from "../icons/ChevronDown";
import { PageNumbers } from "../components/PageNumbers";
import usePagination from "../hooks/use-pagination";

export const Persons = () => {
  const {
    currentPage,
    pageCount,
    currentPageData,
    handlePageChange,
    setFilter,
    handleSearchChange,
    usersToShow,
    handleSelect
  } = usePagination();
  return (
    <>
      <Header title="Persons" />
      <Stack className="px-4">
        <Row>
          <Col lg="9" xs="12">
            <Breadcrumbs />
            <Searchbar onSearch={handleSearchChange} />
            <Stack gap={2}>
              {currentPageData.map((person) => {
                return (
                  <PersonCard
                    key={person.email}
                    image={"/images/4.avif"}
                    name={person.firstName + " " + person.lastName}
                    number={person.phone}
                    email={person.email}
                    department={person.department}
                  />
                );
              })}
            </Stack>
            <Stack className="my-3 border-top border-light-subtle pt-3 flex-md-row align-items-center justify-content-between">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle bsPrefix="none" variant="outline-primary">
                  Show {usersToShow} users
                  <ChevronDown className="ms-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="5">5 users</Dropdown.Item>
                  <Dropdown.Item eventKey="10">10 users</Dropdown.Item>
                  <Dropdown.Item eventKey="15">15 users</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <PageNumbers
                currentPage={currentPage}
                pageCount={pageCount}
                handlePageChange={handlePageChange}
              />
            </Stack>
          </Col>
          <Col lg="3" xs="12">
            <Filter onFilterChange={setFilter} />
          </Col>
        </Row>
      </Stack>
    </>
  );
};
