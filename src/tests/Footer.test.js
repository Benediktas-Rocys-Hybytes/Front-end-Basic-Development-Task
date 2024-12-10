import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer"; 

// Mock CSS imports
jest.mock("../styles/style.css", () => {});
jest.mock("../styles/font-awesome.min.css", () => {});

describe("Footer Component", () => {
  test("renders contact information", () => {
    render(<Footer />);

    // Check for location, phone, and email info
    expect(screen.getByText(/Lorem Ipsum is simply dummy text/i)).toBeInTheDocument();
    expect(screen.getByText(/\+02 1234567890/i)).toBeInTheDocument();
    expect(screen.getByText(/demo@gmail.com/i)).toBeInTheDocument();
  });

  test("renders copyright information", () => {
    render(<Footer />);

    // Check for the copyright text
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} All Rights Reserved By`)).toBeInTheDocument();
    expect(screen.getByText(/Free Html Templates/i)).toBeInTheDocument();
  });
});
