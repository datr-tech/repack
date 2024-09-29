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
          describe("positive: should build the 'source' obj", () => {
            test('when a package.json has been loaded', () => {
              // Arrange
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const destinationType = DestinationPackageTypeEnum.BREW;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const destination = destinationBuilder({
                destinationType,
                source,
              }).build() as IDestinationOutput;

              // Assert
              const sourceTypeFound = source.getType();
              const destinationTypeFound = destination.getType();
              expect(destinationTypeFound).toEqual(destinationType);
              expect(sourceTypeFound).toEqual(sourceType);
            });
          });
        });
      });
    });
  });
});
