import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

// HeaderSection with padding adjustments for responsiveness
export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;
  text-align: right;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }

  .ant-row-space-between {
    align-items: center;
    text-align: right;
  }
`;

// LogoContainer aligned properly for small screens
export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center; /* Center logo on smaller screens */
  }
`;

// NavLink with responsive adjustments
export const NavLink = styled("div")`
  display: inline-block;
  text-align: right;

  @media only screen and (max-width: 768px) {
    text-align: center; /* Center text on smaller screens */
  }
`;

// CustomNavLink with width adjustments for different screen sizes
export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

// Burger menu only displayed on small screens
export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block; /* Display burger icon on small screens */
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

// NotHidden only visible on larger screens
export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

// Menu with responsive font size
export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: right;

  @media only screen and (max-width: 768px) {
    text-align: center; /* Center text on small screens */
    font-size: 1.25rem; /* Reduce font size */
  }
`;

// CustomNavLinkSmall with margin adjustments for small screens
export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin: 1.25rem 0; /* Adjust margins for small screens */
  }
`;

// Label adjusted for text alignment and responsiveness
export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-align: right;

  @media only screen and (max-width: 768px) {
    text-align: center;
    justify-content: center; /* Center the label on small screens */
  }
`;

// Icon size stays the same
export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

// Span with hover effect
export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
