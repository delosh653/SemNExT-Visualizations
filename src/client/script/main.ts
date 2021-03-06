/// <reference path="../../../typings/tsd.d.ts"/>
/**
 * main.ts
 * 
 * The main javascript file that is served to the client and initiates the 
 * user interface.
 */

import CHeM = require('./helpers/graph');
import UI = require('./helpers/ui');

var d3 = require('d3');

let margin = {top: 180, right: 160, bottom: 160, left: 160},
    width = 960,
    height = 960,
    canvas = new CHeM.Canvas(d3.select('.chart'), margin, width, height),
    root_path = location.pathname;

UI.configure(canvas, root_path);
