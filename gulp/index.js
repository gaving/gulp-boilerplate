'use strict';

import fs from 'fs';
import { argv as argv } from 'yargs';
import './config';

const tasks = fs.readdirSync('./gulp/tasks/');

// --release flag when executing a task
global.release = argv.release;

tasks.forEach((task) => {
  require('./tasks/' + task);
});
