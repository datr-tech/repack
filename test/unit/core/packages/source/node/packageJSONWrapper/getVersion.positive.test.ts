import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getVersion', () => {
            describe('positive: should return the expected value', () => {
              test("when 'version' represents a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
                const versionExpected = '1.0.0';
                const hasLoadedExpected = true;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const versionFound = packageJSONObj.getVersion();

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(versionFound).toEqual(versionExpected);
              });
            });
          });
        });
      });
    });
  });
});
