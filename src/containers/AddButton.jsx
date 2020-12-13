// @flow
import * as React from "react";
import { modeVar } from "../apollo/cache";
import AddButton from "../components/AddButton";

export default () => <AddButton setMode={() => modeVar("form")} />;
