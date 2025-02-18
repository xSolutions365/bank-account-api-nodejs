import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import { expect } from "@jest/globals";

describe("Bank Accounts UI Tests", function () {
  let driver: WebDriver;

  beforeAll(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  beforeEach(async function () {
    await driver.get("http://localhost:5173/#"); // Update URL if necessary
  });

  afterAll(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it("should display the bank accounts table", async function () {
    const table: WebElement = await driver.findElement(By.tagName("table"));
    expect(table).not.toBeNull();
  });

  it("should have rows of accounts", async function () {
    const rows = await driver.findElements(By.css("tbody tr"));
    expect(rows.length).toBeGreaterThan(0);
  });

  it("should have correct table columns", async function () {
    const headers = await driver.findElements(By.css("thead tr th"));
    
    expect(headers.length).toBe(3);
    expect(await headers[0].getText()).toBe("Account Number");
    expect(await headers[1].getText()).toBe("Account Holder");
    expect(await headers[2].getText()).toBe("Balance");
  });
});
