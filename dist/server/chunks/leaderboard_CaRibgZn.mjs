import { c as createComponent } from './astro-component_OwZIJkH1.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_DpPMz5wm.mjs';
import { r as renderScript } from './script_Dp3ocDuX.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CG-RFJbk.mjs';

const $$Leaderboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Leaderboard - Summit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="leaderboard-shell"> <nav class="leaderboard-navigation" aria-label="Leaderboard navigation"> <a class="brand" href="/"> <h1>Summit</h1> </a> <div class="navigation-actions"> <a class="navigation-link" href="/dashboard">Dashboard</a> <a class="navigation-link" href="/credits">Credits</a> <button class="navigation-link" type="button" data-signout-button>Sign Out</button> </div> </nav> <section class="hero-panel" aria-labelledby="leaderboard-title"> <div class="hero-copy"> <span class="eyebrow">Leaderboard</span> <h2 id="leaderboard-title">Climb by learning</h2> <p>Every signed-up user in local storage is ranked by level, then XP and streak. This is ready for the backend to replace the data source later.</p> <div class="hero-actions"> <a class="primary-action" href="/dashboard#study-paths">Earn XP</a> <a class="navigation-link" href="/dashboard#progress">Track Progress</a> </div> </div> <aside class="current-rank" aria-label="Your current rank"> <div> <span class="panel-label">Your Rank</span> <strong id="current-rank-value">--</strong> </div> <div class="rank-meter" aria-hidden="true"><span id="current-rank-meter"></span></div> <p id="current-rank-note">Log in or create an account to join the climb.</p> </aside> </section> <section class="leaderboard-grid"> <div class="leaderboard-panel"> <div class="panel-heading"> <div> <span class="panel-label">Top Ten</span> <h3>Highest Level Climbers</h3> </div> <a class="compact-action" href="/dashboard">Back to Dashboard</a> </div> <div class="podium-grid" id="podium-grid" aria-label="Top three users"></div> <div class="rank-list" id="rank-list" aria-label="All ranked users"></div> <div class="empty-state" id="empty-state"> <span>No Users Yet</span> <p>Create an account, finish lessons, and the leaderboard will fill in here.</p> </div> </div> <aside class="summary-panel" aria-label="Leaderboard summary"> <article class="summary-card"> <span class="statistic-label">Total Climbers</span> <strong id="total-users">0</strong> <p>Accounts stored in this browser.</p> </article> <article class="summary-card"> <span class="statistic-label">Total XP</span> <strong id="total-xp">0</strong> <p>Combined XP from every local user.</p> </article> <article class="summary-card"> <span class="statistic-label">Longest Streak</span> <strong><span id="longest-streak">0</span>d</strong> <p>The best active learning streak.</p> </article> </aside> </section> </main> ${renderScript($$result2, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/leaderboard.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/leaderboard.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/leaderboard.astro";
const $$url = "/leaderboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Leaderboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
