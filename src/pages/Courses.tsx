import { Button, Stack } from "react-bootstrap";
import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CourseToolbar } from "../components/CourseToolbar";
import { CourseList } from "../components/CourseList";

export const Courses = () => {
  const breadCrumb = [{ label: "Courses" }, { label: "Matrix" }];
  return (
    <>
      <Header title="Courses" />
      <Stack className="px-md-4 px-3 mb-4">
        <Breadcrumbs items={breadCrumb} />
        <CourseToolbar />
        <CourseList />
        <Stack
          direction="horizontal"
          className="mt-3 gap-3 border-top border-light pt-3 align-items-center justify-content-end"
        >
          <Button variant="outline-primary text-uppercase ls-3 fw-bold d-flex align-items-center">
            Cancel
          </Button>
          <Button variant="outline-primary text-uppercase ls-3 fw-bold d-flex align-items-center">
            Apply
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
