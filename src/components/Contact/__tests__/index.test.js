import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('render', () => {
        render(<Contact />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('h1 is Contact me', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    it('button says submit', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('btntag')).toHaveTextContent('Submit');
    });
});