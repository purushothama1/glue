// Default Imports
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import WebFont from 'webfontloader';
// import './fonts/Mabry-Pro-Black.ttf';
// import './fonts/Mabry-Pro-Medium.ttf';
// import './fonts/mabry-regular-pro.ttf';

// Redux Imports
import { Store } from './state';

// Components Imports
import NavigationRoutes from './routes';

// Styles Imports
import './styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

// useEffect(() => {
//   WebFont.load({
//     google: {
//       families: ['Mabry Pro Medium', 'Mabry Pro Black', 'Mabry Pro Regular'],
//     },
//   });
// }, []);

root.render(
  <Provider store={Store}>
    <NavigationRoutes />
  </Provider>
);
