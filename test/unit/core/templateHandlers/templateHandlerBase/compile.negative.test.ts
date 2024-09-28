import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('compile', () => {
        describe('negative: should return false', () => {
          test('when the template has been loaded', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasBeenCompiledExpected = false;
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = `${testDir}/mocks/templates/node.brew.handlebars`;
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
            const hasBeenCompiledFound = templateHandler.compile();

            // Assert
            expect(hasBeenCompiledFound).toEqual(hasBeenCompiledExpected);
          });
        });
      });
    });
  });
});
