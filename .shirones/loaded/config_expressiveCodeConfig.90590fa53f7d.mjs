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

// src/config/expressiveCodeConfig.ts
var expressiveCodeConfig = withUserConfig(
  "expressiveCode",
  {
    // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
    // 代码块跟随明暗模式切换深浅主题
    theme: "github-dark",
    lightTheme: "github-light",
    darkTheme: "github-dark"
  }
);
export {
  expressiveCodeConfig
};
