import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSON', () => {
          describe('load', () => {
            describe('positive: should return true', () => {
              test("when 'packageDirPath' represents a valid JSON file", () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
                const expected = true;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoaded = packageJSONObj.load();

                expect(hasLoaded).toEqual(expected);
              });
            });
          });
        });
      });
    });
  });
});
