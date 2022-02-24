import { render } from '@testing-library/react';

import { Example } from '../../../src/components/Example';

describe('Example component - React unit testing example', () => {
  it('should render the component', () => {
    const { getByText } = render(<Example />);

    const exampleElement = getByText('Example');
    expect(exampleElement).toBeInTheDocument();
  });
});
