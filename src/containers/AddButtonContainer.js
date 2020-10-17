// @flow
import { connect } from "react-redux";
import AddButton from "../elements/AddButton";
import setMode from "../redux/actions/mode";
import type { Dispatch } from "../types";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMode: () => dispatch(setMode("form")),
});

export default connect(null, mapDispatchToProps)(AddButton);
