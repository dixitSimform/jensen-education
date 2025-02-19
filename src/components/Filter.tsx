import { useState } from "react";
import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

export const Filter = () => {
  const [role, setRole] = useState([3]);
  const [unit, setUnit] = useState([2]);
  const [cls, setCls] = useState([1]);

  const handleRole = (role) => setRole(role);
  const handleUnit = (unit) => setUnit(unit);
  const handleClass = (cls) => setCls(cls);

  return (
    <Stack gap={3}>
      <Stack
        gap={2}
        className="border-bottom pb-3 pt-1 justify-content-between"
        direction="horizontal"
      >
        <h3 className="h5 text-uppercase mb-0">Filter</h3>
        <Button
          className="text-uppercase fw-bold border-0 px-1 px-2 text-xs"
          variant="outline-primary"
        >
          Clear All
        </Button>
      </Stack>

      <Stack gap={2}>
        <h4 className="h6 mb-1">Role</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={role}
          onChange={handleRole}
          className="d-block"
        >
          <ToggleButton
            id="tbg-btn-1"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            value={1}
            bsPrefix="btn-check btn-selection"
          >
            Student
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={2}
          >
            Caretaker
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-3"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={3}
          >
            Teacher
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-4"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={4}
          >
            Teacher
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack gap={2}>
        <h4 className="h6 mb-1">Unit</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={unit}
          onChange={handleUnit}
          className="d-block"
        >
          <ToggleButton
            id="tbg-btn-1"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            value={1}
            bsPrefix="btn-check btn-selection"
          >
            Gymnasium
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={2}
          >
            Preeschool
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-3"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={3}
          >
            High School
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack gap={2}>
        <h4 className="h6 mb-1">Class</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={cls}
          onChange={handleClass}
          className="d-block"
        >
          <ToggleButton
            id="tbg-btn-1"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            value={1}
            bsPrefix="btn-check btn-selection"
          >
            Mathematic 1
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-2"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={2}
          >
            Language 2
          </ToggleButton>
          <ToggleButton
            id="tbg-btn-3"
            className="btn-selection me-2 mb-2"
            variant="toggle-checkbox"
            bsPrefix="btn-check btn-selection"
            value={3}
          >
            Science 1
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
