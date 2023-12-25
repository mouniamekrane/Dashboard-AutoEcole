import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    icon: icon('ic_user'),
    subItems: [
      {
        title: 'All Users',
        path: '/user',
      },
    ],
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'newLink',
    icon: icon('ic_analytics'),
    subItems: [
      {
        title: 'Option 1',
        path: '/new-link/option1',
      },
      {
        title: 'Option 2',
        path: '/new-link/option2',
      },
    ],
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'register',
    path: '/register',
    icon: icon('register'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
