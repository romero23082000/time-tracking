import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export const MenuCard: React.FC<Props> = () => {
  return (
    <Menu>
      <MenuButton>
        <FontAwesomeIcon icon={faEllipsis} style={{ fontSize: "20px" }} />
      </MenuButton>
      {/* <MenuList backgroundColor="var(--background-second-card)">
        <MenuItem
          background="--background-second-card"
          _hover={{ backgroundColor: "var(--text-first-card)" }}
        >
          Editar
        </MenuItem>
        <MenuItem
          background="--background-second-card"
          _hover={{ backgroundColor: "var(--text-first-card)" }}
        >
          Eliminar
        </MenuItem>
      </MenuList> */}
    </Menu>
  );
};
