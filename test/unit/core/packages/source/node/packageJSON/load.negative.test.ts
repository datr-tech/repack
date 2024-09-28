import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSON', () => {
          describe('load', () => {
            describe('negative: should return false', () => {
              test("when 'packageDirPath' is an empty string", () => {
                // Arrange
                const packageDirPath = '';
                const expected = false;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoaded = packageJSONObj.load();

                expect(hasLoaded).toEqual(expected);
              });
              test("when 'packageDirPath' is a one char string", () => {
                // Arrange
                const packageDirPath = ' ';
                const expected = false;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoaded = packageJSONObj.load();

                expect(hasLoaded).toEqual(expected);
              });
              test("when 'packageDirPath' is an invalid, non-empty string", () => {
                // Arrange
                const packageDirPath = 'abc';
                const expected = false;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoaded = packageJSONObj.load();

                expect(hasLoaded).toEqual(expected);
              });
              test("when 'packageDirPath' is an invalid series of symbols", () => {
                // Arrange
                const packageDirPath = '@&%';
                const expected = false;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const hasLoaded = packageJSONObj.load();

                expect(hasLoaded).toEqual(expected);
              });
              test("when 'packageDirPath' represents a non-JSON file", () => {
                // Arrange
                const packageDirPath = `${global.JEST_APP_MOCKS_DIR}/files/valid/MOCK.md`;
                const expected = false;

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
