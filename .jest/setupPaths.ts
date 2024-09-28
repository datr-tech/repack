import {
  jestAppRootDir,
  jestAppTestDir,
  jestAppMocksDir,
  jestAppMocksMarkdownValidPath,
  jestAppMocksMjsValidPath,
  jestAppMocksPackageJsonInvalidDir,
  jestAppMocksPackageJsonValidDir,
  jestAppMocksPackageJsonInvalidPath,
  jestAppMocksPackageJsonValidPath,
  jestAppMocksTemplatesDir,
  jestAppMocksTsValidPath,
} from './paths';

global.JEST_APP_ROOT_DIR = jestAppRootDir;
global.JEST_APP_TEST_DIR = jestAppTestDir;
global.JEST_APP_MOCKS_DIR = jestAppMocksDir;
global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH = jestAppMocksMarkdownValidPath;
global.JEST_APP_MOCKS_MJS_VALID_PATH = jestAppMocksMjsValidPath;
global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR =
  jestAppMocksPackageJsonInvalidDir;
global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR = jestAppMocksPackageJsonValidDir;
global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_PATH =
  jestAppMocksPackageJsonInvalidPath;
global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH =
  jestAppMocksPackageJsonValidPath;
global.JEST_APP_MOCKS_TEMPLATES_DIR = jestAppMocksTemplatesDir;
global.JEST_APP_MOCKS_TS_VALID_PATH = jestAppMocksTsValidPath;
