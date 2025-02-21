// CourseList.tsx
import { Accordion, Card } from "react-bootstrap";
import { AbilityCard } from "./AbilityCard";
import { RequirementCard } from "./RequirementCard";
import useAbilities from "./hooks/use-ability";
import { CourseToolbar } from "./CourseToolbar";
import { AbilityForm } from "./AbilityForm";
import { RequirementForm } from "./RequirementForm";
import { FormDialog } from "../common/FormDialog";

export const CourseList = () => {
  const {
    abilities,
    selectedAbility,
    selectedRequirement,
    setSelectedAbility,
    setSelectedRequirement,
    setAbilityModal,
    setRequirementModal,
    setDeleteAbilityModal,
    setDeleteRequirementModal,
    modalDeleteAbilityOpen,
    modalDeleteRequirementOpen,
    deleteAbility,
    deleteRequirement,
    addAbility,
    addRequirementToAbility,
    editAbility,
    abilityModal,
    requirementModal,
    editRequirement,
  } = useAbilities();

  return (
    <>
      <CourseToolbar setAbilityModal={setAbilityModal} />
      <Accordion defaultActiveKey="1" className="d-flex flex-column gap-3">
        {abilities.map((ability) => (
          <Card key={ability.id}>
            <AbilityCard
              ability={ability}
              onEdit={() => {
                setSelectedAbility(ability);
                setAbilityModal(true);
              }}
              onDelete={() => {
                setSelectedAbility(ability);
                setDeleteAbilityModal(true);
              }}
              onAddRequirement={() => {
                setRequirementModal(true);
                setSelectedAbility(ability);
              }}
            />
            <Accordion.Collapse eventKey={ability.id}>
              <Card.Body className="p-0">
                {ability.requirements.map((requirement) => (
                  <RequirementCard
                    key={requirement.requirementId}
                    ability={ability}
                    requirement={requirement}
                    onEdit={() => {
                      setSelectedRequirement(requirement);
                      setSelectedAbility(ability);
                      setRequirementModal(true);
                    }}
                    onDelete={() => {
                      setSelectedAbility(ability);
                      setSelectedRequirement(requirement);
                      setDeleteRequirementModal(true);
                    }}
                  />
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <AbilityForm
        abilityModal={abilityModal}
        addAbility={addAbility}
        selectedAbility={{
          abilityTitle: selectedAbility?.abilityTitle || "",
          abilityDescription: selectedAbility?.abilityDescription || "",
          id: selectedAbility?.id || "",
          requirements: selectedAbility?.requirements || [],
        }}
        editAbility={editAbility}
        setSelectedAbility={setSelectedAbility}
        setAbilityModal={setAbilityModal}
        setSelectedRequirement={setSelectedRequirement}
      />

      <RequirementForm
        requirementModal={requirementModal}
        addRequirementToAbility={addRequirementToAbility}
        selectedAbility={{
          abilityTitle: selectedAbility?.abilityTitle || "",
          abilityDescription: selectedAbility?.abilityDescription || "",
          id: selectedAbility?.id || "",
          requirements: selectedAbility?.requirements || [],
        }}
        selectedRequirement={{
          requirementTitle: selectedRequirement?.requirementTitle || "",
          requirementDescription:
            selectedRequirement?.requirementDescription || "",
          requirementId: selectedRequirement?.requirementId || "",
          gradeE: selectedRequirement?.gradeE || "",
          gradeC: selectedRequirement?.gradeC || "",
          gradeA: selectedRequirement?.gradeA || "",
        }}
        editRequirement={editRequirement}
        setSelectedAbility={setSelectedAbility}
        setSelectedRequirement={setSelectedRequirement}
        setRequirementModal={setRequirementModal}
      />

      <FormDialog
        isOpen={modalDeleteAbilityOpen}
        onClose={() => {
          setSelectedAbility(undefined);
          setDeleteAbilityModal(false);
        }}
        size="sm"
        title="Delete Ability"
        buttonText="Yes, Delete Ability"
        onSubmit={() => {
          deleteAbility(selectedAbility?.id as string);
          setSelectedAbility(undefined);
          setDeleteAbilityModal(false);
        }}
      >
        <p>Are you sure you want to delete this ability?</p>
      </FormDialog>

      <FormDialog
        isOpen={modalDeleteRequirementOpen}
        onClose={() => {
          setSelectedRequirement(undefined);
          setDeleteRequirementModal(false);
        }}
        title="Delete Requirement"
        buttonText="Yes, Delete Requirement"
        size="sm"
        onSubmit={() => {
          deleteRequirement(
            selectedAbility?.id as string,
            selectedRequirement?.requirementId as string
          );
          setSelectedRequirement(undefined);
          setDeleteRequirementModal(false);
        }}
      >
        <p>Are you sure you want to delete this requirement?</p>
      </FormDialog>
    </>
  );
};
