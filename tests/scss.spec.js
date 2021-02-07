/**
 * @jest-environment node
 */

var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({ file: path.join(__dirname, 'power.spec.scss') }, { describe, it });
sassTrue.runSass({ file: path.join(__dirname, 'scales.spec.scss') }, { describe, it });
sassTrue.runSass({ file: path.join(__dirname, 'default.spec.scss') }, { describe, it });
sassTrue.runSass({ file: path.join(__dirname, 'rounded.spec.scss') }, { describe, it });