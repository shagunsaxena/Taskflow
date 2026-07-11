import { test, expect } from "@playwright/test";

test.describe("Protected Route", () => {
  test("should redirect unauthenticated user from dashboard to login", async ({ page }) => {
    // Access protected dashboard directly
    await page.goto("/dashboard");

    // redirect to login
    await expect(page).toHaveURL(/\/login$/);

    // Verify login page is visible
    await expect(
      page.getByRole("heading", { name: "TaskFlow" })
    ).toBeVisible();

    await expect(
      page.getByRole("button", { name: "Login" })
    ).toBeVisible();
  });
});