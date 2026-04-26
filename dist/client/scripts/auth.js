const USERS_KEY = 'summit_users';
const CURRENT_KEY = 'summit_current_user';

export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser() {
    const username = localStorage.getItem(CURRENT_KEY);
    if (!username) return null;
    return getUsers().find(u => u.username === username) || null;
}

export function requireAuth() {
    if (!getCurrentUser()) {
        window.location.href = '/login';
    }
}

export function signup(username, email, password) {
    const users = getUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        return { ok: false, error: 'Username already taken' };
    }
    const user = {
        username,
        email,
        password,
        xp: 0,
        level: 1,
        streak: 0,
        lastLoginDate: null,
        credits: 100,
        lootboxes: 1,
        completedLessons: [],
        achievements: [],
        joinDate: new Date().toISOString(),
    };
    users.push(user);
    saveUsers(users);
    localStorage.setItem(CURRENT_KEY, username);
    updateStreak(username);
    return { ok: true };
}

export function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
    if (!user) return { ok: false, error: 'Invalid username or password' };
    localStorage.setItem(CURRENT_KEY, user.username);
    updateStreak(user.username);
    return { ok: true };
}

export function logout() {
    localStorage.removeItem(CURRENT_KEY);
    window.location.href = '/';
}

export function updateStreak(username) {
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1) return;
    const user = users[idx];
    const today = new Date().toISOString().slice(0, 10);
    if (user.lastLoginDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (user.lastLoginDate === yesterday) {
        user.streak += 1;
    } else if (user.lastLoginDate !== today) {
        user.streak = 1;
    }
    user.lastLoginDate = today;
    users[idx] = user;
    saveUsers(users);
}

export function addXP(amount) {
    const username = localStorage.getItem(CURRENT_KEY);
    if (!username) return;
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1) return;
    users[idx].xp += amount;
    users[idx].level = Math.floor(Math.sqrt(users[idx].xp / 100)) + 1;
    saveUsers(users);
    return users[idx];
}

export function addLootbox() {
    const username = localStorage.getItem(CURRENT_KEY);
    if (!username) return;
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1) return;
    users[idx].lootboxes += 1;
    saveUsers(users);
}

export function openLootbox() {
    const username = localStorage.getItem(CURRENT_KEY);
    if (!username) return null;
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1 || users[idx].lootboxes < 1) return null;
    users[idx].lootboxes -= 1;
    const rewards = [
        { type: 'xp', amount: 50, label: '+50 XP' },
        { type: 'xp', amount: 100, label: '+100 XP' },
        { type: 'credits', amount: 25, label: '+25 Credits' },
        { type: 'credits', amount: 50, label: '+50 Credits' },
        { type: 'xp', amount: 200, label: '+200 XP JACKPOT!' },
    ];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    if (reward.type === 'xp') users[idx].xp += reward.amount;
    if (reward.type === 'credits') users[idx].credits += reward.amount;
    users[idx].level = Math.floor(Math.sqrt(users[idx].xp / 100)) + 1;
    saveUsers(users);
    return { reward, user: users[idx] };
}

export function markLessonComplete(lessonId, xpReward = 50) {
    const username = localStorage.getItem(CURRENT_KEY);
    if (!username) return;
    const users = getUsers();
    const idx = users.findIndex(u => u.username === username);
    if (idx === -1) return;
    if (!users[idx].completedLessons.includes(lessonId)) {
        users[idx].completedLessons.push(lessonId);
        users[idx].xp += xpReward;
        users[idx].level = Math.floor(Math.sqrt(users[idx].xp / 100)) + 1;
        const totalLessons = users[idx].completedLessons.length;
        if (totalLessons % 5 === 0) users[idx].lootboxes += 1;
    }
    saveUsers(users);
    return users[idx];
}
