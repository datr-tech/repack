import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSON', () => {
        describe('getPropValue', () => {
          describe('positive: should return the expected value', () => {
            test("when 'name' represents a known property", () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const packageDirPath = `${testDir}/mocks/files/valid`;

              const hasLoadedExpected = true;
              const propName = 'description';
              const propValueExpected = 'a test description';

              // Act
              const packageJSONObj = packageJSON({ packageDirPath });
              const hasLoadedFound = packageJSONObj.load();
              const propValueFound = packageJSONObj.getPropValue({ propName });

              expect(hasLoadedFound).toEqual(hasLoadedExpected);
              expect(propValueFound).toEqual(propValueExpected);
            });
          });
        });
      });
    });
  });
});
