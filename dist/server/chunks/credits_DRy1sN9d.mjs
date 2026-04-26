import { c as createComponent } from './astro-component_OwZIJkH1.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_DpPMz5wm.mjs';
import { r as renderScript } from './script_Dp3ocDuX.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CG-RFJbk.mjs';

const $$Credits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Credits - Summit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="credits-shell"> <nav class="credits-navigation" aria-label="Credits navigation"> <a class="brand" href="/"> <h1>Summit</h1> </a> <div class="navigation-actions"> <a class="navigation-link" href="/dashboard">Dashboard</a> <a class="navigation-link" href="/leaderboard">Leaderboard</a> <a class="navigation-link" href="/loot-crates">Loot Crates</a> <button class="navigation-link" type="button" data-signout-button>Sign Out</button> </div> </nav> <section class="hero-panel" aria-labelledby="credits-title"> <span class="eyebrow">Credits</span> <h2 id="credits-title">Built by the Summit team</h2> <p>Summit is a collaborative project shaped by full stack development and design work from the team below.</p> </section> <section class="team-grid" aria-label="Team members"> <article class="member-card full-stack"> <span class="role-label">Full Stack Developer</span> <h3>Ethan Rojas</h3> <p>Frontend and backend development for Summit&apos;s product workflow.</p> </article> <article class="member-card full-stack"> <span class="role-label">Full Stack Developer</span> <h3>Kris Nguyen</h3> <p>Full stack development support across account, learning, and reward systems.</p> </article> <article class="member-card full-stack"> <span class="role-label">Full Stack Developer</span> <h3>Nicholas Cheng</h3> <p>Full stack development support for Summit&apos;s core app experience.</p> </article> <article class="member-card design"> <span class="role-label">Design Member</span> <h3>Nathalia Lam</h3> <p>Design direction and visual planning for the Summit experience.</p> </article> </section> <section class="thanks-panel"> <p>Thanks to everyone helping Summit become a smoother, more useful learning platform.</p> <a class="primary-action" id="credits-dashboard-action" href="/login">Log In to Dashboard</a> </section> </main> ${renderScript($$result2, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/credits.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/credits.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/credits.astro";
const $$url = "/credits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Credits,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
