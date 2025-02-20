import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Stack,
  Tooltip,
  useAccordionButton,
} from "react-bootstrap";
import { ChevronUp } from "../icons/ChevronUp";
import { ChevronDown } from "../icons/ChevronDown";
import { Plus } from "../icons/Plus";
import { Trash } from "../icons/Trash";
import { Edit } from "../icons/Edit";
import { FormDialog } from "./FormDialog";
import { RequirementForm } from "./RequirementForm";
import { AbilityForm } from "./AbilityForm";
import useAbilities from "../hooks/use-ability";
import { CourseToolbar } from "./CourseToolbar";

interface ContextAwareToggleProps {
  eventKey: string;
  callback?: (eventKey: string) => void;
}

const ContextAwareToggle: React.FC<ContextAwareToggleProps> = ({
  eventKey,
  callback,
}) => {
  const { activeEventKey } = useContext(AccordionContext) as {
    activeEventKey: string | null;
  };

  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (callback) callback(eventKey);
  });

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Button
      variant="outline-primary"
      className="btn-icon border-light"
      onClick={decoratedOnClick}
    >
      {isCurrentEventKey ? <ChevronUp /> : <ChevronDown />}
    </Button>
  );
};

export const CourseList = () => {
  const {
    abilities,
    addAbility,
    addRequirementToAbility,
    selectedAbility,
    selectedRequirement,
    setSelectedAbility,
    setSelectedRequirement,
    editAbility,
    editRequirement,
    deleteAbility,
    deleteRequirement,
    abilityModal,
    setAbilityModal,
    modalDeleteAbilityOpen,
    modalDeleteRequirementOpen,
    requirementModal,
    setDeleteAbilityModal,
    setDeleteRequirementModal,
    setRequirementModal,
  } = useAbilities();
  console.log(selectedAbility);
  return (
    <>
      <CourseToolbar setAbilityModal={setAbilityModal} />

      <Accordion defaultActiveKey="1" className="d-flex flex-column gap-3">
        {abilities.map((ability) => (
          <Card>
            <Card.Header className="d-flex justify-content-between gap-2 flex-md-row flex-column">
              <Stack gap={1}>
                <h3 className="mb-0 h5">{ability.abilityTitle}</h3>
                <p className="text-sm font-tiempos-text">
                  {ability.abilityDescription}
                </p>
              </Stack>
              <Stack gap={2} direction="horizontal" className="gap-md-3">
                <>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Edit Ability</Tooltip>}
                  >
                    <Button
                      variant="outline-primary"
                      className="btn-icon border-light"
                      onClick={() => {
                        setSelectedAbility(ability);
                        setAbilityModal(true);
                      }}
                    >
                      <Edit />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Delete Ability</Tooltip>}
                  >
                    <Button
                      variant="outline-primary"
                      className="btn-icon border-light"
                      onClick={() => {
                        setSelectedAbility(ability);
                        setDeleteAbilityModal(true);
                      }}
                    >
                      <Trash />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add Requirement</Tooltip>}
                  >
                    <Button
                      variant="outline-primary"
                      className="btn-icon border-light"
                      onClick={() => {
                        setRequirementModal(true);
                        setSelectedAbility(ability);
                      }}
                    >
                      <Plus />
                    </Button>
                  </OverlayTrigger>
                </>
                <ContextAwareToggle eventKey={ability.id} />
              </Stack>
            </Card.Header>
            <Accordion.Collapse eventKey={ability.id}>
              <Card.Body className="p-0">
                {ability.requirements.map((requirement) => (
                  <Stack className="px-4 pt-0 pb-4">
                    <Stack
                      gap={2}
                      className="border-top border-light py-3 justify-content-between flex-md-row"
                    >
                      <Stack gap={1}>
                        <h4 className="mb-0 text-lg">
                          {requirement.requirementTitle}
                        </h4>
                        <p className="text-sm font-tiempos-text">
                          {requirement.requirementDescription}
                        </p>
                      </Stack>
                      <Stack gap={3} direction="horizontal">
                        <>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Edit Requirement</Tooltip>}
                          >
                            <Button
                              variant="outline-primary"
                              className="btn-icon border-light"
                              onClick={() => {
                                setSelectedRequirement(requirement);
                                setSelectedAbility(ability);
                                setRequirementModal(true);
                              }}
                            >
                              <Edit />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Delete Requirement</Tooltip>}
                          >
                            <Button
                              variant="outline-primary"
                              className="btn-icon border-light"
                              onClick={() => {
                                setSelectedRequirement(requirement);
                                setDeleteRequirementModal(true);
                              }}
                            >
                              <Trash />
                            </Button>
                          </OverlayTrigger>
                        </>
                      </Stack>
                    </Stack>
                    <Row className="gap-md-0 gap-3">
                      <Col md="4" xs="12">
                        <Stack
                          gap={2}
                          className="border border-primary rounded p-3"
                        >
                          <h6 className="mb-0">Grade E</h6>
                          <p className="text-sm font-tiempos-text">
                            {requirement.gradeE}
                          </p>
                        </Stack>
                      </Col>
                      <Col md="4" xs="12">
                        <Stack
                          gap={2}
                          className="border border-primary rounded p-3"
                        >
                          <h6 className="mb-0">Grade C</h6>
                          <p className="text-sm font-tiempos-text">
                            {requirement.gradeC}
                          </p>
                        </Stack>
                      </Col>
                      <Col md="4" xs="12">
                        <Stack
                          gap={2}
                          className="border border-primary rounded p-3"
                        >
                          <h6 className="mb-0">Grade A</h6>
                          <p className="text-sm font-tiempos-text">
                            {requirement.gradeA}
                          </p>
                        </Stack>
                      </Col>
                    </Row>
                  </Stack>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>

      <AbilityForm
        abilityModal={abilityModal}
        setAbilityModal={setAbilityModal}
        addAbility={addAbility}
        selectedAbility={{
          abilityTitle: selectedAbility?.abilityTitle || '',
          abilityDescription: selectedAbility?.abilityDescription || '',
          id: selectedAbility?.id || '',
          requirements: selectedAbility?.requirements || []
        }}
        editAbility={editAbility}
        setSelectedAbility={setSelectedAbility}
        setSelectedRequirement={setSelectedRequirement}
      />

      <RequirementForm
        requirementModal={requirementModal}
        setRequirementModal={setRequirementModal}
        addRequirementToAbility={addRequirementToAbility}
        selectedAbility={{
          abilityTitle: selectedAbility?.abilityTitle || '',
          abilityDescription: selectedAbility?.abilityDescription || '',
          id: selectedAbility?.id || '',
          requirements: selectedAbility?.requirements || []
        }}
        selectedRequirement={{
          requirementTitle: selectedRequirement?.requirementTitle || '',
          requirementDescription: selectedRequirement?.requirementDescription || '',
          requirementId: selectedRequirement?.requirementId || '',
          gradeE: selectedRequirement?.gradeE || '',
          gradeC: selectedRequirement?.gradeC || '',
          gradeA: selectedRequirement?.gradeA || ''
        }}
        editRequirement={editRequirement}
        setSelectedAbility={setSelectedAbility}
        setSelectedRequirement={setSelectedRequirement}
      />
      <FormDialog
        isOpen={modalDeleteAbilityOpen}
        onClose={() => {
          setSelectedAbility(undefined);
          setDeleteAbilityModal(false);
        }}
        title="Delete Ability"
        buttonText="Yes, Delete Ability"
        size="sm"
        onSubmit={() => {
          deleteAbility(selectedAbility?.id as string);
          setSelectedAbility(undefined);
          setDeleteAbilityModal(false);
        }}
      >
        <p className="text-sm">Are you sure you want to delete this ability?</p>
      </FormDialog>
      <FormDialog
        isOpen={modalDeleteRequirementOpen}
        onClose={() => {
          setSelectedRequirement(undefined);
          setDeleteRequirementModal(false);
        }}
        title="Delete Ability"
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
        <p className="text-sm">
          Are you sure you want to delete this requirement?
        </p>
      </FormDialog>
    </>
  );
};
