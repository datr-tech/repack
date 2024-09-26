import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSON', () => {
        describe('load', () => {
          describe('positive: should return true', () => {
            test("when 'packageDirPath' represents a valid JSON file", () => {
              // Arrange
              const packageDirPath = process.env.REPACK_ROOT_DIR as string;
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
