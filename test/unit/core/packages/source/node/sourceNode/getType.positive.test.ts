import { SourcePackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getType', () => {
            describe('positive: should return the expected enum', () => {
              test('when a package.json (with a type property) is loaded', () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/valid`;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONWrapperObj = packageJSONWrapper({
                  packageDirPath,
                });
                const source = sourceNode({ packageJSONWrapperObj });
                const typeFound = source.getType();

                expect(typeFound).toEqual(typeExpected);
              });
              test('when a package.json (without a type property) is loaded', () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/invalid`;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONWrapperObj = packageJSONWrapper({
                  packageDirPath,
                });
                const source = sourceNode({ packageJSONWrapperObj });
                const typeFound = source.getType();

                expect(typeFound).toEqual(typeExpected);
              });
            });
          });
        });
      });
    });
  });
});
