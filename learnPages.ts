export const LEARN_PAGES = [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      docs: ['intro'],
      next: 'installation-setup'
    },
  {
    slug: 'installation-setup',
    title: 'Installing Third-Party Tools',
    docs: ['setup'],
    previous: 'getting-started',
    next: 'digital-io'
  },
  {
    slug: 'digital-io',
    title: 'Hardware I/O',
    docs: ['digital-io'],
    previous: 'installation-setup',
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