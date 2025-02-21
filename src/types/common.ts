export interface BreadcrumbItem {
  label: string;
  link?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
export interface ContextAwareToggleProps {
  eventKey: string;
  callback?: (eventKey: string) => void;
}

export interface DialogProps {
  size?: "sm" | "lg" | "xl";
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  buttonText?: string;
  children?: React.ReactNode;
  onSubmit: () => void; // Added onSubmit function as a prop
}

export interface NoDataProps {
  title?: string;
  description?: string;
}

export interface PageNumbersProps {
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}