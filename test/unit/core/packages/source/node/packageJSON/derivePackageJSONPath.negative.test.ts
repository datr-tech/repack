import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSON', () => {
          describe('derivePackageJSONPath', () => {
            describe('negative: should return the expected path', () => {
              test("when 'packageDirPath' is an empty string", () => {
                // Arrange
                const packageDirPath = '';
                const expectedPath = `${packageDirPath}/package.json`;

                // Act
                const packageJSONObj = packageJSON({ packageDirPath });
                const foundPath = packageJSONObj.derivePackageJSONPath({
                  packageDirPath,
                });

                expect(foundPath).toEqual(expectedPath);
              });
            });
          });
        });
      });
    });
  });
});
