import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/style.css", () => {});

import ProfessionalSection from "../components/ProfessionalSection";

describe("ProfessionalSection Component", () => {
  test("renders ProfessionalSection correctly", () => {
    render(<ProfessionalSection />);

    // Check for heading
    expect(
      screen.getByText(/We Provide Professional Home Services/i)
    ).toBeInTheDocument();

    // Check for paragraph text
    expect(
      screen.getByText(
        /Randomised words which don't look even slightly believable/i
      )
    ).toBeInTheDocument();

    // Check for "Read More" link
    const linkElement = screen.getByRole("link", { name: /Read More/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");

    // Check for image
    const imageElement = screen.getByAltText(/Professional Services/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "images/professional-img.png");
  });
});
