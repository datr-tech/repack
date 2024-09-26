import { toOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('toOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'brew';

          // Act
          const { argChoices } = toOption;
          const firstChoice =
            typeof argChoices !== 'undefined' && argChoices.length > 0
              ? argChoices[0]
              : '';

          // Assert
          expect(firstChoice).toEqual(expected);
        });
      });
    });
  });
});
