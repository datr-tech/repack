import { fromOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('description', () => {
        test('should be valid', () => {
          // Arrange
          const expected = "the type of the 'from' package";

          // Act
          const { description } = fromOption;

          // Assert
          expect(description).toEqual(expected);
        });
      });
    });
  });
});
