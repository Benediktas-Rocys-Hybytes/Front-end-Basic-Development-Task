import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/style.css", () => {});

import ServiceSection from "../components/ServiceSection";

describe("ServiceSection Component", () => {
  test("renders ServiceSection correctly", () => {
    render(<ServiceSection />);

    // Check for heading
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();

    // Check for service titles
    expect(screen.getByText(/Maintenance/i)).toBeInTheDocument();
    expect(screen.getByText(/Electrical/i)).toBeInTheDocument();
    expect(screen.getByText(/Plumbing/i)).toBeInTheDocument();

    // Check for service descriptions
    expect(
      screen.getAllByText(/The point of using Lorem Ipsum is that it has a more-or-less normal layout./i).length
    ).toBe(3);

    // Check for "View More" button
    const buttonElement = screen.getByRole("link", { name: /View More/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("href", "/");
  });
});
