// RequirementCard.tsx
import {
  Button,
  Stack,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import { Edit } from "../icons/Edit";
import { Trash } from "../icons/Trash";
import { RequirementCardProps } from "../../types/courses";

export const RequirementCard: React.FC<RequirementCardProps> = ({
  requirement,
  onEdit,
  onDelete,
}) => (
  <Stack className="px-4 pt-0 pb-4">
    <Stack
      gap={2}
      className="border-top border-light py-3 justify-content-between flex-md-row"
    >
      <Stack gap={1}>
        <h4 className="mb-0 text-lg">{requirement.requirementTitle}</h4>
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
              onClick={onEdit}
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
              onClick={onDelete}
            >
              <Trash />
            </Button>
          </OverlayTrigger>
        </>
      </Stack>
    </Stack>
    <Row className="gap-md-0 gap-3">
      <Col md="4" xs="12">
        <Stack gap={2} className="border border-primary rounded p-3">
          <h6 className="mb-0">Grade E</h6>
          <p className="text-sm font-tiempos-text">{requirement.gradeE}</p>
        </Stack>
      </Col>
      <Col md="4" xs="12">
        <Stack gap={2} className="border border-primary rounded p-3">
          <h6 className="mb-0">Grade C</h6>
          <p className="text-sm font-tiempos-text">{requirement.gradeC}</p>
        </Stack>
      </Col>
      <Col md="4" xs="12">
        <Stack gap={2} className="border border-primary rounded p-3">
          <h6 className="mb-0">Grade A</h6>
          <p className="text-sm font-tiempos-text">{requirement.gradeA}</p>
        </Stack>
      </Col>
    </Row>
  </Stack>
);
