import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getMan', () => {
            describe('positive: should return the expected value', () => {
              test("when 'description' represents a known property", () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/valid`;
                const manExpected = '/path/to/man/files';
                const hasLoadedExpected = true;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const hasLoadedFound = packageJSONObj.load();
                const manFound = packageJSONObj.getMan();

                expect(hasLoadedFound).toEqual(hasLoadedExpected);
                expect(manFound).toEqual(manExpected);
              });
            });
          });
        });
      });
    });
  });
});
