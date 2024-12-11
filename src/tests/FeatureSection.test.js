import React from "react";
import { render, screen } from "@testing-library/react";

// Mock CSS imports
jest.mock("../styles/style.css", () => {});

import FeatureSection from "../components/FeatureSection";

describe("FeatureSection Component", () => {
  test("renders FeatureSection correctly", () => {
    render(<FeatureSection />);

    // Check for feature names
    expect(screen.getByText(/Repair/i)).toBeInTheDocument();
    expect(screen.getByText(/Improve/i)).toBeInTheDocument();
    expect(screen.getByText(/Maintain/i)).toBeInTheDocument();

  });
});
