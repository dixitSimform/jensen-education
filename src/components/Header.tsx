import { Dropdown, Stack } from "react-bootstrap";
import { ChevronDown } from "../icons/ChevronDown";
import UserAvatar from "../images/avatar.jpg";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="px-4 py-4 border-bottom mb-3">
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
            <ChevronDown width="14" height="14" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
    </header>
  );
};
