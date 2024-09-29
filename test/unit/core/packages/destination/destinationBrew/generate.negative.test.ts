import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { destinationBrew } from '@app/core/packages/destination/brew';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('destination', () => {
      describe('destinationBrew', () => {
        describe('generate', () => {
          describe('negative: should throw an error', () => {
            test("when 'outPath' is invalid", () => {
              // Arrange
              const errorExpected = 'write error: path is empty';
              const outPath = '';
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const destination = destinationBrew({ source });
              const handler = () => {
                destination.generate({ outPath });
              };

              // Assert
              expect(handler).toThrow(errorExpected);
            });
          });
        });
      });
    });
  });
});
