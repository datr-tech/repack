import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSONWrapper', () => {
        describe('getEntryPoint', () => {
          describe('positive: should return the expected value', () => {
            test("when 'description' represents a known property", () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/valid`;
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
