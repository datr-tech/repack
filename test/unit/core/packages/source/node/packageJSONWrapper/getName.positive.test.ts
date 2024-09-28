import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getName', () => {
            describe('positive: should return the expected value', () => {
              test("when 'name' represents a known property", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
                const nameExpected = 'abc';
                const hasLoadedExpected = true;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const nameFound = packageJSONObj.getName();

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(nameFound).toEqual(nameExpected);
              });
            });
          });
        });
      });
    });
  });
});
