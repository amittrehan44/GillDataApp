// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyD6hq194hq0mdFARNqCZFCNcesbRU9I3XY",
    authDomain: "gillinsurancedata.firebaseapp.com",
    databaseURL: "https://gillinsurancedata.firebaseio.com",
    projectId: "gillinsurancedata",
    storageBucket: "gillinsurancedata.appspot.com",
    messagingSenderId: "671483443749"
  }
};
