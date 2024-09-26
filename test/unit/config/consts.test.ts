import {
  CONSTS_PROGRAMME_NAME,
  CONSTS_PROGRAMME_DESCRIPTION,
  CONSTS_COMMAND_REPACK_NAME,
  CONSTS_COMMAND_REPACK_DESCRIPTION,
  CONSTS_EMPTY_STRING,
  CONSTS_FILE_TYPE_JSON,
  CONSTS_PERIOD_STRING,
} from '../../../src/config/consts';

describe('config', () => {
  describe('consts', () => {
    test('CONSTS_PROGRAMME_NAME', () => {
      expect(CONSTS_PROGRAMME_NAME).toBe('repack');
    });
    test('CONSTS_PROGRAMME_DESCRIPTION', () => {
      expect(CONSTS_PROGRAMME_DESCRIPTION).toBe(
        'Repackage CLI language packages',
      );
    });
    test('CONSTS_COMMAND_REPACK_NAME', () => {
      expect(CONSTS_COMMAND_REPACK_NAME).toBe('repack');
    });
    test('CONSTS_COMMAND_REPACK_DESCRIPTION', () => {
      expect(CONSTS_COMMAND_REPACK_DESCRIPTION).toBe(
        "Repackage 'from' 'to' packages",
      );
    });
    test('CONSTS_EMPTY_STRING', () => {
      expect(CONSTS_EMPTY_STRING).toBe('');
    });
    test('CONSTS_FILE_TYPE_JSON', () => {
      expect(CONSTS_FILE_TYPE_JSON).toBe('json');
    });
    test('CONSTS_PERIOD_STRING', () => {
      expect(CONSTS_PERIOD_STRING).toBe('.');
    });
  });
});