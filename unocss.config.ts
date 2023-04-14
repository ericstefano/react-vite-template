import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Raleway:100,200,300,400,500,600,700'],
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
