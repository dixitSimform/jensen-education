import { useState } from "react";
import { Button, Stack, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { ROLES, UNITS, CLASSES, DEPARTMENTS } from "../../constants/filters"; // Import constants

interface FilterProps {
  onFilterChange: (filterName: string, value: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [role, setRole] = useState<string[]>([]); // Default as empty array
  const [unit, setUnit] = useState<string[]>([]); // Default as empty array
  const [cls, setCls] = useState<string[]>([]); // Default as empty array
  const [department, setDepartment] = useState<string[]>([]); // Default as empty array

  // Handle Role Change (multiple selection)
  const handleRole = (selectedRoles: string[]) => {
    setRole(selectedRoles);
    onFilterChange("role", selectedRoles); // Pass selected roles to parent component
  };

  // Handle Unit Change (multiple selection)
  const handleUnit = (selectedUnits: string[]) => {
    setUnit(selectedUnits);
    onFilterChange("unit", selectedUnits); // Pass selected units to parent component
  };

  // Handle Class Change (multiple selection)
  const handleClass = (selectedClasses: string[]) => {
    setCls(selectedClasses);
    onFilterChange("cls", selectedClasses); // Pass selected classes to parent component
  };

  // Handle Department Change (multiple selection)
  const handleDepartment = (selectedDepartments: string[]) => {
    setDepartment(selectedDepartments);
    onFilterChange("department", selectedDepartments); // Pass selected departments to parent component
  };

  // Clear all selected filters
  const handleClearAll = () => {
    setRole([]);
    setUnit([]);
    setCls([]);
    setDepartment([]);
    onFilterChange("role", []);
    onFilterChange("unit", []);
    onFilterChange("cls", []);
    onFilterChange("department", []); // Reset all filters
  };

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
          onClick={handleClearAll}
        >
          Clear All
        </Button>
      </Stack>

      {/* Role */}
      <Stack gap={2}>
        <h4 className="h6 mb-1">Role</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={role}
          onChange={handleRole}
          className="d-block"
        >
          {ROLES.map((roleOption) => (
            <ToggleButton
              id={`tbg-btn-${roleOption.value}`}
              key={roleOption.value}
              className="btn-selection me-2 mb-2"
              variant="toggle-checkbox"
              bsPrefix="btn-check btn-selection"
              value={roleOption.value}
            >
              {roleOption.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      {/* Unit */}
      <Stack gap={2}>
        <h4 className="h6 mb-1">Unit</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={unit}
          onChange={handleUnit}
          className="d-block"
        >
          {UNITS.map((unitOption) => (
            <ToggleButton
              id={`tbg-btn-${unitOption.value}`}
              key={unitOption.value}
              className="btn-selection me-2 mb-2"
              variant="toggle-checkbox"
              bsPrefix="btn-check btn-selection"
              value={unitOption.value}
            >
              {unitOption.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      {/* Class */}
      <Stack gap={2}>
        <h4 className="h6 mb-1">Class</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={cls}
          onChange={handleClass}
          className="d-block"
        >
          {CLASSES.map((classOption) => (
            <ToggleButton
              id={`tbg-btn-${classOption.value}`}
              key={classOption.value}
              className="btn-selection me-2 mb-2"
              variant="toggle-checkbox"
              bsPrefix="btn-check btn-selection"
              value={classOption.value}
            >
              {classOption.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      {/* Department */}
      <Stack gap={2}>
        <h4 className="h6 mb-1">Department</h4>
        <ToggleButtonGroup
          type="checkbox"
          value={department}
          onChange={handleDepartment}
          className="d-block"
        >
          {DEPARTMENTS.map((departmentOption) => (
            <ToggleButton
              id={`tbg-btn-${departmentOption.value}`}
              key={departmentOption.value}
              className="btn-selection me-2 mb-2"
              variant="toggle-checkbox"
              bsPrefix="btn-check btn-selection"
              value={departmentOption.value}
            >
              {departmentOption.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
