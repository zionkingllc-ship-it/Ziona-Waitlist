export type SupportPaymentRedirectState = {
  type: "success" | "error";
  message: string;
};

export const getSupportPaymentRedirectState = (
  url: string,
): SupportPaymentRedirectState | null => {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    const paymentState = parsedUrl.searchParams.get("payment");
    const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1]?.toLowerCase();

    if (paymentState === "success" || lastSegment === "success") {
      return {
        type: "success",
        message: "Payment completed successfully.",
      };
    }

    if (
      paymentState === "cancelled" ||
      paymentState === "failed" ||
      lastSegment === "cancel" ||
      lastSegment === "cancelled"
    ) {
      return {
        type: "error",
        message: "Your payment was cancelled. No charge was made.",
      };
    }
  } catch {
    return null;
  }

  return null;
};
