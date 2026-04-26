import { c as createComponent } from './astro-component_OwZIJkH1.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_DpPMz5wm.mjs';
import { r as renderScript } from './script_Dp3ocDuX.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CG-RFJbk.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login - Summit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="authentication-card"> <div class="logo"> <h1>Summit</h1> <p>Reach your peak</p> </div> <div class="tabs"> <button class="tab-button active" id="tab-login" type="button">Log In</button> <button class="tab-button" id="tab-signup" type="button">Sign Up</button> </div> <div id="error-box" class="error-message"></div> <form id="login-form"> <div class="form-group"> <label>Username</label> <input type="text" id="login-username" placeholder="Your username" required autocomplete="username"> </div> <div class="form-group"> <label>Password</label> <input type="password" id="login-password" placeholder="Your password" required autocomplete="current-password"> </div> <button type="submit" class="submit-button">Log In</button> </form> <form id="signup-form" class="hidden"> <div class="form-group"> <label>Username</label> <input type="text" id="signup-username" placeholder="Choose a username" required> </div> <div class="form-group"> <label>Email</label> <input type="email" id="signup-email" placeholder="your@email.com" required> </div> <div class="form-group"> <label>Password</label> <input type="password" id="signup-password" placeholder="Choose a password" required> </div> <div class="form-group"> <label>Confirm Password</label> <input type="password" id="signup-confirm" placeholder="Repeat your password" required> </div> <button type="submit" class="submit-button">Create Account</button> </form> <div class="back-link"> <a href="/">Back to home</a> </div> </div> ${renderScript($$result2, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/login.astro", void 0);

const $$file = "C:/Users/ethan/OneDrive/Desktop/SummitSkeleton/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
