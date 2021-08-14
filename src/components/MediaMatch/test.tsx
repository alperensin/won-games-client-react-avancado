import { render, screen } from '@testing-library/react';

import MediaMatch from '.';

describe('<MediaMatch />', () => {
  it('Should render the heading', () => {
    const { container } = render(<MediaMatch />);

    expect(
      screen.getByRole('heading', { name: /MediaMatch/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
