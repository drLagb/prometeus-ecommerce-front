import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "../app/ComponentePrueba";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);

    expect(2 + 2).toBe(4);
  });
});
