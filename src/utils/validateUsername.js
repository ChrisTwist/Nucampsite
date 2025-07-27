export const validateUsername = (username) => {
    if (!username) {
        return 'Username is required';
    }
    
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    
    if (username.length > 20) {
        return 'Username must be no more than 20 characters';
    }
    
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        return 'Username can only contain letters, numbers, and underscores';
    }
    
    return null; // No errors
};