import path from 'path';

export const CONSTS_PATH_APP_ROOT = path.resolve(__dirname, '../../../');
export const CONSTS_PATH_SRC_DIR = path.resolve(CONSTS_PATH_APP_ROOT, './src/');
export const CONSTS_PATH_TEMPLATES_DIR = path.resolve(
  CONSTS_PATH_SRC_DIR,
  './core/templates',
);
export const CONSTS_PATH_OUT_PATH_TEMP = path.resolve(
  CONSTS_PATH_APP_ROOT,
  'format.rb',
);
