import { defineConfig, presetTypography, presetWind4, transformerCompileClass, transformerVariantGroup } from 'unocss'

export default defineConfig({
    presets: [
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
  // ...UnoCSS options
})