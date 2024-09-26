import { CONSTS_PROP_VALUE_NOT_FOUND } from '@app/config/consts';
import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSONWrapper', () => {
        describe('getName', () => {
          describe('negative: should return the default value', () => {
            test("when 'name' does not represent a known property", () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/invalid`;
              const nameExpected = CONSTS_PROP_VALUE_NOT_FOUND;
              const hasLoadedExpected = true;

              // Act
              const packageJSONObj = packageJSONWrapper({ packageDirPath });
              const hasLoadedFound = packageJSONObj.load();
              const nameFound = packageJSONObj.getName();

              expect(hasLoadedFound).toEqual(hasLoadedExpected);
              expect(nameFound).toEqual(nameExpected);
            });
          });
          describe('negative: throw an error', () => {
            test('when the package.json file has not been loaded', () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/invalid`;
              const errorExpected = 'json not loaded';

              // Act
              const packageJSONObj = packageJSONWrapper({ packageDirPath });
              const handler = () => {
                packageJSONObj.getName();
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
                packageJSONObj.getName();
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
