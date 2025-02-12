import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import { expect } from "chai";
import "mocha";

describe("Bank Accounts UI Tests", function () {
  let driver: WebDriver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  beforeEach(async function () {
    await driver.get("http://localhost:5173/#"); // Update URL if necessary
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it("should display the bank accounts table", async function () {
    const table: WebElement = await driver.findElement(By.tagName("table"));
    expect(table).to.not.be.null;
  });

  it("should have rows of accounts", async function () {
    const rows = await driver.findElements(By.css("tbody tr"));
    expect(rows.length).to.be.greaterThan(0);
  });

  it("should have correct table columns", async function () {
    const headers = await driver.findElements(By.css("thead tr th"));
    
    expect(headers.length).to.equal(3);
    expect(await headers[0].getText()).to.equal("Account Number");
    expect(await headers[1].getText()).to.equal("Account Holder");
    expect(await headers[2].getText()).to.equal("Balance");
  });
});
