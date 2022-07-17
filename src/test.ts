// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
<<<<<<< HEAD
    keys(): string[];
    <T>(id: string): T;
=======
<<<<<<< HEAD
    keys(): string[];
    <T>(id: string): T;
=======
    <T>(id: string): T;
    keys(): string[];
>>>>>>> bd52847 (upload-code)
>>>>>>> 51d2d17 (code deploy)
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
<<<<<<< HEAD
  { teardown: { destroyAfterEach: true }},
=======
<<<<<<< HEAD
  { teardown: { destroyAfterEach: true }},
=======
>>>>>>> bd52847 (upload-code)
>>>>>>> 51d2d17 (code deploy)
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
<<<<<<< HEAD
context.keys().map(context);
=======
<<<<<<< HEAD
context.keys().map(context);
=======
context.keys().forEach(context);
>>>>>>> bd52847 (upload-code)
>>>>>>> 51d2d17 (code deploy)
