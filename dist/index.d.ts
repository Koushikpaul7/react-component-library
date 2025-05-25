import React, { ReactNode } from 'react';

/**
 * Props for the Page component
 */
interface PageProps {
    /** The title to display at the top of the page */
    title: string;
    /** The content to display in the page */
    children: ReactNode;
}

declare const Page: React.FC<PageProps>;

export { Page };
