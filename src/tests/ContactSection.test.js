import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/style.css", () => {});

import ContactSection from "../components/ContactSection";

describe("ContactSection Component", () => {
  test("renders ContactSection correctly", () => {
    render(<ContactSection />);

    // Check for heading
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    // Check for form fields
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();

    // Check for the SEND button
    expect(screen.getByRole("button", { name: /SEND/i })).toBeInTheDocument();

    // Check for map iframe
    expect(screen.getByTitle(/Google Map/i)).toBeInTheDocument();
  });
});
