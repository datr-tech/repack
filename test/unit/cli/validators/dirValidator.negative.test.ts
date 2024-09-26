import * as path from 'path';
import { dirValidator } from '@app/cli/validators';

const rootPath = process.env.REPACK_ROOT_DIR as string;
const packageJsonPath = path.resolve(rootPath, 'package.json');

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
          const expected = 'path is invalid';

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
