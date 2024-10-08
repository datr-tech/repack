import { CONSTS_UTILS_PROP_VALUE_NOT_FOUND } from '@app/config/consts';
import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSON', () => {
          describe('getPropValue', () => {
            describe('negative: should return the supplied default value', () => {
              test("when 'name' does not represent a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR;

                const defaultValue = 'DEFAULT';
                const hasLoadedExpected = true;
                const propName = 'description-unknown';
                const propValueExpected = defaultValue;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const propValueFound = packageJSONObj.getPropValue({
                  propName,
                  defaultValue,
                });

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(propValueFound).toEqual(propValueExpected);
              });
            });
            describe('negative: should return the default value', () => {
              test("when 'name' does not represent a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR;

                const hasLoadedExpected = true;
                const propName = 'description-unknown';
                const propValueExpected = CONSTS_UTILS_PROP_VALUE_NOT_FOUND;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const propValueFound = packageJSONObj.getPropValue({
                  propName,
                });

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(propValueFound).toEqual(propValueExpected);
              });
            });
            describe('negative: should throw an error', () => {
              test('when the package.json file had not been loaded', () => {
                // Arrange
                const packageDirPath = global.JEST_APP_MOCKS_DIR;
                const propName = 'description';
                const errorExpected = 'json not loaded';

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const handler = () => {
                  packageJSONObj.getPropValue({ propName });
                };

                expect(handler).toThrow(errorExpected);
              });
              test('when packageDirPath is invalid', () => {
                // Arrange
                const packageDirPath = '';
                const propName = 'description';
                const errorExpected = 'json not loaded';
                const hasLoadedExpected = false;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const handler = () => {
                  packageJSONObj.getPropValue({ propName });
                };

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(handler).toThrow(errorExpected);
              });
            });
          });
        });
      });
    });
  });
});
