import { getPathType } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is an invalid string", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = 'abc';

            // Act
            const handler = () => {
              getPathType({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});
