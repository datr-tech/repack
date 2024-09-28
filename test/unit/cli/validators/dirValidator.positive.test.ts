import { dirValidator } from '@app/cli/validators';

describe('cli', () => {
  describe('validators', () => {
    describe('dirValidator', () => {
      describe('positive: should return the input', () => {
        test('when the input is a valid dir', () => {
          // Arrange
          const dirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;

          // Act
          const found = dirValidator(dirPath);

          // Assert
          expect(found).toEqual(dirPath);
        });
      });
    });
  });
});
