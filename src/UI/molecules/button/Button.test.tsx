import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './Button.stories';
import { userEvent } from '@storybook/testing-library';

const { Primary, Secondary } = composeStories(stories);

it('Checks if the button click function is called', () => {
  const clickFn = jest.fn();
  const { getByText } = render(<Primary {...Primary.args} onClick={clickFn} />);

  userEvent.click(getByText('Primary Button'));
  expect(clickFn).toHaveBeenCalled();
});

it('Render secondary button', () => {
  const { getByText } = render(<Secondary {...Secondary.args} />);

  const button = getByText('Secondary Button');
  expect(button).toBeDefined();
});
