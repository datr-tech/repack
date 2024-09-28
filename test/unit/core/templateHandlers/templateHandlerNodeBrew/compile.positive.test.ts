import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('compile', () => {
        describe('positive: should return true', () => {
          test('when the template has been compiled', () => {
            // Arrange
            const hasBeenCompiledExpected = true;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
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
