import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Page from '.';

describe('Page', () => {
    it('should render', () => {
        const title = 'Page Title';
        const children = 'Page Content';
        const { getByText } = render(<Page title={title}>{children}</Page>);

        const titleElement = getByText(title);
        const childrenElement = getByText(children);

        expect(titleElement).toBeInTheDocument();
        expect(childrenElement).toBeInTheDocument();
    });

    it('should render title and children', () => {
        const title = 'Page Title';
        const children = 'Page Content';
        const { getByText } = render(<Page title={title}>{children}</Page>);

        const titleElement = getByText(title);
        const childrenElement = getByText(children);

        expect(titleElement).toBeInTheDocument();
        expect(childrenElement).toBeInTheDocument();
    });

    it('should render correct styling', () => {
        const title = 'Page Title';
        const children = 'Page Content';
        const { getByTestId } = render(<Page title={title}>{children}</Page>);

        const container = getByTestId('page-container');
        console.log(container.style.cssText); // Log the applied styles

        expect(container).toHaveStyle(`
            background: #f5f5f5;
            padding: 1rem;
            max-width: 1200px;
        `);
    });
});

