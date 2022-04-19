import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("Renders button", () => {
  render(<Button>Button</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button have text", async () => {
  render(<Button>SomeText</Button>);
  expect(screen.getByRole("button")).toHaveTextContent("SomeText");
});

test("Renders button with type", () => {
  render(<Button type="submit">Hello</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("type", "submit");
});

test("onClick event", async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>SomeText</Button>);

  fireEvent.click(screen.getByRole("button"), {
    target: { value: "JavaScript" },
  });
  expect(onClick).toHaveBeenCalledTimes(1);
});
