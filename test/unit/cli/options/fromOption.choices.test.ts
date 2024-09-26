import { fromOption } from '@app/cli/options';

describe('cli', () => {
  describe('options', () => {
    describe('fromOption', () => {
      describe('choices', () => {
        test('should be valid', () => {
          // Arrange
          const expected = 'npm';

          // Act
          const { argChoices } = fromOption;
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
