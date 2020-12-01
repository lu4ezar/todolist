import createMockReactiveVar from "../createMockReactiveVar";
import { initialValue } from "../../cache";

const mockFilterVar = createMockReactiveVar(initialValue);

export default mockFilterVar;
