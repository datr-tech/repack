import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('validate', () => {
          describe('negative: validate() should throw an error', () => {
            test("when 'path' is an empty string", () => {
              // Arrange
              const expected = 'path is empty';
              const path = '';

              // Act
              const foundService = fileServiceJSON({
                path,
              }) as IFileServiceOutput;
              const handler = () => {
                foundService.validate();
              };

              // Assert
              expect(handler).toThrow(expected);
            });
            test("when 'path' is a one char string", () => {
              // Arrange
              const expected = 'path is empty';
              const path = ' ';

              // Act
              const foundService = fileServiceJSON({
                path,
              }) as IFileServiceOutput;
              const handler = () => {
                foundService.validate();
              };

              // Assert
              expect(handler).toThrow(expected);
            });
            test("when 'path' is a one char string", () => {
              // Arrange
              const expected = 'path does not exist';
              const path = 'abc';

              // Act
              const foundService = fileServiceJSON({
                path,
              }) as IFileServiceOutput;
              const handler = () => {
                foundService.validate();
              };

              // Assert
              expect(handler).toThrow(expected);
            });
          });
        });
      });
    });
  });
});
