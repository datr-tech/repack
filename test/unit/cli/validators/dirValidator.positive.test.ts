import { dirValidator } from '../../../../src/cli/validators';

describe('cli', () => {
  describe('validators', () => {
    describe('dirValidator', () => {
      describe('positive: should return the input', () => {
        test('when the input is a valid dir', () => {
          // Arrange
          const dirPath = process.env.REPACK_ROOT_DIR as string;

          // Act
          const found = dirValidator(dirPath);

          // Assert
          expect(found).toEqual(dirPath);
        });
      });
    });
  });
});
