import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('builders', () => {
      describe('sourceBuilder', () => {
        describe('build', () => {
          describe("positive: should build the 'source' obj", () => {
            test('when a package.json has been loaded', () => {
              // Arrange
              const testDir = process.env.REPACK_TEST_DIR as string;
              const path = `${testDir}/mocks/files/valid`;
              const nameExpected = 'abc';
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act
              const sourceNode = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;
              const { name } = sourceNode.getData();
              const sourceTypeFound = sourceNode.getType();

              expect(name).toEqual(nameExpected);
              expect(sourceTypeFound).toEqual(sourceType);
            });
          });
        });
      });
    });
  });
});
