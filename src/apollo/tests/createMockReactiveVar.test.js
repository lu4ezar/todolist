import mockModeVar from "./mocks/mockModeVar";

const LIST = "list";
const FORM = "form";

describe("Testing mock reactive variables", () => {
  beforeEach(() => mockModeVar(LIST));

  it("should set the current value if provided", () => {
    mockModeVar(FORM);
    expect(mockModeVar()).toEqual(FORM);
  });

  it("should overwrite the current value", () => {
    mockModeVar(LIST);
    expect(mockModeVar()).toEqual(LIST);

    mockModeVar(FORM);
    expect(mockModeVar()).toEqual(FORM);
  });

  it("should not overwrite the current value if no value provided", () => {
    mockModeVar(LIST);
    expect(mockModeVar()).toEqual(LIST);

    mockModeVar();
    expect(mockModeVar()).toEqual(LIST);
  });
});
