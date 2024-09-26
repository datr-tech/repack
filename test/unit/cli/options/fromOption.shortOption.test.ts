import { fromOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('shortOption', () => {
        test("should be '-f", () => {
          // Arrange
          const expected = '-f';

          // Act
          const { short } = fromOption;

          // Assert
          expect(short).toEqual(expected);
        });
      });
    });
  });
});
