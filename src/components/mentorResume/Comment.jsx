import CommentList from './CommentList';
import CommentWrite from './CommentWrite';

const Comment = ({ feedback }) => {
    return (
        <>
            {feedback ? (
                <>
                    <CommentList />
                    <CommentWrite />
                </>
            ) : (
                <>
                    <CommentWrite />
                </>
            )}
        </>
    );
};

export default Comment;
