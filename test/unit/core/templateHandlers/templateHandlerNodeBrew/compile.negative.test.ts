import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('compile', () => {
        describe('negative: should return false', () => {
          test('when the template has not been loaded', () => {
            // Arrange
            const hasBeenCompiledExpected = false;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
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
