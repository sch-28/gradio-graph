import { test, expect, Page } from "@playwright/test";

function mock_demo(page: Page, demo: string) {
	return page.route("**/config", (route) => {
		return route.fulfill({
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			path: `../../../demo/${demo}/config.json`
		});
	});
}

function mock_api(page: Page, body: Array<unknown>) {
	return page.route("**/api/predict/", (route) => {
		const id = JSON.parse(route.request().postData()!).fn_index;
		return route.fulfill({
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			body: JSON.stringify({
				data: body[id]
			})
		});
	});
}

test("renders the correct elements", async ({ page }) => {
	await mock_demo(page, "blocks_inputs");
	await mock_api(page, [["hi dawood"]]);
	await page.goto("http://localhost:3000");

	const textboxes = await page.getByLabel("Input");

	const textboxOne = await textboxes.first();
	const textboxTwo = await textboxes.last();

	await textboxOne.fill("hi");
	await textboxTwo.fill("dawood");
	await Promise.all([
		page.click('text="Submit"'),
		page.waitForResponse("**/api/predict/")
	]);

	await expect(await page.getByLabel("Output")).toHaveValue("hi dawood");
});
