import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header"; 

// Mock CSS imports
jest.mock("../styles/bootstrap.css", () => {});
jest.mock("../styles/font-awesome.min.css", () => {});
jest.mock("../styles/responsive.css", () => {});
jest.mock("../styles/style.css", () => {});

describe("Header Component", () => {
  test("renders contact information", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check for contact links
    expect(screen.getByText(/Call : \+01 123455678990/i)).toBeInTheDocument();
    expect(screen.getByText(/Email : demo@gmail.com/i)).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check for navigation links
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  test("navigation links have correct paths", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check link paths
    expect(screen.getByText(/Home/i).closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText(/About/i).closest("a")).toHaveAttribute("href", "/about");
    expect(screen.getByText(/Services/i).closest("a")).toHaveAttribute("href", "/services");
    expect(screen.getByText(/Contact Us/i).closest("a")).toHaveAttribute("href", "/contact");
  });
});
