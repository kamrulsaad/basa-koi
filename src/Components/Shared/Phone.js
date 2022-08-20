import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export default function Phone() {
    return (
        <Menu>
            <MenuHandler>
                <Button variant="gradient">Contact Seller</Button>
            </MenuHandler>
            <MenuList>
                <MenuItem><a href="tel:+8801746205096">Service No.1</a></MenuItem>
                <MenuItem><a href="tel:+8801784133136">Service No.2</a></MenuItem>
            </MenuList>
        </Menu>
    );
}