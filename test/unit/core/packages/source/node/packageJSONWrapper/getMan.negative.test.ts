import { CONSTS_PROP_VALUE_NOT_FOUND } from '@app/config/consts';
import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getMan', () => {
            describe('negative: should return the default value', () => {
              test("when 'man' does not represent a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR;
                const manExpected = CONSTS_PROP_VALUE_NOT_FOUND;
                const hasLoadedExpected = true;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const manFound = packageJSONObj.getMan();

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(manFound).toEqual(manExpected);
              });
            });
            describe('negative: throw an error', () => {
              test('when the package.json file has not been loaded', () => {
                // Arrange
                const packageDirPath = global.JEST_APP_MOCKS_DIR;
                const errorExpected = 'json not loaded';

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const handler = () => {
                  packageJSONObj.getMan();
                };

                expect(handler).toThrow(errorExpected);
              });
              test('when the package.json file could not be loaded, because of an invalid packageDirPath', () => {
                // Arrange
                const packageDirPath = ``;
                const errorExpected = 'json not loaded';
                const hasLoadedExpected = false;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const handler = () => {
                  packageJSONObj.getMan();
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
