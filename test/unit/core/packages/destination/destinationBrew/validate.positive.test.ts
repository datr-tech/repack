import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { destinationBrew } from '@app/core/packages/destination/brew';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('destination', () => {
      describe('destinationBrew', () => {
        describe('validate', () => {
          describe('positive: should return true', () => {
            test('when source contains the required properties', () => {
              // Arrange
              const isValidExpected = true;
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const destination = destinationBrew({ source });
              const isValidFound = destination.validate({});

              // Assert
              expect(isValidFound).toEqual(isValidExpected);
            });
          });
        });
      });
    });
  });
});
