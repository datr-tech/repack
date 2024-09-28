import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('load', () => {
        describe('positive: should return true', () => {
          test('when the template has been loaded', () => {
            // Arrange
            const hasLoadedExpected = true;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
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
