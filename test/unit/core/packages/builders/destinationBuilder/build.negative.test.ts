import {
  DestinationPackageTypeEnum,
  SourcePackageTypeEnum,
} from '@app/config/enums';
import { destinationBuilder, sourceBuilder } from '@app/core/packages/builders';
import { IDestinationOutput } from '@app/interfaces/core/packages/destination';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('builders', () => {
      describe('destinationBuilder', () => {
        describe('build', () => {
          describe('negative: should throw the error', () => {
            test('when a destination obj can not be found', () => {
              // Arrange
              const destinationType = DestinationPackageTypeEnum.UNK;
              const errorExpected = 'invalid destinations';
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const handler = () => {
                destinationBuilder({
                  destinationType,
                  source,
                }).build() as IDestinationOutput;
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
