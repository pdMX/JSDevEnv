/* This file contains references to the vendor libraries
 we're using in this project. This is used by webpack
 in the production build only*. A separate bundle for vendor
 code is useful since it's unlikely to change as often
 as the application's code. So all the libraries we reference
 here will be written to vendor.js so they can be
 cached until one of them change. So basically, this avoids
 customers having to download a huge JS file anytime a line
 of code changes. They only have to download vendor.js when
 a vendor library changes which should be less frequent.
 Any files that aren't referenced here will be bundled into
 main.js for the production build.
 */

/* eslint-disable no-unused-vars */

//any third party tools used are to be listed here and will be bundled up seperitly by webpack into a file c called vendor.js,
//if you wanted seperated bundles for different pages in app you can declared thoses using the same pattern. Just add one entry point to config.prod webpack config per page
import fetch from 'whatwg-fetch';
