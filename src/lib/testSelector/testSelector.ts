export enum ElementName {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  COLUMN = "column",
  INPUT = "lbl",
  DROPDOWN = "ddl",
  BUTTON = "btn",
  LABEL = "lb",
  CHECKBOX = "checkbox",
  IMAGE = "img",
  TAG = "tag",
  FORM = "form",
  li = "li",
}

export const setTestSelector = (name: string, label: string) => {
  return { "data-test": `${name}_${titleToSnake(label)}`.toLowerCase() };
};

export const titleToSnake = (title: string): string => {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("_");
};
