import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('getType', () => {
        test('should return the expected destination and source types', () => {
          // Arrange
          const destinationTypeExpected = DestinationPackageTypeEnum.BREW;
          const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
          const templatePath = `${global.JEST_APP_MOCKS_TEMPLATES_DIR}/node.brew.handlebars`;
          const packageJSONWrapperObj = packageJSONWrapper({
            packageDirPath,
          });

          // Act
          const source = sourceNode({ packageJSONWrapperObj });
          const templateHandler = templateHandlerBase({
            destinationType: destinationTypeExpected,
            source,
            templatePath,
          });
          const { destinationType, sourceType } = templateHandler.getType();

          // Assert
          expect(destinationType).toEqual(destinationTypeExpected);
          expect(sourceType).toEqual(source.getType());
        });
      });
    });
  });
});
