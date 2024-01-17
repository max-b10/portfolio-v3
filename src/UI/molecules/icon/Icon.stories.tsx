import { StoryObj, Meta } from "@storybook/react";

import { Icon } from "./Icon";
import { Tooltip } from "primereact/tooltip";

const meta: Meta<typeof Icon> = {
  title: "Example/Icon",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const GitHub: Story = {
  args: {
    iconName: "github.svg",
  },
};

export const GitHubWithToolTip: Story = {
  args: {
    iconName: "github.svg",
    title: "GitHub Icon",
    tooltip: (
      <>
        <Tooltip target={`.tooltip-c`} />
      </>
    ),
    tooltipProps: {
      className: "tooltip-c",
      "data-pr-tooltip": "tooltip-title",
    },
  },
};
