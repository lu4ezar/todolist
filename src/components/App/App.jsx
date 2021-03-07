// @flow
import * as React from "react";
import { CssBaseline } from "@material-ui/core";
import AddForm from "../../containers/Form";
import VisibleList from "../../containers/List";
// import Notification from "../../containers/Notification";
import SidePanel from "../SidePanel";
import Navbar from "../Navbar";
import AddButton from "../AddButton";
import { StyledApp, StyledContainer } from "./styles";

const App = (): React.Node => {
  const [showPanel, toggleShowPanel] = React.useState(false);
  const togglePanel = () => toggleShowPanel(!showPanel);
  return (
    <StyledApp>
      <CssBaseline />
      <StyledContainer maxWidth="sm">
        <Navbar onClick={togglePanel} />
        <SidePanel open={showPanel} togglePanel={togglePanel} />
        <AddForm />
        <VisibleList />
        <AddButton entity="todo" />
        <AddButton entity="checklist" />
        {/* <Notification /> */}
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
