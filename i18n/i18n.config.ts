export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    ro: {
      // shadcn-docs-nuxt UI overrides for Romanian
      'search.placeholder': 'Caută în documentație...',
      'search.no-results': 'Nu s-au găsit rezultate.',
      'toc.title': 'Pe această pagină',
      'aside.title': 'Navigare',
      'footer.credits': '© 2025-2026 CuibOS',
    },
    en: {
      'search.placeholder': 'Search documentation...',
      'search.no-results': 'No results found.',
      'toc.title': 'On this page',
      'aside.title': 'Navigation',
      'footer.credits': '© 2025-2026 CuibOS',
    },
  },
}));
