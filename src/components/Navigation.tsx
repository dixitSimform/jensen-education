import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `link ${isActive ? "text-secondary" : "text-white text-decoration-none"}`;

  return (
    <nav className="w-100 flex-shrink-0 bg-primary p-4 navigation">
      <Stack className="px-2 py-3" gap={3}>
        <div className="text-uppercase text-white fw-semibold ls-3 mb-4">
          Helsingborg
        </div>
        <Stack gap={3}>
          <NavLink className={getLinkClass} to="/">
            Persons
          </NavLink>
          <NavLink className={getLinkClass} to="/courses">
            Courses
          </NavLink>
          <NavLink className={getLinkClass} to="/styleguide">
            Styleguide
          </NavLink>
        </Stack>
      </Stack>
    </nav>
  );
};
