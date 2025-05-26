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

interface ButtonProps {
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button variant
     */
    variant?: "primary" | "secondary";
    /**
     * Button size
     */
    size?: "small" | "medium" | "large";
}
declare const Button: React.FC<ButtonProps>;

export { Button, Page };
export type { ButtonProps };
