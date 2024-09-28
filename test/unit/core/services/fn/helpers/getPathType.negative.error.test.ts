import { getPathType } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is a non-empty, invalid string", () => {
            // Arrange
            const expected = 'path does not exist';
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
