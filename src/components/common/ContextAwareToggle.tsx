// ContextAwareToggle.tsx
import { useContext } from "react";
import { Button, AccordionContext, useAccordionButton } from "react-bootstrap";
import { ChevronUp } from "../icons/ChevronUp";
import { ChevronDown } from "../icons/ChevronDown";
import { ContextAwareToggleProps } from "../../types/common";

export const ContextAwareToggle: React.FC<ContextAwareToggleProps> = ({
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
      aria-label={isCurrentEventKey ? "Expand accordion" : "Collapse accordion"}
    >
      {isCurrentEventKey ? <ChevronUp /> : <ChevronDown />}
    </Button>
  );
};
