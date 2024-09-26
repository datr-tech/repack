import { dirArgument } from '@app/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('dirArgument', () => {
      describe('required', () => {
        test('should be true', () => {
          // Arrange
          const expected = true;

          // Act
          const { required } = dirArgument;

          // Assert
          expect(required).toEqual(expected);
        });
      });
    });
  });
});
