import { dirArgument } from '../../../../src/cli/arguments';

describe('cli', () => {
  describe('arguments', () => {
    describe('dirArgument', () => {
      describe('name', () => {
        test("should be 'dir'", () => {
          // Arrange
          const expected = 'dir';

          // Act
          const name = dirArgument.name();

          // Assert
          expect(name).toEqual(expected);
        });
      });
    });
  });
});
