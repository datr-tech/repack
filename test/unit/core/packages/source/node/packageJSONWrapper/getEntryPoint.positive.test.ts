import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getEntryPoint', () => {
            describe('positive: should return the expected value', () => {
              test("when 'description' represents a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
                const entryPointExpected = '/path/to/entry/point';
                const hasLoadedExpected = true;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const entryPointFound = packageJSONObj.getEntryPoint();

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(entryPointFound).toEqual(entryPointExpected);
              });
            });
          });
        });
      });
    });
  });
});
