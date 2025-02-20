import { Col, Dropdown, Row, Stack } from "react-bootstrap";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Header } from "../components/Header";
import { PersonCard } from "../components/PersonCard";
import { Searchbar } from "../components/Searchbar";
import { Filter } from "../components/Filter";
import { ChevronDown } from "../icons/ChevronDown";
import { PageNumbers } from "../components/PageNumbers";
import usePagination from "../hooks/use-pagination-with-filter";
import { NoData } from "../components/NoData";
import { Loader } from "../components/Loader";

export const Persons = () => {
  const {
    currentPage,
    pageCount,
    currentPageData,
    handlePageChange,
    setFilter,
    handleSearchChange,
    usersToShow,
    handleSelect,
    searchTerm,
    loading,
  } = usePagination();
  const breadCrumb = [{ label: "Persons" }];
  if (searchTerm) {
    breadCrumb.push({ label: `Search "${searchTerm}"` });
  }
  return (
    <>
      <Header title="Persons" />
      <Stack className="px-md-4 px-3">
        <Row>
          <Col lg="3" xs="12" className="order-lg-1 mb-lg-0 mb-4">
            <Filter onFilterChange={setFilter} />
          </Col>
          <Col lg="9" xs="12">
            <Breadcrumbs items={breadCrumb} />
            <Searchbar onSearch={handleSearchChange} />
            <Stack gap={2}>
              {
                currentPageData.map((person) => {
                  return (
                    <PersonCard
                      key={person.email}
                      image={person.image}
                      name={person.firstName + " " + person.lastName}
                      number={person.phone}
                      email={person.email}
                      department={person.department}
                    />
                  );
                })}
              {!loading && currentPageData.length === 0 && <NoData />}
              {loading && (
                <div className="d-flex justify-content-center">
                  <Loader />
                </div>
              )}
            </Stack>
            <Stack className="my-3 gap-3 border-top border-light-subtle pt-3 flex-md-row align-items-center justify-content-between">
              {currentPageData.length !== 0 && <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle bsPrefix="none" variant="outline-primary">
                  Show {usersToShow} users
                  <ChevronDown className="ms-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="5">5 users</Dropdown.Item>
                  <Dropdown.Item eventKey="10">10 users</Dropdown.Item>
                  <Dropdown.Item eventKey="15">15 users</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>}

              {currentPageData.length !== 0 &&<PageNumbers
                currentPage={currentPage}
                pageCount={pageCount}
                handlePageChange={handlePageChange}
              />}
            </Stack>
          </Col>
        </Row>
      </Stack>
    </>
  );
};
