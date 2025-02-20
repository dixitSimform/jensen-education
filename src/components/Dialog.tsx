import { Button, Modal, Stack } from "react-bootstrap";
import { ArrowRight } from "../icons/ArrowRight";

interface DialogProps {
  size?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  buttonText?: string;
  children?: React.ReactNode;
}

export const Dialog = ({
  size = "lg",
  isOpen,
  onClose,
  title,
  buttonText,
  children,
}: DialogProps) => {
  return (
    <Modal show={isOpen} onHide={onClose} size={size} contentClassName="p-lg-5">
      <Stack className="p-4 m-md-2">
        <Modal.Header closeButton className="pb-3 mb-4 border-b-style-dashed">
          <Modal.Title className="text-uppercase">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer className="pt-4 mt-md-1">
          <Button
            variant="secondary"
            className="w-100 m-0 text-uppercase fw-bold ls-3 text-white d-flex align-items-center justify-content-center gap-2"
            size="lg"
            onClick={onClose}
          >
            {buttonText}
            <ArrowRight />
          </Button>
        </Modal.Footer>
      </Stack>
    </Modal>
  );
};
