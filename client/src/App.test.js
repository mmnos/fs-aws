import React from "react";
import { render } from "@testing-library/react";
import Saved from "./pages/Saved";

test("renders learn react link", () => {
  const { getByText } = render(<Saved />);
  const linkElement = getByText(/Saved/i);
  expect(linkElement).toBeInTheDocument();
});
