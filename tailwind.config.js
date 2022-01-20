module.exports = {
  content: ["./src/pages/**/*.html", "./index.html"],
  theme: {
    colors: {
      title: "var(--color-title)",
      theme: "var(--color-theme)",
      del: "var(--color-del)",
      reset: "var(--color-reset)",
      eq: "var(--color-eq)",
      key: "var(--color-key)",
      "fn-shadow": "var(--color-fnkeys-shadow)",
      "eq-shadow": "var(--color-eqkey-shadow)",
      "key-shadow": "var(--color-key-shadow)",
      result: "var(--color-result)",
    },
    screens: {
      desktop: "35em",
    },
    backgroundColor: {
      "main-bg": "var(--color-main-bg)",
      "toggle-bg": "var(--color-toggle-bg)",
      "screen-bg": "var(--color-screen-bg)",
      "fnkeys-bg": "var(--color-fnkeys-bg)",
      "eqkey-bg": "var(--color-eqkey-bg)",
      "key-bg": "var(--color-key-bg)",
    },
    fontFamily: {
      spartan: "'spartan', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
