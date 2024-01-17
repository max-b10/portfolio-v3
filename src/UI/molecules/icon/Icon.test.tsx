import { composeStories } from "@storybook/testing-react";
import { fireEvent, render } from "@testing-library/react";

import * as stories from "./Icon.stories";

const { GitHub, GitHubWithToolTip } = composeStories(stories);

it("Check if Icon render", () => {
  const { getByAltText } = render(<GitHub {...GitHub.args} />);

  const icon = getByAltText("github");
  expect(icon).toBeDefined();
});

it("Check if tooltip is enabled", async () => {
  const { getByAltText, queryByText } = render(
    <GitHubWithToolTip {...GitHubWithToolTip.args} />
  );

  const icon = getByAltText("GitHub Icon");

  expect(icon).toBeDefined();
  expect(queryByText("tooltip-title")).toBeNull();
  fireEvent.mouseEnter(icon);
  expect(queryByText("tooltip-title")).not.toBeNull();
  fireEvent.mouseLeave(icon);
  expect(queryByText("tooltip-title")).toBeNull();
});
