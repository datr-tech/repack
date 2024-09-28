import { templateHandlerNodeBrew } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('generate', () => {
        describe('positive: should return an empty string', () => {
          test('when the template has not been loaded', () => {
            // Arrange
            const hasBeenCompiledExpected = false;
            const nameExpected = '';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
            });
            const hasBeenCompiledFound = templateHandler.compile();
            const nameFound = templateHandler.generate();

            // Assert
            expect(hasBeenCompiledFound).toEqual(hasBeenCompiledExpected);
            expect(nameFound).toEqual(nameExpected);
          });
          test('when the template has not been compiled', () => {
            // Arrange
            const nameExpected = '';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
            });
            templateHandler.load();
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
        });
      });
    });
  });
});
