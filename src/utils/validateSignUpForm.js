export const validateSignUpForm = (values) => {
    const errors = {};
    
    // First Name validation
    if (!values.firstName) {
        errors.firstName = 'First name is required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters';
    } else if (values.firstName.length > 25) {
        errors.firstName = 'Must be 25 characters or less';
    } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) {
        errors.firstName = 'Only letters and spaces are allowed';
    }
    
    // Last Name validation
    if (!values.lastName) {
        errors.lastName = 'Last name is required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters';
    } else if (values.lastName.length > 25) {
        errors.lastName = 'Must be 25 characters or less';
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
        errors.lastName = 'Only letters and spaces are allowed';
    }
    
    // Username validation
    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username.length < 3) {
        errors.username = 'Must be at least 3 characters';
    } else if (values.username.length > 20) {
        errors.username = 'Must be 20 characters or less';
    } else if (!/^[A-Za-z0-9_]+$/.test(values.username)) {
        errors.username = 'Only letters, numbers, and underscores are allowed';
    } else if (/^[0-9]/.test(values.username)) {
        errors.username = 'Username cannot start with a number';
    }
    
    // Email validation
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    } else if (values.password.length > 50) {
        errors.password = 'Password must be 50 characters or less';
    } else if (!/(?=.*[a-z])/.test(values.password)) {
        errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/(?=.*\d)/.test(values.password)) {
        errors.password = 'Password must contain at least one number';
    } else if (!/(?=.*[@$!%*?&])/.test(values.password)) {
        errors.password = 'Password must contain at least one special character (@$!%*?&)';
    }
    
    // Confirm Password validation
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }
    
    // Phone Number validation (optional field)
    if (values.phoneNum && !/^\d{3}-\d{3}-\d{4}$/.test(values.phoneNum)) {
        errors.phoneNum = 'Phone number must be in format XXX-XXX-XXXX';
    }
    
    // Terms and Conditions validation
    if (!values.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the Terms and Conditions';
    }
    
    return errors;
};
