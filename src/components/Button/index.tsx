import React from "react";
import styled from "styled-components";

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

const StyledButton = styled.button<Omit<ButtonProps, "label">>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          color: white;
          background-color: #1ea7fd;
        `;
      case "secondary":
        return `
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `;
      default:
        return `
          color: white;
          background-color: #1ea7fd;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          font-size: 12px;
          padding: 10px 16px;
        `;
      case "large":
        return `
          font-size: 16px;
          padding: 12px 24px;
        `;
      default:
        return `
          font-size: 14px;
          padding: 11px 20px;
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
}; 