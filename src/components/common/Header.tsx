import { Dropdown, Stack } from "react-bootstrap";
import { ChevronDown } from "../icons/ChevronDown";
import UserAvatar from "../../assets/images/avatar.jpg";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="p-md-4 p-3 border-bottom mb-3">
      <Stack gap={2} direction="horizontal" className="py-1">
        <h1 className="h4 text-uppercase mb-0 me-auto">{title}</h1>
        <Dropdown>
          <Dropdown.Toggle
            as={"button"}
            bsPrefix="p-0 d-flex gap-2 align-items-center border-0 bg-transparent"
          >
            <div className="overflow-hidden position-relative rounded-circle w-32px h-32px">
              <img
                src={UserAvatar}
                alt="User name"
                className="w-100 h-100 object-fit-cover rounded-circle"
              />
            </div>
            <ChevronDown width="12" height="7" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/">Persons</Dropdown.Item>
            <Dropdown.Item href="/courses">Courses</Dropdown.Item>
            <Dropdown.Item href="/styleguide">Styleguide</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
    </header>
  );
};
