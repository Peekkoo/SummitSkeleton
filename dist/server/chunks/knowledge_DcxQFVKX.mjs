import { c as createComponent } from './astro-component_2W_UaXZN.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_CszYbjPw.mjs';
import { r as renderScript } from './script_BVJv_gBJ.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CFfrU7ii.mjs';

const $$Knowledge = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Knowledge - Summit" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="knowledge-shell"> <nav class="knowledge-navigation" aria-label="Knowledge navigation"> <a class="brand" href="/"> <h1>Summit</h1> </a> <div class="navigation-actions"> <a class="navigation-link" href="/dashboard">Dashboard</a> <a class="navigation-link" href="/knowledge-bites">Knowledge Bites</a> <a class="navigation-link" href="/leaderboard">Leaderboard</a> <a class="navigation-link" href="/loot-crates">Loot Crates</a> </div> </nav> <section class="hero-panel" aria-labelledby="knowledge-title"> <div class="hero-copy"> <span class="eyebrow">Knowledge</span> <h2 id="knowledge-title">Choose a topic and train</h2> <p>Pick what you want to study. Questions can be preloaded or generated, and answer order changes each time.</p> <div class="hero-actions"> <a class="primary-action" href="#topic-selection">Pick Topic</a> <a class="ghost-action" href="/dashboard">Back to Dashboard</a> </div> </div> <aside class="progress-panel" aria-label="Knowledge progress"> <span class="panel-label">Current Topic</span> <strong id="current-topic-name">None</strong> <div class="meter-track" aria-hidden="true"> <div class="meter-fill" id="topic-progress-fill"></div> </div> <p id="topic-progress-note">Select a topic to begin.</p> </aside> </section> <section class="statistics-grid" aria-label="Account knowledge stats"> <article class="statistic-card"> <span class="statistic-label">XP</span> <strong id="xp-value">--</strong> </article> <article class="statistic-card"> <span class="statistic-label">Credits</span> <strong id="credits-value">--</strong> </article> <article class="statistic-card"> <span class="statistic-label">Level</span> <strong id="level-value">--</strong> </article> </section> <div class="knowledge-grid"> <section class="study-panel" id="topic-selection" aria-labelledby="topic-selection-title"> <div class="panel-heading"> <div> <span class="panel-label">Topics</span> <h3 id="topic-selection-title">What do you want to study?</h3> </div> <span class="reward-label">+20 XP and +5 credits per new correct answer</span> </div> <div class="topic-grid" id="topic-grid"></div> <section class="question-panel" aria-live="polite"> <span class="topic-metadata" id="question-metadata">Select a topic</span> <h3 id="question-title">Ready when you are.</h3> <p id="question-copy">Choose a topic above to load your first adaptive question.</p> <div class="answer-grid" id="answer-grid"></div> <div class="question-actions"> <button class="ghost-action" type="button" id="skip-question">Skip Question</button> <button class="ghost-action" type="button" id="generate-question">Generate Question</button> <button class="primary-action" type="button" id="next-question">Next Question</button> </div> </section> </section> <aside class="topic-summary-stack" aria-label="Topic summaries"> <section class="feedback-panel" id="feedback-panel"> <span class="panel-label">Result</span> <h3 id="feedback-title">Answer a question</h3> <p id="feedback-copy">Feedback will appear here.</p> </section> <div id="topic-summary-list"></div> </aside> </div> </main> ${renderScript($$result2, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/knowledge.astro";
const $$url = "/knowledge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Knowledge,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
