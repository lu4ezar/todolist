// @flow
import * as React from "react";
import styled from "styled-components";
import { ListColor } from "../utils/color";

type Props = {
  side: string,
  open: boolean,
  toggleDrawer: () => void,
  children: React.Node,
};

const Content = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.side === "left" ? "flex-end" : "flex-start"};
  background-color: ${ListColor.background};
`;

    <Content side={side}>
    </Content>
    <Divider />

export default Drawer;
