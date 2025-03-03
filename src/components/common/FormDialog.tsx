// Dialog.tsx
import { Button, Modal, Stack } from "react-bootstrap";
import { ArrowRight } from "../icons/ArrowRight";
import { DialogProps } from "../../types/common";

export const FormDialog = ({
  size = "lg",
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  onSubmit, // Destructure the onSubmit function
}: DialogProps) => {
  return (
    <Modal show={isOpen} onHide={onClose} size={size} contentClassName="p-lg-5">
      <Stack className="p-4 m-md-2">
        <Modal.Header closeButton className="pb-3 mb-4 border-b-style-dashed">
          <Modal.Title className="text-uppercase">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer className="pt-4">
          <Button
            variant="secondary"
            className="w-100 m-0"
            size="lg"
            onClick={onSubmit} // Call the onSubmit function when the button is clicked
          >
            {buttonText}
            <ArrowRight className="ms-2 align-bottom" />
          </Button>
        </Modal.Footer>
      </Stack>
    </Modal>
  );
};
