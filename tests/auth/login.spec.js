import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
    
    test.beforeEach(async({ page }) => {
        await page.goto("/login");
    });

    test("should display the login page", async ({ page }) => {
        await expect(page.getByRole("heading", { name: "TaskFlow" })).toBeVisible();
        await expect(page.getByLabel("Email Address")).toBeVisible();
        await expect(page.getByLabel("Password")).toBeVisible();
        await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
    });

    test("should show required errors when submitting empty form", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByText("Email is required")).toBeVisible();
        await expect(page.getByText("Password is required")).toBeVisible();
    });

    test("should show validation error for invalid email", async ({ page }) => {
        await page.getByLabel("Email Address").fill("invalid-email");
        await page.getByLabel("Password").fill("password123");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page.getByText("Please enter a valid email address")).toBeVisible();
    });

    test("should show validation error for short password", async ({ page }) => {
    await page.getByLabel("Email Address").fill("test@example.com");
    await page.getByLabel("Password").fill("123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Password must be at least 8 characters")).toBeVisible();
  });

    test("should show error for incorrect credentials", async ({ page }) => {
    await page.getByLabel("Email Address").fill("wrong@example.com");
    await page.getByLabel("Password").fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Invalid email or password")).toBeVisible();
    });

    test("should login successfully with valid credentials", async ({ page }) => {
        await page.getByLabel("Email Address").fill("admin@taskflow.com");
        await page.getByLabel("Password").fill("password123");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(page).toHaveURL(/\/dashboard/);
        await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
    });

});