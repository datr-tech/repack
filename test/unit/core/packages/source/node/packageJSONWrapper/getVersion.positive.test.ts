import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSONWrapper', () => {
        describe('getVersion', () => {
          describe('positive: should return the expected value', () => {
            test("when 'version' represents a known property", () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/valid`;
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
