import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilderNode } from '@app/core/packages/builders';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('builders', () => {
      describe('sourceBuilderNode', () => {
        describe('build', () => {
          describe("negative: should build the 'source' obj", () => {
            test("when a package.json file could not be loaded. Throw error when subsequently calling 'getData'", () => {
              // Arrange
              const path = 'abc';
              const errorExpected = 'json not loaded';
              const sourceTypeExpected = SourcePackageTypeEnum.NODE;

              // Act
              const sourceNode = sourceBuilderNode({
                path,
              }).build() as ISourceOutput;
              const sourceTypeFound = sourceNode.getType();
              const handler = () => {
                sourceNode.getData();
              };

              expect(sourceTypeFound).toEqual(sourceTypeExpected);
              expect(handler).toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
