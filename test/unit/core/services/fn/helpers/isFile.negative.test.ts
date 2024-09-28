import { isFile } from '@app/core/services/fs/helpers';
import fs from 'node:fs';

const filePath = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isFile', () => {
        beforeAll(() => {
          global.jestTouchFileSync(filePath);
        });
        afterAll(() => {
          global.jestRemoveFileSync(filePath);
        });
        describe('negative: should return false', () => {
          test("when 'path' represents a dir", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_DIR;

            // Act
            const found = isFile({ path });

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
              isFile({ path });
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
              isFile({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a non-empty, invalid string", () => {
            // Arrange
            const expected = 'path does not exist';
            const path = 'abc';

            // Act
            const handler = () => {
              isFile({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'fs' throws an error", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = filePath;
            jest.spyOn(fs, 'lstatSync').mockImplementationOnce(() => {
              throw new Error('fs error');
            });

            // Act
            const handler = () => {
              isFile({ path });
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
