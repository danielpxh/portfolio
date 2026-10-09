import { expect, test } from "@playwright/test";

const viewportWidths = [280, 320, 375, 768, 1024, 1440];

test("hero name stays on one line and fits at responsive widths", async ({
  page,
}) => {
  await page.goto("/");
  const name = page.locator(".hero-section h1 span").filter({
    hasText: "Daniel Poh Ting Fong",
  });
  await expect(name).toBeVisible();

  for (const width of viewportWidths) {
    await page.setViewportSize({ width, height: 900 });
    await expect(name).toHaveCSS("white-space", "nowrap");

    const dimensions = await name.evaluate((element) => {
      const range = document.createRange();
      range.selectNodeContents(element);

      return {
        textWidth: range.getBoundingClientRect().width,
        availableWidth: element.getBoundingClientRect().width,
      };
    });

    expect(
      dimensions.textWidth,
      `name should fit at ${width}px viewport width`,
    ).toBeLessThanOrEqual(dimensions.availableWidth + 1);
  }
});
