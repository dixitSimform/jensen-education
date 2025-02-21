import { Button, Form, Stack } from "react-bootstrap";
import { Plus } from "../icons/Plus";
import { Upload } from "../icons/Upload";
import React from "react";

export const CourseToolbar =({
  setAbilityModal,
}: {
  setAbilityModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Stack className="flex-md-row align-items-lg-center flex-wrap mb-4" gap={3}>
      <h2 className="h5 mb-0 me-auto text-uppercase col-xl-auto col-12">
        Course Matrix
      </h2>
      <Stack gap={3} className="flex-md-row justify-content-lg-end flex-wrap">
        <Form>
          <Form.Group className="course-toolbar-search">
            <Form.Control type="text" placeholder="Course name" />
          </Form.Group>
        </Form>
        <Button variant="outline-primary text-uppercase ls-3 fw-bold d-flex align-items-center">
          <Plus className="me-2" />
          New Version
        </Button>
        <Button
          variant="outline-primary text-uppercase ls-3 fw-bold d-flex align-items-center"
          onClick={() => setAbilityModal(true)}
        >
          <Plus className="me-2" />
          New Ability
        </Button>
        <Button variant="outline-primary text-uppercase ls-3 fw-bold d-flex align-items-center">
          <Upload className="me-2" />
          Export
        </Button>
      </Stack>
    </Stack>
  );
};
