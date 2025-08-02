import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/oldData/COMMENTS';

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        // Simulate async operation with local data
        return new Promise((resolve) => {
            setTimeout(() => resolve(COMMENTS), 200);
        });
    }
);

export const postComment = createAsyncThunk(
    'comments/postComment',
    async (comment, { dispatch }) => {
        // Simulate posting comment locally
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(addComment(comment));
                resolve(comment);
            }, 300);
        });
    }
);

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload:', action.payload);
            console.log('addComment state.commentsArray:', state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.commentsArray = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postComment.rejected]: (state, action) => {
            alert('Your comment could not be posted\nError: ' + (action.error ? action.error.message : action.payload));
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};