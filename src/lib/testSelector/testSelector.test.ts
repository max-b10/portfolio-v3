import { expect } from "@jest/globals";
import { titleToSnake, setTestSelector, ElementName } from "./testSelector";

describe("Test convert Title Case to snakeCase", () => {
  test("Should return lower case characters", () => {
    expect(titleToSnake("Fullname")).toBe("fullname");
  });

  test("Should return full_name", () => {
    expect(titleToSnake("Full name")).toBe("full_name");
    expect(titleToSnake("Full Name")).toBe("full_name");
  });

  test("Should return test_full_name", () => {
    expect(titleToSnake("Test Full Name")).toBe("test_full_name");
    expect(titleToSnake("test full Name")).toBe("test_full_name");
  });
});

describe("Test setTestSelector object", () => {
  test("Should return object of data-test: lowercase", () => {
    expect(setTestSelector("h1", "Header")).toEqual({
      "data-test": "h1_header",
    });
  });

  test("Should return object of data-test match with selector", () => {
    expect(setTestSelector(ElementName.h1, "Pref")).toEqual({
      "data-test": "h1_pref",
    });
    expect(setTestSelector(ElementName.h2, "Pref")).toEqual({
      "data-test": "h2_pref",
    });
    expect(setTestSelector(ElementName.h3, "Pref")).toEqual({
      "data-test": "h3_pref",
    });
    expect(setTestSelector(ElementName.h4, "Pref")).toEqual({
      "data-test": "h4_pref",
    });
    expect(setTestSelector(ElementName.h5, "Pref")).toEqual({
      "data-test": "h5_pref",
    });
    expect(setTestSelector(ElementName.h6, "Pref")).toEqual({
      "data-test": "h6_pref",
    });
    expect(setTestSelector(ElementName.COLUMN, "Pref")).toEqual({
      "data-test": "column_pref",
    });
    expect(setTestSelector(ElementName.INPUT, "Pref")).toEqual({
      "data-test": "lbl_pref",
    });
    expect(setTestSelector(ElementName.DROPDOWN, "Pref")).toEqual({
      "data-test": "ddl_pref",
    });
    expect(setTestSelector(ElementName.BUTTON, "Pref")).toEqual({
      "data-test": "btn_pref",
    });
    expect(setTestSelector(ElementName.LABEL, "Pref")).toEqual({
      "data-test": "lb_pref",
    });
    expect(setTestSelector(ElementName.CHECKBOX, "Pref")).toEqual({
      "data-test": "checkbox_pref",
    });
    expect(setTestSelector(ElementName.IMAGE, "Pref")).toEqual({
      "data-test": "img_pref",
    });
    expect(setTestSelector(ElementName.TAG, "Pref")).toEqual({
      "data-test": "tag_pref",
    });
    expect(setTestSelector(ElementName.FORM, "Pref")).toEqual({
      "data-test": "form_pref",
    });
  });
});

export {};
