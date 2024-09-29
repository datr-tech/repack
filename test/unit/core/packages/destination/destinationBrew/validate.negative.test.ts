import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { destinationBrew } from '@app/core/packages/destination/brew';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

describe('core', () => {
  describe('packages', () => {
    describe('destination', () => {
      describe('destinationBrew', () => {
        describe('validate', () => {
          describe('negative: should return false', () => {
            test('when source does not contain the required properties', () => {
              // Arrange
              const isValidExpected = false;
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;
              jest.spyOn(source, 'getData').mockReturnValue({
                description: '',
                entryPoint: '',
                man: '',
                name: '',
                version: '',
              });

              // Act: Destination
              const destination = destinationBrew({ source });
              const isValidFound = destination.validate({});

              // Assert
              expect(isValidFound).toEqual(isValidExpected);
            });
          });
          describe('negative: should throw an error', () => {
            test("when 'silent' is 'false'", () => {
              // Arrange
              const errorExpected =
                'props missing: description,entryPoint,man,name,version';
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const silent = false;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;
              jest.spyOn(source, 'getData').mockReturnValue({
                description: '',
                entryPoint: '',
                man: '',
                name: '',
                version: '',
              });

              // Act: Destination
              const destination = destinationBrew({ source });
              const handler = () => {
                destination.validate({ silent });
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
