import { SourcePackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getType', () => {
            describe('negative: should return the expected enum', () => {
              test('when a package.json (with a type property) has not been loaded', () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/valid`;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const typeFound = packageJSONObj.getType();

                expect(typeFound).toEqual(typeExpected);
              });
              test('when a package.json (without a type property) has not been loaded', () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/invalid`;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const typeFound = packageJSONObj.getType();

                expect(typeFound).toEqual(typeExpected);
              });
            });
          });
        });
      });
    });
  });
});
