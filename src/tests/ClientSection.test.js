import React from "react";
import { render, screen } from "@testing-library/react";
import ClientSection from "../components/ClientSection";

// Mock the react-slick component
jest.mock("react-slick", () => {
  return ({ children }) => <div>{children}</div>;
});

// Mock the CSS imports
jest.mock("slick-carousel/slick/slick.css", () => {});
jest.mock("slick-carousel/slick/slick-theme.css", () => {});

describe("ClientSection Component", () => {
  it("renders the heading", () => {
    render(<ClientSection />);
    const heading = screen.getByText("What Our Clients Say");
    expect(heading).toBeInTheDocument();
  }); 

  it("renders client images", () => {
    render(<ClientSection />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
    expect(images[0]).toHaveAttribute("src", "images/client-1.jpg");
  });
});
