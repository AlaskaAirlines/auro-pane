import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-pane.js';

describe('auro-pane', () => {
  it('is accessible', async () => {
    const el = await fixture(html`
      <auro-pane date="2020-09-09"></auro-pane>
    `);

    await expect(el).to.be.accessible();
  });

  it('defines the custom element', async () => {
    const el = await !!customElements.get("auro-pane");

    await expect(el).to.be.true;
  });

  const testCases = [
    ["2020-09-09", "Wed Sep 9"],
    ["2020-01-11", "Sat Jan 11"],
    ["invalid date", ""],
  ]

  testCases.forEach(async function ([date, expected]) {
    it(`parses ${date} correctly`, async () => {
      const el = await fixture(html`
        <auro-pane date=${date}></auro-pane>
      `)

      expect(getButtonText(el)).to.equal(expected);
    })
  })

});

function getButtonText(el) {
  const button = el.shadowRoot.querySelector('button');
  const buttonText = button.textContent.replace(/\s+/g, " ").trim();
  return buttonText;
}
