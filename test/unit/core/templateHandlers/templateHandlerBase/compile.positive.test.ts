import { DestinationPackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerBase } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('compile', () => {
        describe('positive: should return true', () => {
          test('when the template has been compiled', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasBeenCompiledExpected = true;
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
            const hasBeenCompiledFound = templateHandler.compile();

            // Assert
            expect(hasBeenCompiledFound).toEqual(hasBeenCompiledExpected);
          });
        });
      });
    });
  });
});
