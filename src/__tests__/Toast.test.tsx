import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Toast, ToastProps, ToastType } from "../components/Toast";

test("renders toast with success message", () => {
  const toastProps: ToastProps = {
    type: ToastType.SUCCESS,
    message: "Success",
  };

  render(<Toast {...toastProps} />);

  const toastElement = screen.getByText("Success");
  expect(toastElement).toBeTruthy();
});

test("renders toast with danger message and description", () => {
  const toastProps: ToastProps = {
    type: ToastType.DANGER,
    message: "Attention",
    description: "This is a critical error.",
  };

  render(<Toast {...toastProps} />);

  const toastElement = screen.getByText("Attention");
  expect(toastElement).toBeTruthy();

  const descriptionElement = screen.getByText("This is a critical error.");
  expect(descriptionElement).toBeTruthy();
});

test("renders toast with avatar message and CTA button", () => {
  const toastProps: ToastProps = {
    type: ToastType.AVATAR,
    message: "John Doe",
    description: "New message received",
    cta: true,
  };

  render(<Toast {...toastProps} />);

  const toastElement = screen.getByText("John Doe");
  expect(toastElement).toBeTruthy();

  const descriptionElement = screen.getByText("New message received");
  expect(descriptionElement).toBeTruthy();

  const ctaButton = screen.getByTestId("cta-type");
  expect(ctaButton).toBeTruthy();
});
