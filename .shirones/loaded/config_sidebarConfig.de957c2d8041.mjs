import { createRequire as __shironesCreateRequire } from 'node:module';
const require = __shironesCreateRequire(import.meta.url);

// src/user/user-config.ts
var userConfigOverrides = {};

// src/utils/config-overlay.ts
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function deepMerge(base, override) {
  if (!isPlainObject(base) || !isPlainObject(override)) return override;
  const merged = { ...base };
  for (const [key, value] of Object.entries(override)) {
    merged[key] = key in base ? deepMerge(base[key], value) : value;
  }
  return merged;
}
function withUserConfig(domain, defaults) {
  const override = userConfigOverrides[domain];
  if (override === void 0) return defaults;
  return deepMerge(defaults, override);
}

// src/config/sidebarConfig.ts
var sidebarConfig = withUserConfig("sidebar", {
  enable: true,
  arrangement: "dual",
  side: "left",
  components: [
    { type: "profile", enable: true, slot: "top" },
    { type: "music", enable: true, slot: "top" },
    { type: "announcement", enable: true, slot: "top", pages: ["home"] },
    {
      type: "categories",
      enable: true,
      slot: "sticky",
      collapseAfter: 5,
      pages: [
        "home",
        "archive",
        "friends",
        "moments",
        "anime",
        "compass",
        "skills",
        "projects",
        "devices",
        "games",
        "timeline",
        "albums",
        "about",
        "post"
      ]
    },
    {
      type: "series",
      enable: true,
      slot: "sticky",
      collapseAfter: 5,
      pages: [
        "home",
        "archive",
        "friends",
        "moments",
        "anime",
        "compass",
        "skills",
        "projects",
        "devices",
        "games",
        "timeline",
        "albums",
        "about",
        "post"
      ]
    },
    {
      type: "tags",
      enable: true,
      slot: "sticky",
      collapseAfter: 6,
      pages: [
        "home",
        "archive",
        "friends",
        "moments",
        "anime",
        "compass",
        "skills",
        "projects",
        "devices",
        "games",
        "timeline",
        "albums",
        "about",
        "post"
      ]
    },
    {
      type: "stats",
      enable: true,
      slot: "top",
      column: "secondary",
      pages: ["home", "archive", "categories", "tags"]
    },
    { type: "calendar", enable: true, slot: "top", column: "secondary" },
    {
      type: "toc",
      enable: true,
      slot: "sticky",
      column: "secondary",
      pages: ["post"]
    }
  ]
});
export {
  sidebarConfig
};
