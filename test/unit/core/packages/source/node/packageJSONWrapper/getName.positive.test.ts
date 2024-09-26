import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSONWrapper', () => {
        describe('getName', () => {
          describe('positive: should return the expected value', () => {
            test("when 'name' represents a known property", () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/valid`;
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
