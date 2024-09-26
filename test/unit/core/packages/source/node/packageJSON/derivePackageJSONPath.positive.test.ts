import { packageJSON } from '@app/core/packages/source/node';

describe('core', () => {
  describe('fromPackages', () => {
    describe('node', () => {
      describe('packageJSON', () => {
        describe('derivePackageJSONPath', () => {
          test("when 'packageDirPath' is an invalid, non-empty string", () => {
            // Arrange
            const packageDirPath = 'abc';
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
