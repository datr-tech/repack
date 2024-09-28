import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('builders', () => {
      describe('sourceBuilder', () => {
        describe('build', () => {
          describe('negative: should throw an error', () => {
            test("when 'sourceType' did not match with a known source", () => {
              // Arrange
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const errorExpected = 'invalid sources';
              const sourceType = SourcePackageTypeEnum.UNK;

              // Act
              const handler = () => {
                sourceBuilder({ path, sourceType }).build() as ISourceOutput;
              };

              expect(handler).toThrow(errorExpected);
            });
          });
          describe("negative: 'getData' should throw an error", () => {
            test('when a package.json could not be loaded', () => {
              // Arrange
              const path = 'invalid_path';
              const errorExpected = 'json not loaded';
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act
              const sourceNode = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;
              const sourceTypeFound = sourceNode.getType();
              const handler = () => {
                sourceNode.getData();
              };

              expect(sourceTypeFound).toEqual(sourceType);
              expect(handler).toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
