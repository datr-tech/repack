import { toOption } from '../../../../src/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('toOption', () => {
      describe('attributeName', () => {
        test("should be 'to'", () => {
          // Arrange
          const expected = 'to';

          // Act
          const attributeName = toOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
