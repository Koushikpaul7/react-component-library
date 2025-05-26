import React from "react";
export interface ButtonProps {
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
export declare const Button: React.FC<ButtonProps>;
