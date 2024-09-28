import fs, { mkdirSync, rmdirSync } from 'node:fs';
import { isDir } from '@app/core/services/fs/helpers';

const dirPath = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isDir', () => {
        beforeAll(() => {
          mkdirSync(dirPath);
        });
        afterAll(() => {
          rmdirSync(dirPath);
        });
        describe('negative: should return false', () => {
          test("when 'path' represents a file", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = isDir({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' only contains a one char space", () => {
            // Arrange
            const expected = 'path is empty';
            const path = ' ';

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a non-empty, invalid string", () => {
            // Arrange
            const expected = 'path does not exist';
            const path = 'abc';
            jest.spyOn(fs, 'lstatSync').mockImplementationOnce(() => {
              throw new Error('fs error');
            });

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'fs' throws an error", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = dirPath;
            jest.spyOn(fs, 'lstatSync').mockImplementationOnce(() => {
              throw new Error('fs error');
            });

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
            jest.resetAllMocks();
          });
        });
      });
    });
  });
});
