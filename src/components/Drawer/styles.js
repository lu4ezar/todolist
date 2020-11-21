import styled from "styled-components";
import { ListColor } from "../../utils/color";

const Content = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.side === "left" ? "flex-end" : "flex-start"};
  background-color: ${ListColor.background};
`;

export default Content;
