import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Docs',
      href: '/docs/',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/antwort-dev/antwort',
      target: '_blank',
    },
  ],
  actions: [
    {
      text: 'Get Started',
      href: getPermalink('/#get-started'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Project',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Documentation', href: '/docs/' },
        { text: 'Getting Started', href: getPermalink('/#get-started') },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'GitHub', href: 'https://github.com/antwort-dev/antwort' },
        { text: 'Issues', href: 'https://github.com/antwort-dev/antwort/issues' },
        { text: 'Discussions', href: 'https://github.com/antwort-dev/antwort/discussions' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Apache 2.0 License', href: 'https://github.com/antwort-dev/antwort/blob/main/LICENSE' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/antwort-dev/antwort' },
  ],
  footNote: `
    Created with <a class="text-accent underline" href="https://github.com/rhuss/cc-sdd">Spec-Driven Development</a> and Claude. Assisted with <span style="color: #e25555;">&hearts;</span> by <a class="text-accent underline" href="https://github.com/rhuss">Roland Hu&szlig;</a>
  `,
};
