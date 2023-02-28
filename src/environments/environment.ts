// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uri: 'http://adminvinci.exlineo.com',
  map: {
    api: "AIzaSyCKTfhHeHeBHQQDbrYxz4dns1hnXQrd_nE",
    coord: { lat: 43.761558, long: -2.133068, zoom: 6 }
  },
  email:"contact@exlineo.com",
  particles: {
    style: {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    },
    params: {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#FFFFFF'
        },
        shape: {
          type: 'triangle',
        },
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
