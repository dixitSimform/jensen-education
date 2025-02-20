import { useContext, useState } from "react";
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
import { Dialog } from "./Dialog";
import { RequirementForm } from "./RequirementForm";
import { AbilityForm } from "./AbilityForm";

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

interface AbilityActionButtonsProps {
  setModalEditAbilityOpen: (open: boolean) => void;
  setModalAddAbilityOpen: (open: boolean) => void;
  setModalDeleteAbilityOpen: (open: boolean) => void;
}

const AbilityActionButtons = ({
  setModalEditAbilityOpen,
  setModalAddAbilityOpen,
  setModalDeleteAbilityOpen,
}: AbilityActionButtonsProps) => {
  return (
    <>
      <OverlayTrigger placement="top" overlay={<Tooltip>Edit Ability</Tooltip>}>
        <Button
          variant="outline-primary"
          className="btn-icon border-light"
          onClick={() => setModalEditAbilityOpen(true)}
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
          onClick={() => setModalDeleteAbilityOpen(true)}
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
          onClick={() => setModalAddAbilityOpen(true)}
        >
          <Plus />
        </Button>
      </OverlayTrigger>
    </>
  );
};

const RequirementActionButtons = () => {
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Edit Requirement</Tooltip>}
      >
        <Button variant="outline-primary" className="btn-icon border-light">
          <Edit />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Delete Requirement</Tooltip>}
      >
        <Button variant="outline-primary" className="btn-icon border-light">
          <Trash />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export const CourseList = () => {
  const [modalEditAbilityOpen, setModalEditAbilityOpen] = useState(false);
  const [modalAddAbilityOpen, setModalAddAbilityOpen] = useState(false);
  const [modalDeleteAbilityOpen, setModalDeleteAbilityOpen] = useState(false);

  return (
    <>
      <Accordion defaultActiveKey="0" className="d-flex flex-column gap-3">
        <Card>
          <Card.Header className="d-flex justify-content-between gap-2 flex-md-row flex-column">
            <Stack gap={1}>
              <h3 className="mb-0 h5">Ability</h3>
              <p className="text-sm font-tiempos-text">
                Life thrives in the mountains.
              </p>
            </Stack>
            <Stack gap={2} direction="horizontal" className="gap-md-3">
              <AbilityActionButtons
                setModalEditAbilityOpen={setModalEditAbilityOpen}
                setModalAddAbilityOpen={setModalAddAbilityOpen}
                setModalDeleteAbilityOpen={setModalDeleteAbilityOpen}
              />
              <ContextAwareToggle eventKey="0" />
            </Stack>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="p-0">
              <Stack className="px-4 pt-0 pb-4">
                <Stack
                  gap={2}
                  className="border-top border-light py-3 justify-content-between flex-md-row"
                >
                  <Stack gap={1}>
                    <h4 className="mb-0 text-lg">Requirement 1</h4>
                    <p className="text-sm font-tiempos-text">
                      Life thrives in the mountains.
                    </p>
                  </Stack>
                  <Stack gap={3} direction="horizontal">
                    <RequirementActionButtons />
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
                        A red flower blooms in the garden.
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
                        A red flower blooms in the garden.
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
                        Sweet fruits hang in the orchard.
                      </p>
                    </Stack>
                  </Col>
                </Row>
              </Stack>
              <Stack className="px-4 pt-0 pb-4">
                <Stack
                  gap={2}
                  className="border-top border-light py-3 justify-content-between flex-md-row"
                >
                  <Stack gap={1}>
                    <h4 className="mb-0 text-lg">Requirement 2</h4>
                    <p className="text-sm font-tiempos-text">
                      Life thrives in the mountains.
                    </p>
                  </Stack>
                  <Stack gap={3} direction="horizontal">
                    <RequirementActionButtons />
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
                        A red flower blooms in the garden.
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
                        A red flower blooms in the garden.
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
                        Sweet fruits hang in the orchard.
                      </p>
                    </Stack>
                  </Col>
                </Row>
              </Stack>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="d-flex justify-content-between gap-2 flex-md-row flex-column">
            <Stack gap={1}>
              <h3 className="mb-0 h5">Ability</h3>
              <p className="text-sm font-tiempos-text">
                Life thrives in the mountains.
              </p>
            </Stack>
            <Stack gap={2} direction="horizontal" className="gap-md-3">
              <AbilityActionButtons
                setModalEditAbilityOpen={setModalEditAbilityOpen}
                setModalAddAbilityOpen={setModalAddAbilityOpen}
                setModalDeleteAbilityOpen={setModalDeleteAbilityOpen}
              />
              <ContextAwareToggle eventKey="1" />
            </Stack>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="p-0">
              <Stack className="px-4 pt-0 pb-4">
                <Stack
                  gap={2}
                  className="border-top border-light py-3 justify-content-between flex-md-row"
                >
                  <Stack gap={1}>
                    <h4 className="mb-0 text-lg">Requirement 1</h4>
                    <p className="text-sm font-tiempos-text">
                      Life thrives in the mountains.
                    </p>
                  </Stack>
                  <Stack gap={3} direction="horizontal">
                    <RequirementActionButtons />
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
                        A red flower blooms in the garden.
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
                        A red flower blooms in the garden.
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
                        Sweet fruits hang in the orchard.
                      </p>
                    </Stack>
                  </Col>
                </Row>
              </Stack>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Dialog
        isOpen={modalEditAbilityOpen}
        onClose={() => setModalEditAbilityOpen(false)}
        title="Edit Ability"
        buttonText="Update Ability"
      >
        <AbilityForm />
      </Dialog>

      <Dialog
        isOpen={modalAddAbilityOpen}
        onClose={() => setModalAddAbilityOpen(false)}
        title="Add Requirement"
        buttonText="Add Requirement"
      >
        <RequirementForm />
      </Dialog>

      <Dialog
        isOpen={modalDeleteAbilityOpen}
        onClose={() => setModalDeleteAbilityOpen(false)}
        title="Delete Ability"
        buttonText="Yes, Delete Ability"
        size="md"
      >
        <p className="text-sm">Are you sure you want to delete this ability?</p>
      </Dialog>
    </>
  );
};
