import { dirArgument } from '@app/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('dirArgument', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = "the full path to the 'from' package dir";

          // Act
          const { description } = dirArgument;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
