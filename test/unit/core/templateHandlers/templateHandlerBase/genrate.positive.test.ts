import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('generate', () => {
        describe('positive: should return the expected string', () => {
          test('when the template has been generated (or populated) with the source data', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const nameExpected = 'abc';
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
            templateHandler.compile();
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
        });
      });
    });
  });
});
