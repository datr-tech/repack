import { jestReadFileSync, jestRemoveFileSync } from './funcs';

global.jestReadFileSync = jestReadFileSync;
global.jestRemoveFileSync = jestRemoveFileSync;