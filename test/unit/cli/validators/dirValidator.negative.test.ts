import { dirValidator } from '@app/cli/validators';

const packageJsonPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

describe('cli', () => {
  describe('validators', () => {
    describe('dirValidator', () => {
      describe('negative: should throw an error', () => {
        test("when the input is ''", () => {
          // Arrange
          const dir = '';
          const expected = 'path is empty';

          // Act
          const handler = () => {
            dirValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test("when the input is ' '", () => {
          // Arrange
          const dir = ' ';
          const expected = 'path is empty';

          // Act
          const handler = () => {
            dirValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test('when the input is a non-empty, invalid string', () => {
          // Arrange
          const dir = 'abc';
          const expected = 'path does not exist';

          // Act
          const handler = () => {
            dirValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
        test('when the input represents a file', () => {
          // Arrange
          const dir = packageJsonPath;
          const expected = 'dir is not a valid directory';

          // Act
          const handler = () => {
            dirValidator(dir);
          };

          // Assert
          expect(handler).toThrow(expected);
        });
      });
    });
  });
});
