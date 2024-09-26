import { fromOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('attributeName', () => {
        test("should be 'from'", () => {
          // Arrange
          const expected = 'from';

          // Act
          const attributeName = fromOption.attributeName();

          // Assert
          expect(attributeName).toEqual(expected);
        });
      });
    });
  });
});
