import { toOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('toOption', () => {
      describe('shortOption', () => {
        test("should be '-t", () => {
          // Arrange
          const expected = '-t';

          // Act
          const { short } = toOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
