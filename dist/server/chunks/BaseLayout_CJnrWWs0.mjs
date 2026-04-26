import { c as createComponent } from './astro-component_CUOiN2P0.mjs';
import 'piccolore';
import { h as renderComponent, j as renderHead, k as renderSlot, r as renderTemplate } from './server_BGf-YlLC.mjs';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="/globalCss/global.css">${renderComponent($$result, "ViewTransition", ViewTransition, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
