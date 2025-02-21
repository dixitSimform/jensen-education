import { Form } from "react-bootstrap";
import { FormDialog } from "./FormDialog";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ability, Requirement } from "../hooks/use-ability";

// Define the validation schema with yup
const schema = yup.object().shape({
  requirementTitle: yup.string().required("Requirement Title is required"),
  requirementDescription: yup
    .string()
    .required("Requirement Description is required"),
  gradeE: yup.string().required("Grade E is required"),
  gradeC: yup.string().required("Grade C is required"),
  gradeA: yup.string().required("Grade A is required"),
});

// Define the TypeScript type for form data
export type RequirementFormData = yup.InferType<typeof schema>;

export const RequirementForm = ({
  requirementModal,
  setRequirementModal,
  addRequirementToAbility,
  selectedRequirement,
  editRequirement,
  selectedAbility,
  setSelectedAbility,
  setSelectedRequirement,
}: {
  requirementModal: boolean;
  setRequirementModal: React.Dispatch<React.SetStateAction<boolean>>;
  addRequirementToAbility: (
    abilityId: string,
    requirement: Omit<Requirement, "requirementId">
  ) => void;
  selectedRequirement?: Requirement;
  selectedAbility?: Ability;

  editRequirement: (
    abilityId: string,
    requirementId: string,
    updatedData: Partial<Requirement>
  ) => void;
  setSelectedAbility: React.Dispatch<React.SetStateAction<Ability | undefined>>;
  setSelectedRequirement: React.Dispatch<React.SetStateAction<Requirement | undefined>>;
}) => {
  // Set up react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<RequirementFormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedRequirement) {
      setValue("requirementTitle", selectedRequirement.requirementTitle);
      setValue("requirementDescription", selectedRequirement.requirementDescription);
      setValue("gradeE", selectedRequirement.gradeE);
      setValue("gradeC", selectedRequirement.gradeC);
      setValue("gradeA", selectedRequirement.gradeA);
    }
  },[selectedRequirement]);

  // Handle form submission
  const onSubmit = (data: RequirementFormData) => {
    if (selectedRequirement?.requirementId) {
      editRequirement(
        selectedAbility?.id as string,
        selectedRequirement.requirementId,
        {
          requirementTitle: data.requirementTitle,
          requirementDescription: data.requirementDescription,
          gradeE: data.gradeE,
          gradeC: data.gradeC,
          gradeA: data.gradeA,
        }
      );
      reset(); // Optionally reset the form after submission
      setSelectedRequirement(undefined); // Clear selectedRequirement
      setSelectedAbility(undefined); // Clear selectedAbility
      setRequirementModal(false); // Close the modal after submission
      return;
    }
    addRequirementToAbility(selectedAbility?.id as string, {
      requirementTitle: data.requirementTitle,
      requirementDescription: data.requirementDescription,
      gradeE: data.gradeE,
      gradeC: data.gradeC,
      gradeA: data.gradeA,
    });
    reset(); // Optionally reset the form after submission
    setRequirementModal(false); // Close the modal after submission
  };
  const handleClose = () => {
    setRequirementModal(false);
    setSelectedRequirement(undefined); // Clear selectedRequirement
    setSelectedAbility(undefined); // Clear selectedAbility
    reset(); // Reset form when modal is closed
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormDialog
        isOpen={requirementModal}
        onClose={handleClose}
        title={selectedRequirement?.requirementId ? "Edit Requirement" : "Add Requirement"}
        buttonText={
          selectedRequirement?.requirementId ? "Update Requirement" : "Add Requirement"
        }
        onSubmit={handleSubmit(onSubmit)} // Trigger form submission
      >
        {/* Requirement Title */}
        <Form.Group className="mb-md-4 mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Requirement Title
          </Form.Label>
          <Controller
            name="requirementTitle"
            control={control}
            render={({ field }) => (
              <Form.Control
                type="text"
                size="lg"
                {...field}
                isInvalid={!!errors.requirementTitle}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.requirementTitle?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Requirement Description */}
        <Form.Group className="mb-md-4 mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Requirement Description
          </Form.Label>
          <Controller
            name="requirementDescription"
            control={control}
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={5}
                {...field}
                isInvalid={!!errors.requirementDescription}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.requirementDescription?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Grade E */}
        <Form.Group className="mb-md-4 mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Grade E
          </Form.Label>
          <Controller
            name="gradeE"
            control={control}
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={5}
                {...field}
                isInvalid={!!errors.gradeE}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.gradeE?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Grade C */}
        <Form.Group className="mb-md-4 mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Grade C
          </Form.Label>
          <Controller
            name="gradeC"
            control={control}
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={5}
                {...field}
                isInvalid={!!errors.gradeC}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.gradeC?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Grade A */}
        <Form.Group>
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Grade A
          </Form.Label>
          <Controller
            name="gradeA"
            control={control}
            render={({ field }) => (
              <Form.Control
                as="textarea"
                rows={5}
                {...field}
                isInvalid={!!errors.gradeA}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.gradeA?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </FormDialog>
    </Form>
  );
};
