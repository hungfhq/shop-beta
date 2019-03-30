// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  firebase: {
    apiKey: 'AIzaSyBYmrKBI83IWJvFyXIcd5lVJOdEdD20XkI',
    authDomain: 'starter-kit-shop.firebaseapp.com',
    databaseURL: 'https://starter-kit-shop.firebaseio.com',
    projectId: 'starter-kit-shop',
    storageBucket: 'starter-kit-shop.appspot.com',
    messagingSenderId: '1027012170621'
  }
};
