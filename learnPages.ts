export const LEARN_PAGES = [
    {
      slug: 'installation-setup',
      title: 'Getting Started',
      docs: ['setup'],
      next: 'getting-started'
    },
  {
    slug: 'getting-started',
    title: 'Getting Started',
    docs: ['intro'],
    previous: 'installation-setup',
    next: 'digital-io'
  },
  {
    slug: 'digital-io',
    title: 'Hardware I/O',
    docs: ['digital-io'],
    previous: 'getting-started',
    next: 'analog'
  },
  {
    slug: 'analog',
    title: 'Hardware I/O',
    docs: ['analog'],
    previous: 'digital-io',
    next: 'pwm'
  },
  {
    slug: 'pwm',
    title: 'Hardware I/O',
    docs: ['pwm'],
    previous: 'analog',
    next: 'interrupts'
  },
  {
    slug: 'interrupts',
    title: 'Advanced Control',
    docs: ['interrupts'],
    previous: 'pwm',
    next: 'ticker'
  },
  {
    slug: 'ticker',
    title: 'Advanced Control',
    docs: ['ticker'],
    previous: 'interrupts',
    next: 'comms'
  },
  {
    slug: 'comms',
    title: 'Communication',
    docs: ['comms'],
    previous: 'ticker'
  }
];