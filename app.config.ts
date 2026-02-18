export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'CuibOS Docs',
      description: 'Documentație pentru CuibOS — administrarea proprietăților, vehiculelor și finanțelor familiei.',
    },
    theme: {
      customizable: false,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'CuibOS',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [
        { title: 'Ghid', to: '/guide/introduction' },
        { title: 'API', to: '/api/overview' },
        { title: 'Arhitectură', to: '/architecture/overview' },
      ],
      links: [
        {
          icon: 'lucide:globe',
          to: 'https://app.cuibos.ro',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: '© 2025-2026 CuibOS',
      links: [],
    },
    toc: {
      enable: true,
      links: [
        {
          title: 'Deschide aplicația',
          icon: 'lucide:external-link',
          to: 'https://app.cuibos.ro',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
