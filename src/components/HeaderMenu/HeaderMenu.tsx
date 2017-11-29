import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon } from "semantic-ui-react";
import { MenuProps } from "../Menu";
import "../../css/styles.css";
import "../../css/responsive.css";
import "../../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";

interface HeaderMenuProps extends MenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, dispatch, inverted }: HeaderMenuProps) =>
  <Container>
      <Menu style={{ marginTop: "30px" }} size="large" pointing secondary inverted>
        <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())} />
        <Menu.Menu position="right">
          {items.map((item) => {
            const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
            return <Menu.Item
              as={Link}
              className="mobile hidden"
              name={item.name}
              to={item.path}
              key={item.path}
              active={active}
              position="right"
            />;
          })}
        </Menu.Menu>
      </Menu>
  </Container>;

export default connect()(HeaderMenu);
