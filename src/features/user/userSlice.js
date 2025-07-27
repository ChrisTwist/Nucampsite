import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// This is a mock API call. In a real app, this would be a fetch request.
const registerAPI = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData.username && userData.password) {
                const mockUser = { id: Date.now(), username: userData.username };
                console.log('Mock API: Registration successful for', mockUser);
                resolve({ data: mockUser });
            } else {
                console.error('Mock API: Registration failed');
                reject({ message: 'Invalid registration data.' });
            }
        }, 1000);
    });
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await registerAPI(userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload; // Auto-login on successful registration
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { setCurrentUser, logoutUser } = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserIsLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;
export const userReducer = userSlice.reducer;