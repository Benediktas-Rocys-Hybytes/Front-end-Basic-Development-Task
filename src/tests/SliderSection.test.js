import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/style.css", () => {});

import SliderSection from "../components/SliderSection";

describe("SliderSection Component", () => {
  test("renders SliderSection correctly", () => {
    render(<SliderSection />);

    // Check for heading
    expect(
      screen.getByText(/Repair and Maintenance Services/i)
    ).toBeInTheDocument();

    // Check for paragraph text
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet consectetur adipisicing elit/i
      )
    ).toBeInTheDocument();

    // Check for "Contact Us" link
    const linkElement = screen.getByRole("link", { name: /Contact Us/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");

    // Check for image
    const imageElement = screen.getByAltText(/Slider/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "images/slider-img.png");
  });
});
