import { u as _, a as k, r as p, b as v } from "./index-b6aa6c2c.js"; import { C as u, o as t, g as o, j as d, b as e, c as n, h as c, D as x, w as l, L as g, d as f } from "./app-d78bf7b1.js"; const N = { __name: "SwitchDarkMode", setup(h) { const r = _(), a = k(r); return (i, s) => { const y = u("tooltip"); return t(), o("div", null, [d((t(), o("button", { onClick: s[0] || (s[0] = D => e(a)()), class: "p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out" }, [e(r) ? (t(), n(e(p), { key: 0, class: "w-5 h-5 fill-current" })) : c("", !0), e(r) ? c("", !0) : (t(), n(e(v), { key: 1, class: "w-5 h-5 fill-current" }))])), [[y, i.lang().tooltip.dark_mode]])]) } } }, m = { class: "hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 inline-flex items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out" }, b = f("span", { class: "w-5 h-5 fill-current" }, " ID ", -1), w = f("span", { class: "w-5 h-5 fill-current" }, " EN ", -1), E = { __name: "SwitchLangNavBar", setup(h) { const r = x().props.locale; return (a, i) => { const s = u("tooltip"); return t(), o("div", null, [d((t(), o("span", m, [e(r) == "id" ? (t(), n(e(g), { key: 0, href: a.route("setlang", "en"), class: "flex items-center space-x-2" }, { default: l(() => [b]), _: 1 }, 8, ["href"])) : c("", !0), e(r) == "en" ? (t(), n(e(g), { key: 1, href: a.route("setlang", "id"), class: "flex items-center space-x-2" }, { default: l(() => [w]), _: 1 }, 8, ["href"])) : c("", !0)])), [[s, e(r) == "id" ? "Ganti ke EN" : "Change to ID"]])]) } } }; export { E as _, N as a };
