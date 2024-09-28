import { DestinationPackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerBuilder } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBuilder', () => {
      describe('build', () => {
        describe('negative: should throw an error', () => {
          test("when there are no matches for 'destinationType'", () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.UNK;
            const errorExpected = 'invalid templateHandlers';
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const handler = () => {
              templateHandlerBuilder({
                destinationType,
                source,
              }).build();
            };

            // Assert
            expect(handler).toThrow(errorExpected);
          });
        });
      });
    });
  });
});
