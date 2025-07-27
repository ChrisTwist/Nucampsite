import { validateUsername } from './validateUsername';

describe('validateUsername', () => {
    test('should return error for empty username', () => {
        const result = validateUsername('');
        expect(result).toBe('Username is required');
    });

    test('should return error for username shorter than 3 characters', () => {
        const result = validateUsername('ab');
        expect(result).toBe('Username must be at least 3 characters long');
    });

    test('should return error for username longer than 20 characters', () => {
        const result = validateUsername('a'.repeat(21));
        expect(result).toBe('Username must be no more than 20 characters long');
    });

    test('should return error for username with special characters', () => {
        const result = validateUsername('user@name');
        expect(result).toBe('Username can only contain letters, numbers, and underscores');
    });

    test('should return empty string for valid username', () => {
        const result = validateUsername('valid_user123');
        expect(result).toBe('');
    });
});
