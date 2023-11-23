import CommentList from './CommentList';
import CommentWrite from './CommentWrite';

const Comment = () => {
    const feedback = true;

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
