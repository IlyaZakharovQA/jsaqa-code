let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

describe("Story front", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/customer-stories/front", {
      timeout: 100000,
    });
  });

  test("The h1 header content - Story front", async () => {
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("Front · GitHub");
  });
});

describe("Compare plans - new", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/pricing", {
      timeout: 100000,
    });
  });

  test("The h1 header content - Compare plans", async () => {
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual("Pricing · Plans for every developer · GitHub");
  });
});

describe("About enterprise - new", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/enterprise", {
      timeout: 100000,
    });
  });

  test("The h1 header content - About enterprise", async () => {
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toEqual(
      "Enterprise · A smarter way to work together · GitHub"
    );
  });
});
