import { readFileSync } from 'node:fs';
import { fileService } from '../../../../../src/core/services/fs';
import { IFileServiceOutput } from '../../../../../src/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileService', () => {
        describe("negative: validate() should be 'false'", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const path = process.env.REPACK_ROOT_DIR as string;

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const isValid = foundService.validate();

            // Assert
            expect(isValid).toBe(false);
          });
        });
        describe("negative: validate() should throw an error", () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = "path is empty";
            const path = "";

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            }

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a one char empty string", () => {
            // Arrange
            const expected = "path is empty";
            const path = " ";

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            }

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a one char empty string", () => {
            // Arrange
            const expected = "path is invalid";
            const path = "abc";

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            }

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});