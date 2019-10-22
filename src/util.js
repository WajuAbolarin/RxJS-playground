export const sync = el => val => (el.textContent = val);

export const syncEl = selector => sync(document.querySelector(selector));
