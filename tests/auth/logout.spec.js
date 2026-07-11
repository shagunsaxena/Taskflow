import { test, expect } from "@playwright/test";

test.describe("Logout Feature", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page
    await page.goto("/login");

    // Enter valid demo credentials
    await page.getByLabel("Email Address").fill("admin@taskflow.com");

    await page.getByLabel("Password").fill("password123");

    // Submit login form
    await page.getByRole("button", { name: "Login" }).click();

    // Verify successful navigation to dashboard
    await expect(page).toHaveURL(/\/dashboard$/);

  });

  test("should logout authenticated user and redirect to login page", async ({ page }) => {
    // Click logout
    await page.getByRole("button", { name: "Logout" }).click();

    // Verify redirect
    await expect(page).toHaveURL(/\/login$/);

    // Verify login page is displayed
    await expect(page.getByRole("heading", { name: "TaskFlow" })).toBeVisible();

  });

  test("should prevent access to dashboard after logout", async ({ page }) => {
    // Logout
    await page.getByRole("button", { name: "Logout" }).click();

    await expect(page).toHaveURL(/\/login$/);

    // Try accessing protected dashboard again
    await page.goto("/dashboard");

    // ProtectedRoute should redirect back to login
    await expect(page).toHaveURL(/\/login$/);
  });
});