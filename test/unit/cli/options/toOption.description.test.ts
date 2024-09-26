import { toOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('toOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = "the type of the 'to' package";

          // Act
          const { description } = toOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
