import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../src/pages/login/index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Login", () => {
  it("submits form with correct data", async () => {
    useRouter.mockReturnValue({});

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(JSON.stringify({})),
      status: 200,
    });

    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "admin@admin.com" } });
    fireEvent.change(passwordInput, { target: { value: "P@ssw0rd" } });

    fireEvent.click(getByText("LOG IN"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://192.168.1.5:8080/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "admin@admin.com",
            password: "P@ssw0rd",
          }),
        }
      );
    });
  });
});
