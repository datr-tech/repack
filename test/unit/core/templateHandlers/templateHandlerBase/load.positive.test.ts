import { DestinationPackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerBase } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('load', () => {
        describe('positive: should return true', () => {
          test('when the template has been loaded', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasLoadedExpected = true;
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
            const hasLoadedFound = templateHandler.load();

            // Assert
            expect(hasLoadedFound).toEqual(hasLoadedExpected);
          });
        });
      });
    });
  });
});
