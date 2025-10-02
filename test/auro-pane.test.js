import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-pane", () => {
  it("is accessible", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09"></auro-pane>
    `);

    await expect(el).to.be.accessible();
  });

  it("is defined", async () => {
    const el = await !!customElements.get("auro-pane");

    await expect(el).to.be.true;
  });

  const dateTestCases = [
    ["2020-09-09", "Wed Sep 9"],
    ["2020-01-11", "Sat Jan 11"],
    [null, ""],
  ];

  dateTestCases.forEach(async ([date, expected]) => {
    it(`parses ${date} correctly`, async () => {
      const el = await fixture(html`
        <auro-pane date=${date}></auro-pane>
      `);

      if (date === null) {
        const todayExpected = new Date();

        expected = `${todayExpected.toLocaleDateString("en-US", { weekday: "short" })} ${todayExpected.toLocaleDateString("en-US", { month: "short" })} ${todayExpected.toLocaleDateString("en-US", { day: "numeric" })}`;
      }

      expect(getButtonText(el)).to.equal(expected);
    });
  });

  it("displays price when provided", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09" price="$100"></auro-pane>
    `);

    expect(getButtonText(el)).to.equal("Wed Sep 9 $100");
    expect(isPanePricedClassPresent(el)).to.be.true;
  });

  it("displays price when disabled", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09" price="$100" disabled></auro-pane>
    `);

    expect(getButtonText(el)).to.equal("Wed Sep 9 $100");
    expect(isPanePricedClassPresent(el)).to.be.true;
  });

  it("displays two dashes when price attribute is empty", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09" price=""></auro-pane>
    `);

    expect(getButtonText(el)).to.equal("Wed Sep 9 --");
    expect(isPanePricedClassPresent(el)).to.be.true;
  });

  it("sets tabindex and aria-hidden", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09" tabindex="-1" aria-hidden="true"></auro-pane>
    `);

    const button = el.shadowRoot.querySelector("button");
    expect(button.getAttribute("tabindex")).to.equal("-1");
    expect(button.getAttribute("aria-hidden")).to.equal("true");
  });

  it("removes tabindex and aria-hidden when removed from parent", async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09" tabindex="-1" aria-hidden="true"></auro-pane>
    `);

    const button = el.shadowRoot.querySelector("button");
    el.removeAttribute("tabindex");
    el.removeAttribute("aria-hidden");
    await el.updateComplete;

    expect(button.hasAttribute("tabindex")).to.be.false;
    expect(button.hasAttribute("aria-hidden")).to.be.false;
  });
});

function getButtonText(el) {
  const dayName = el.shadowRoot
    .querySelector(".dayOfTheWeek [auro-datetime]")
    .shadowRoot.querySelector(".yield").textContent;
  const dayNum = el.shadowRoot
    .querySelector(".date [auro-datetime][type=month]")
    .shadowRoot.querySelector(".yield").textContent;
  const MonthStr = el.shadowRoot
    .querySelector(".date [auro-datetime][type=day]")
    .shadowRoot.querySelector(".yield").textContent;
  let buttonText = `${dayName} ${dayNum} ${MonthStr}`;

  if (el.hasAttribute("price")) {
    const price = el.shadowRoot.querySelector(".price").textContent;
    buttonText += ` ${price}`;
  }

  return buttonText;
}

function isPanePricedClassPresent(el) {
  const button = el.shadowRoot.querySelector("button");
  return button.classList.contains("pane-priced");
}
