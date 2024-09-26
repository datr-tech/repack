import { toOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('toOption', () => {
      describe('longOption', () => {
        test("should be '--from", () => {
          // Arrange
          const expected = '--to';

          // Act
          const { long } = toOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
