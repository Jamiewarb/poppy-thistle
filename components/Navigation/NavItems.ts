export interface INavItem {
  title: string,
  url: string
}

export const navItems: Array<INavItem> = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Stationery',
    url: '/stationery'
  },
  {
    title: 'Collections',
    url: '/collections'
  },
  {
    title: 'Philosophy',
    url: '/philosophy'
  },
  {
    title: 'Samples',
    url: '/samples'
  },
  {
    title: 'Blog',
    url: '/blog'
  },
  {
    title: 'Contact',
    url: '/contact'
  }
]
