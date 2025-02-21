import { Form } from "react-bootstrap";
import { FormDialog } from "./FormDialog";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ability, Requirement } from "../hooks/use-ability";

// Define validation schema using Yup
const schema = yup.object().shape({
  abilityTitle: yup.string().required("Ability Title is required"),
  abilityDescription: yup.string().required("Ability Description is required"),
});
export type AbilitySchema = yup.InferType<typeof schema>;

export const AbilityForm = ({
  abilityModal,
  setAbilityModal,
  addAbility,
  selectedAbility,
  editAbility,
  setSelectedAbility,
  setSelectedRequirement,
}: {
  abilityModal: boolean;
  setAbilityModal: React.Dispatch<React.SetStateAction<boolean>>;
  addAbility: (ability: Omit<Ability, "id">) => void;
  selectedAbility?: Ability;
  editAbility: (
    abilityId: string,
    updatedData: Partial<Omit<Ability, "id" | "requirements">>
  ) => void;
  setSelectedAbility: React.Dispatch<React.SetStateAction<Ability | undefined>>;
  setSelectedRequirement: React.Dispatch<React.SetStateAction<Requirement | undefined>>;
}) => {
  const methods = useForm<AbilitySchema>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    control,
    setValue,
    reset, // Get reset from useForm
    formState: { errors },
  } = methods;
  useEffect(() => {
    if (selectedAbility) {
      setValue("abilityTitle", selectedAbility.abilityTitle);
      setValue("abilityDescription", selectedAbility.abilityDescription);
    } 
  }, [selectedAbility]);
  const onSubmit = (data: AbilitySchema) => {
    if (selectedAbility?.id) {
      editAbility(selectedAbility.id, {
        abilityTitle: data.abilityTitle,
        abilityDescription: data.abilityDescription,
      });
      reset(); // Reset form to default values or specify values here
      setSelectedAbility(undefined); // Clear selectedAbility
      setSelectedRequirement(undefined); // Clear selectedRequirement
      setAbilityModal(false);
      return;
    }
    addAbility({
      abilityTitle: data.abilityTitle,
      abilityDescription: data.abilityDescription,
      requirements: [],
    });
    // After form submission, reset the form
    reset(); // Reset form to default values or specify values here
    setAbilityModal(false); // Close modal after submission
  };

  const handleClose = () => {
    reset(); // Reset form when modal is closed
    setSelectedAbility(undefined); // Clear selectedAbility
    setSelectedRequirement(undefined); // Clear selectedRequirement
    setAbilityModal(false);

   
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormDialog
        isOpen={abilityModal}
        onClose={handleClose}
        title={selectedAbility?.id ? "Edit Ability" : "Add Ability"}
        buttonText={selectedAbility?.id ? "Update Ability" : "Add Ability"}
        onSubmit={handleSubmit(onSubmit)} // Pass handleSubmit here
      >
        <Form.Group className="mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Ability Title
          </Form.Label>
          <Controller
            control={control}
            name="abilityTitle"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Form.Control
                type="text"
                size="lg"
                value={value}
                onChange={onChange}
                isInvalid={!!errors.abilityTitle}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {errors.abilityTitle?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="text-uppercase mb-md-3 mb-2">
            Ability Description
          </Form.Label>
          <Controller
            control={control}
            name="abilityDescription"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Form.Control
                as="textarea"
                rows={5}
                value={value}
                onChange={onChange}
                isInvalid={!!errors.abilityDescription}
              />
            )}
          />

          <Form.Control.Feedback type="invalid">
            {errors.abilityDescription?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </FormDialog>
    </Form>
  );
};
