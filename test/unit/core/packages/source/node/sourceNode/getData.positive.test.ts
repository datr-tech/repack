import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('sourceNode', () => {
          describe('getData', () => {
            describe('positive: should return the expected object', () => {
              test("when 'packageJSONWrapperObj' is valid", () => {
                // Arrange
                const testDir = process.env.REPACK_TEST_DIR as string;
                const packageDirPath = `${testDir}/mocks/files/valid`;
                const packageJSONWrapperObj = packageJSONWrapper({
                  packageDirPath,
                });

                // Act
                const source = sourceNode({ packageJSONWrapperObj });
                const data = source.getData();
                const { name, description, entryPoint, man, version } = data;

                // Assert
                expect(name).toEqual('abc');
                expect(description).toEqual('a test description');
                expect(entryPoint).toEqual('/path/to/entry/point');
                expect(man).toEqual('/path/to/man/files');
                expect(version).toEqual('1.0.0');
              });
            });
          });
        });
      });
    });
  });
});
