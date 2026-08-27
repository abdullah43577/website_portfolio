export const THEME_STORAGE_KEY = "theme";

export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t}catch(e){}})()`;

// Browser chrome colour. Metadata cannot read CSS custom properties, so these two
// values are the one place a literal hex is allowed — keep them in sync with
// --bg in globals.css.
export const THEME_COLORS = {
  light: "#FBFAF8",
  dark: "#0B0B0C",
} as const;
