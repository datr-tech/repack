import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('sourceNode', () => {
          describe('getData', () => {
            describe('negative: should return the expected object with default values', () => {
              test('when an empty package.json file has been loaded', () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR;
                const packageJSONWrapperObj = packageJSONWrapper({
                  packageDirPath,
                });

                // Act
                const source = sourceNode({ packageJSONWrapperObj });
                const data = source.getData();
                const { name, description, entryPoint, man, version } = data;

                // Assert
                expect(name).toEqual('PROP_VALUE_NOT_FOUND');
                expect(description).toEqual('PROP_VALUE_NOT_FOUND');
                expect(entryPoint).toEqual('PROP_VALUE_NOT_FOUND');
                expect(man).toEqual('PROP_VALUE_NOT_FOUND');
                expect(version).toEqual('PROP_VALUE_NOT_FOUND');
              });
            });
            describe('negative: should throw an error', () => {
              test('when a package.json file could not be loaded', () => {
                // Arrange
                const errorExpected = 'json not loaded';
                const packageDirPath = 'invalid_path';
                const packageJSONWrapperObj = packageJSONWrapper({
                  packageDirPath,
                });

                // Act
                const source = sourceNode({ packageJSONWrapperObj });
                const handler = () => {
                  source.getData();
                };

                // Assert
                expect(handler).toThrow(errorExpected);
              });
            });
          });
        });
      });
    });
  });
});
