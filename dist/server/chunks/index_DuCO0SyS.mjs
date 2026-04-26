import { c as createComponent } from './astro-component_OwZIJkH1.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_DpPMz5wm.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CG-RFJbk.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Summit Website - Welcome" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="floating-navigation"> <a href="#home" class="float-button">Home</a> <a href="#about" class="float-button">About</a> <a href="#features" class="float-button">Features</a> <a href="/credits" class="float-button">Credits</a> </div> <section class="mountain" id="home"> <div class="mountain-content"> <h1>Welcome to Summit</h1> <p>Reach new heights, learn new skills, advance your knowledge, connect with friends and family, and become your PEAK self!</p> <div class="mountain-actions"> <a href="/login" class="button">Log In</a> <a href="/login" class="button">Sign Up</a> </div> </div> </section> <section class="features" id="features"> <h2>Our Features</h2> <div class="features-grid"> <div class="feature-card"> <h3>🚀 Fast & Reliable with plans for implementation continuing up until 2027</h3> <p>Experience lightning-fast performance and 99.9% uptime reliability for your business needs.</p> </div> <div class="feature-card"> <h3>🔒 Secure</h3> <p>Enterprise-grade security with end-to-end encryption to protect your data.</p> </div> <div class="feature-card"> <h3>💡 Innovative</h3> <p>Cutting-edge technology and continuous innovation to stay ahead of the curve.</p> </div> <div class="feature-card"> <h3>🌍 Global Scale</h3> <p>Deploy globally with our worldwide infrastructure and CDN network.</p> </div> <div class="feature-card"> <h3>🌍 Global Scale</h3> <p>Deploy globally with our worldwide infrastructure and CDN network.</p> </div> <div class="feature-card"> <h3>🐐 Goated.</h3> <p>Deploy globally with our worldwide infrastructure and CDN network.</p> </div> </div> </section> <section class="information-section" id="about"> <h2>About Summit</h2> <div class="information-content"> <p>Summit is a leading platform dedicated to helping individuals and organizations reach their full potential. With cutting-edge technology and innovative solutions, we empower our users to achieve unprecedented success.</p> <p>Our mission is to provide reliable, secure, and scalable services that drive growth and transformation. Whether you're just starting your journey or scaling your operations, Summit has the tools and expertise to support your success.</p> <p>Join thousands of satisfied users who have already transformed their business with Summit. Experience the difference that true innovation and commitment to excellence can make.</p> <div class="call-to-action-buttons"> <a href="/login" class="button">Start Now</a> <a href="/credits" class="button">View Credits</a> </div> </div> </section> <footer id="contact"> <p>&copy; 2026 Summit KLEN INC. All rights reserved.</p> </footer> ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/index.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
