import { defineConfig, presetAttributify, presetTypography, presetWind4, transformerCompileClass, transformerVariantGroup } from 'unocss'
import { presetBootstrapBtn } from './plugins/unocss/bootstrap_btn'

export default defineConfig({
    presets: [
        presetBootstrapBtn(),
        presetAttributify(),
        presetTypography(),
        presetWind4({
            preflights: {
                reset: true
            }
        }),
    ],
    transformers: [
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  theme: {
    colors: {
        primary: {
          DEFAULT: "#14a74b",
          light: "#76da83",
          active: "#119c45",
          "active-light": "#aff6b8",
          dark: "#025c15",
        },
        success: {
          DEFAULT: "#2dc76b",
          light: "#17c653",
        },
        info: {
          DEFAULT: "#39a6ea",
          light: "#39c1ea",
        },
        danger: {
          DEFAULT: "#f8285a",
          light: "#f8285a",
          active: "#d1214c",
        },
        warning: {
          DEFAULT: "#f0f9ff",
          light: "#f0f9ff",
        },
        secondary: {
          DEFAULT: "#fd7906",
          light: "#fbb06f",
          inverse: "#4b5675",
        },
        dark: {
          DEFAULT: "#161f2d",
          light: "#1e2129",
        },
        white: {
          DEFAULT: "#ffffff",
          light: "#f8f9fa",
        }
      },
      boxShadow: {
        "primary-box": "2px 2px 10px #aff6b8",
        "card-box": "0px 3px 4px 0px #00000008",
      },
    radius: {
      none: "0px",
      sm: "0.125rem", // 2px
      DEFAULT: "0.25rem", // 4px (áp dụng cho .rounded)
      md: "0.375rem", // 6px
      lg: "0.5rem", // 8px
      xl: "0.75rem", // 12px
      "2xl": "1rem", // 16px
      "3xl": "1.5rem", // 24px
      full: "9999px",
    },
  },
  preflights: [
    {
      getCSS: () => `
      :root {
        --font-sans: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      `
    }
  ]
  // ...UnoCSS options
})