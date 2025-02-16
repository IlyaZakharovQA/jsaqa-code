const { email } = require("../user");
const { password } = require("../user");
const { test, expect } = require("@playwright/test");

test("SuccesfullAuthTest", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.getByRole("heading", { name: "Мои курсы и профессии" })
  ).toBeVisible();
});

test("NotSuccesfullAuthTestWrongPass", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("0000");
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.getByText("Вы ввели неправильно логин или пароль")
  ).toBeVisible();
});
