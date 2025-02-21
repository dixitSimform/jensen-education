// AbilityCard.tsx
import { Button, Card, OverlayTrigger, Stack, Tooltip } from "react-bootstrap";
import { Edit } from "../icons/Edit";
import { Trash } from "../icons/Trash";
import { Plus } from "../icons/Plus";
import { ContextAwareToggle } from "../common/ContextAwareToggle";
import { Ability } from "../../types/courses";

interface AbilityCardProps {
  ability: Ability;
  onEdit: () => void;
  onDelete: () => void;
  onAddRequirement: () => void;
}

export const AbilityCard: React.FC<AbilityCardProps> = ({
  ability,
  onEdit,
  onDelete,
  onAddRequirement,
}) => (
  <Card>
    <Card.Header className="d-flex justify-content-between gap-2 flex-md-row flex-column">
      <Stack gap={1}>
        <h3 className="mb-0 h5">{ability.abilityTitle}</h3>
        <p className="text-sm font-tiempos-text">
          {ability.abilityDescription}
        </p>
      </Stack>
      <Stack gap={2} direction="horizontal" className="gap-md-3">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Edit Ability</Tooltip>}
        >
          <Button
            variant="outline-primary"
            className="btn-icon border-light"
            onClick={onEdit}
            aria-label="Edit Ability"
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
            onClick={onDelete}
            aria-label="Delete Ability"
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
            onClick={onAddRequirement}
            aria-label="Add Requirement"
          >
            <Plus />
          </Button>
        </OverlayTrigger>
        <ContextAwareToggle eventKey={ability.id} />
      </Stack>
    </Card.Header>
  </Card>
);
