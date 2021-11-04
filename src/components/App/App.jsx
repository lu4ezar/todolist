// @flow
import * as React from "react";
import { CssBaseline } from "@material-ui/core";
import { useApolloClient, useReactiveVar } from "@apollo/client";
import AddForm from "../../containers/Form";
import VisibleList from "../../containers/List";
import SidePanel from "../SidePanel";
import Navbar from "../Navbar";
import Login from "../Login";
import { StyledApp, StyledContainer } from "./styles";
import { isLoggedInVar, errorVar } from "../../apollo/cache";
import Error from "../Error/Error";

const App = (): React.Node => {
  const client = useApolloClient();
  const [showPanel, toggleShowPanel] = React.useState(false);
  const togglePanel = () => toggleShowPanel(!showPanel);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const error = useReactiveVar(errorVar);
  React.useEffect(() => {
    localStorage.removeItem("user");
    client.resetStore();
  }, [client]);
  return (
    <StyledApp>
      <CssBaseline />
      <StyledContainer maxWidth="sm">
        <Navbar onClick={togglePanel} />
        {error && <Error error={error} />}
        {isLoggedIn ? (
          <>
            <SidePanel open={showPanel} togglePanel={togglePanel} />
            <AddForm />
            <VisibleList />
          </>
        ) : (
          <Login />
        )}
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
