import { DestinationPackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerBase } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('generate', () => {
        describe('negative: should return an empty string', () => {
          test('when the template was not been compiled', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const nameExpected = '';
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = `${global.JEST_APP_MOCKS_TEMPLATES_DIR}/node.brew.handlebars`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerBase({
              destinationType,
              source,
              templatePath,
            });
            templateHandler.load();
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test('when the template was not been loaded', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const nameExpected = '';
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = `${global.JEST_APP_MOCKS_TEMPLATES_DIR}/node.brew.handlebars`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerBase({
              destinationType,
              source,
              templatePath,
            });
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
        });
      });
    });
  });
});
