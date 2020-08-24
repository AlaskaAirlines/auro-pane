import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-pane.js';

describe('auro-pane', () => {
  it('sets the CSS class on auro-pane > div element', async () => {
    const el = await fixture(html`
      <auro-pane cssclass="testClass"></auro-pane>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-pane is accessible', async () => {
    const el = await fixture(html`
      <auro-pane cssclass="testClass"></auro-pane>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-pane custom element is defined', async () => {
    const el = await !!customElements.get("auro-pane");

    await expect(el).to.be.true;
  });
});
