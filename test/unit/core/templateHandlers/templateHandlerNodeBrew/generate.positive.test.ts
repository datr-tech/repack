import { templateHandlerNodeBrew } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('generate', () => {
        describe('positive: should return the expected string', () => {
          test('when the template has been generated (with the source data)', () => {
            // Arrange
            const nameExpected = 'abc';
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
