import { fromOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('longOption', () => {
        test("should be '--from", () => {
          // Arrange
          const expected = '--from';

          // Act
          const { long } = fromOption;

          // Assert
          expect(long).toEqual(expected);
        });
      });
    });
  });
});
