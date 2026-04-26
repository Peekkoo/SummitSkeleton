import { c as createComponent } from './astro-component_2W_UaXZN.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_CszYbjPw.mjs';
import { r as renderScript } from './script_BVJv_gBJ.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CFfrU7ii.mjs';

const $$KnowledgeBites = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Knowledge Bites - Summit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bites-shell"> <nav class="knowledge-bites-navigation" aria-label="Knowledge Bites navigation"> <a class="brand" href="/"> <h1>Summit</h1> </a> <div class="navigation-actions"> <a class="navigation-link" href="/dashboard">Dashboard</a> <a class="navigation-link" href="/leaderboard">Leaderboard</a> <a class="navigation-link" href="/loot-crates">Loot Crates</a> <a class="navigation-link" href="/credits">Credits</a> </div> </nav> <section class="hero-panel" aria-labelledby="bites-title"> <div class="hero-copy"> <span class="eyebrow">Knowledge Bites</span> <h2 id="bites-title">Study tidbits</h2> <p>Read quick facts, mark them complete, and earn XP. This is the first functional study option using the current local account data.</p> <div class="hero-actions"> <a class="primary-action" href="#bite-feed">Start Reading</a> <a class="ghost-action" href="/dashboard">Back to Dashboard</a> </div> </div> <aside class="progress-panel" aria-label="Knowledge Bites progress"> <span class="panel-label">Bites Progress</span> <strong><span id="completed-count">0</span> / <span id="total-count">0</span></strong> <div class="meter-track" aria-hidden="true"> <div class="meter-fill" id="progress-fill"></div> </div> <p id="progress-note">Complete bites to build your daily learning streak.</p> </aside> </section> <section class="statistics-grid" aria-label="Account stats"> <article class="statistic-card"> <span class="statistic-label">XP</span> <strong id="xp-value">--</strong> </article> <article class="statistic-card"> <span class="statistic-label">Level</span> <strong id="level-value">--</strong> </article> <article class="statistic-card"> <span class="statistic-label">Lessons Done</span> <strong id="lessons-value">--</strong> </article> </section> <div class="bites-grid"> <section class="feed-panel" aria-labelledby="feed-title"> <div class="panel-heading"> <div> <span class="panel-label">Study Reader</span> <h3 id="feed-title">One bite at a time</h3> </div> <div class="filter-row" aria-label="Filter bites"> <button class="filter-button active" type="button" data-filter="all">All</button> <button class="filter-button" type="button" data-filter="Study">Study</button> <button class="filter-button" type="button" data-filter="Life">Life</button> <button class="filter-button" type="button" data-filter="Mind">Mind</button> </div> </div> <div class="bite-reader" id="bite-feed"></div> </section> <aside class="focus-stack"> <section class="focus-panel"> <span class="panel-label">How it works</span> <h3>Read, recall, reward</h3> <p>Each completed bite is saved into your account&apos;s completed lessons list and awards 25 XP one time. You need to stay on the current bite for at least 5 seconds before it can be completed.</p> <ul class="focus-list"> <li>Filter by category.</li> <li>Read one card at a time.</li> <li>Mark complete for XP.</li> </ul> <div class="toast" id="toast" aria-live="polite"></div> </section> </aside> </div> </main> ${renderScript($$result2, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge-bites.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge-bites.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge-bites.astro";
const $$url = "/knowledge-bites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$KnowledgeBites,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
