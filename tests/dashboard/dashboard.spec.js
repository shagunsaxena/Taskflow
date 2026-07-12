import { test, expect } from "@playwright/test";

test.describe("TaskFlow Dashboard", () => {
  const email = "admin@taskflow.com";
  const password = "password123";

  async function login(page) {
    await page.goto("/login");

    await page.getByLabel("Email Address").fill(email);
    await page.getByLabel("Password").fill(password);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/\/dashboard$/);
  }

  test("redirects unauthenticated users to login page", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page).toHaveURL(/\/login$/);

    await expect(
      page.getByRole("heading", { name: "TaskFlow" })
    ).toBeVisible();
  });

  test("allows user to login and access dashboard", async ({ page }) => {
    await login(page);

    await expect(
      page.getByText("Welcome back, Shagun Saxena!")
    ).toBeVisible();
  });

  test("displays all dashboard KPI cards", async ({ page }) => {
    await login(page);

    await expect(page.getByText("Total Projects")).toBeVisible();
    await expect(page.getByText("Active Projects")).toBeVisible();
    await expect(page.getByText("Completed Tasks")).toBeVisible();
    await expect(page.getByText("Pending Tasks")).toBeVisible();

    await expect(page.getByText("12", { exact: true })).toBeVisible();
    await expect(page.getByText("8", { exact: true })).toBeVisible();
    await expect(page.getByText("124", { exact: true })).toBeVisible();
    await expect(page.getByText("18", { exact: true })).toBeVisible();
  });

  test("displays dashboard charts", async ({ page }) => {
    await login(page);

    await expect(
      page.getByRole("heading", { name: "Project Progress" })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Task Distribution" })
    ).toBeVisible();

    await expect(
      page.getByText("174", { exact: true })
    ).toBeVisible();

    await expect(
      page.getByText("Total Tasks")
    ).toBeVisible();
  });

  test("displays recent projects and recent activity", async ({ page }) => {
    await login(page);

    await expect(
      page.getByRole("heading", { name: "Recent Projects" })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Recent Activity" })
    ).toBeVisible();

    await expect(page.getByText("Website Redesign")).toBeVisible();

    await expect(page.getByText("Alex Johnson")).toBeVisible();
  });

  test("renders correctly on mobile viewport", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });

    await login(page);

    await expect(
      page.getByText("Welcome back, Shagun Saxena!")
    ).toBeVisible();

    await expect(page.getByText("Total Projects")).toBeVisible();

    await expect(
      page.getByRole("button", { name: "New Project" })
    ).toBeVisible();
  });
});