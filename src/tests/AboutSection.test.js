import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/bootstrap.css", () => {});
jest.mock("../styles/font-awesome.min.css", () => {});
jest.mock("../styles/responsive.css", () => {});
jest.mock("../styles/style.css", () => {});

import AboutSection from "../components/AboutSection";

describe("AboutSection Component", () => {
  test("renders AboutSection correctly", () => {
    render(<AboutSection />);

    // Check for heading
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

    // Check for paragraph text
    expect(
      screen.getByText(/There are many variations of passages of Lorem Ipsum available/i)
    ).toBeInTheDocument();

    // Check for the 'Read More' link
    const linkElement = screen.getByRole("link", { name: /Read More/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");

    // Check for the image
    const imageElement = screen.getByAltText(/About Us/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "images/about-img.jpg");
  });
});
