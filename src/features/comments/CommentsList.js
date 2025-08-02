import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Comment from './Comments';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);

    if (isLoading) {
        return (
            <Col md="5" className="m-1">
                <span className="fa fa-spinner fa-spin fa-3x fa-fw text-primary" />
                <p>Loading Comments...</p>
            </Col>
        );
    }

    if (errMsg) {
        return (
            <Col md="5" className="m-1">
                <h4>Comments</h4>
                <p>Error: {errMsg}</p>
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }

    if (comments && comments.length > 0) {
        return (
            <Col md="5" className="m-1">
                <h4>Comments</h4>
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }
    return (
        <Col md="5" className="m-1">
            <div>There are no comments for this campsite yet.</div>
            <CommentForm campsiteId={campsiteId} />
        </Col>
    );
};

export default CommentsList;