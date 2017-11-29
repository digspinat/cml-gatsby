import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: "BMW", path: "/", exact: true, icon: "home", inverted: true },
  { name: "Audi", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: true, icon: "info circle" }
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";
    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {isHome ? null : <Segment vertical inverted textAlign="center" className=""><HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
          /></Segment>}
          <div style={{backgroundColor: "#7a8690"}}>
            {/* Render children pages */}
            <div style={{ paddingBottom: 60, backgroundColor: "white", maxWidth: "1300px", margin: "0 auto", minHeight: "100vh"}}>
              {this.props.children()}
            </div>
          </div>
          {/* Footer */}
          <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "#212529" }}>
            <Container textAlign="center">
              <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
