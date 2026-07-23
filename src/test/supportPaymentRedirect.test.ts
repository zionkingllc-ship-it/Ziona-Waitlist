import { describe, it, expect } from "vitest";
import { getSupportPaymentRedirectState } from "../lib/supportPaymentRedirect";

describe("getSupportPaymentRedirectState", () => {
  it("returns a success state for successful Stripe redirects", () => {
    expect(
      getSupportPaymentRedirectState(
        "https://example.com/support?payment=success",
      ),
    ).toEqual({
      type: "success",
      message: "Payment completed successfully.",
    });
  });

  it("returns an error state for cancelled or failed Stripe redirects", () => {
    expect(
      getSupportPaymentRedirectState(
        "https://example.com/support?payment=cancelled",
      ),
    ).toEqual({
      type: "error",
      message: "Your payment was cancelled. No charge was made.",
    });
  });

  it("detects Stripe success paths like /support/success", () => {
    expect(
      getSupportPaymentRedirectState(
        "https://example.com/support/success?checkoutSessionId=cs_test_123",
      ),
    ).toEqual({
      type: "success",
      message: "Payment completed successfully.",
    });
  });
});
