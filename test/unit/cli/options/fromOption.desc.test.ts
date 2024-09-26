import { fromOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('desc', () => {
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
