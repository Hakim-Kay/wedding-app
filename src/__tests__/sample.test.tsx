import { render, screen } from '@testing-library/react';

describe('Sample Test', () => {
    it('renders a heading', () => {
        render(<h1>Hello, Wedding App!</h1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('Hello, Wedding App!');
    });
});