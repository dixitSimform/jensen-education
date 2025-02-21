// ContextAwareToggle.tsx
import { useContext } from "react";
import { Button, AccordionContext, useAccordionButton } from "react-bootstrap";
import { ChevronUp } from "../icons/ChevronUp";
import { ChevronDown } from "../icons/ChevronDown";

interface ContextAwareToggleProps {
  eventKey: string;
  callback?: (eventKey: string) => void;
}

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
    <Button variant="outline-primary" className="btn-icon border-light" onClick={decoratedOnClick}>
      {isCurrentEventKey ? <ChevronUp /> : <ChevronDown />}
    </Button>
  );
};
