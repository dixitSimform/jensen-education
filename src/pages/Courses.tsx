import { Button, Stack } from "react-bootstrap";
import { Header } from "../components/common/Header";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import { CourseList } from "../components/coureses/CourseList";

export const Courses = () => {
  const breadCrumb = [{ label: "Courses" }, { label: "Matrix" }];
  return (
    <>
      <Header title="Courses" />
      <Stack className="px-md-4 px-3 mb-4">
        <Breadcrumbs items={breadCrumb} />
        <CourseList />
        <Stack
          direction="horizontal"
          className="mt-3 gap-3 border-top border-light pt-3 align-items-center justify-content-end"
        >
          <Button variant="outline-primary">Cancel</Button>
          <Button variant="secondary">Apply</Button>
        </Stack>
      </Stack>
    </>
  );
};
