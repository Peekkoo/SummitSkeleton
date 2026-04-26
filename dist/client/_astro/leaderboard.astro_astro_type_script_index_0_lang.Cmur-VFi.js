import{s as d,g as c,a as l}from"./auth.CugYaEYF.js";const o=new Intl.NumberFormat;function u(t){if(!t)return"Summit climber";const e=new Date(t);return Number.isNaN(e.getTime())?"Summit climber":`Joined ${e.toLocaleDateString(void 0,{month:"short",year:"numeric"})}`}function p(){return l().map(t=>({username:t.username??"Climber",xp:Number(t.xp??0),level:Number(t.level??1),streak:Number(t.streak??0),credits:Number(t.credits??0),lootboxes:Number(t.lootboxes??0),completedLessons:Array.isArray(t.completedLessons)?t.completedLessons.length:0,joinDate:t.joinDate??""})).sort((t,e)=>e.level!==t.level?e.level-t.level:e.xp!==t.xp?e.xp-t.xp:e.streak!==t.streak?e.streak-t.streak:t.username.localeCompare(e.username))}function g(t){const e=document.getElementById("podium-grid");e.innerHTML=t.slice(0,3).map((r,n)=>`
            <article class="podium-card ${n===0?"first":""}">
                <span class="rank-label">#${n+1}</span>
                <strong>${r.username}</strong>
                <span>Level ${o.format(r.level)} &middot; ${o.format(r.streak)}d streak</span>
                <span>${o.format(r.xp)} XP</span>
            </article>
        `).join("")}function k(t,e){const r=document.getElementById("rank-list");r.innerHTML=t.map((n,a)=>{const s=e?.username===n.username;return`
                <article class="rank-row ${s?"current-user":""}">
                    <span class="rank-place">${a+1}</span>
                    <div class="rank-name">
                        <strong>${n.username}${s?" &middot; You":""}</strong>
                        <span>${u(n.joinDate)}</span>
                    </div>
                    <div class="rank-statistic">
                        <strong>${o.format(n.level)}</strong>
                        <span>Level</span>
                    </div>
                    <div class="rank-statistic optional">
                        <strong>${o.format(n.streak)}d</strong>
                        <span>Streak</span>
                    </div>
                    <div class="rank-statistic optional">
                        <strong>${o.format(n.xp)}</strong>
                        <span>XP</span>
                    </div>
                    <div class="rank-statistic optional">
                        <strong>${o.format(n.completedLessons)}</strong>
                        <span>Lessons</span>
                    </div>
                </article>
            `}).join("")}function f(t){const e=t.reduce((n,a)=>n+a.xp,0),r=t.reduce((n,a)=>Math.max(n,a.streak),0);document.getElementById("total-users").textContent=o.format(t.length),document.getElementById("total-xp").textContent=o.format(e),document.getElementById("longest-streak").textContent=o.format(r)}function v(t,e){if(document.getElementById("current-rank-value").textContent="--",document.getElementById("current-rank-note").textContent="Log in or create an account to join the climb.",document.getElementById("current-rank-meter").style.width="0",!e||t.length===0)return;const r=t.findIndex(m=>m.username===e.username);if(r===-1)return;const n=r+1,a=t[r],s=Math.max(8,Math.round((t.length-r)/t.length*100));document.getElementById("current-rank-value").textContent=`#${n}`,document.getElementById("current-rank-note").textContent=`${a.username}, you have ${o.format(a.xp)} XP and a ${o.format(a.streak)} day streak.`,document.getElementById("current-rank-meter").style.width=`${s}%`}function i(){const t=c(),e=p(),r=e.slice(0,10),n=document.getElementById("rank-list"),a=document.getElementById("podium-grid"),s=document.getElementById("empty-state");if(f(e),v(e,t),e.length===0){s.classList.add("show"),a.classList.add("hidden"),n.classList.add("hidden"),a.innerHTML="",n.innerHTML="";return}s.classList.remove("show"),a.classList.remove("hidden"),n.classList.remove("hidden"),g(r),k(r,t)}i();d();document.addEventListener("astro:page-load",i);document.addEventListener("astro:page-load",d);
