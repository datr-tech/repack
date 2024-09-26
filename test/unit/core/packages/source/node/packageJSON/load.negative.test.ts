import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
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
            test("when 'packageDirPath' is a one char empty string", () => {
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
              const rootDir = process.env.REPACK_ROOT_DIR as string;
              const packageDirPath = `${rootDir}/jest.config.ts`;
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
