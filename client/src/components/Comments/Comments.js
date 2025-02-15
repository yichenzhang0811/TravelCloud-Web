import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getCommentsByPost } from "../../actions/commentActions";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";

import moment from "moment";
function ShowComments() {
  const { postId } = useParams(); // get postId from URL
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.commentsData.comments);
  const userId = useSelector((state) => state.auth?.authData?.user._id);

  useEffect(() => {
    dispatch(getCommentsByPost(postId));
  }, [dispatch, postId]);

  const handleDelete = (commentId) => {
    if (window.confirm("Are you sure to delete this comment? ")) {
      dispatch(deleteComment(commentId, postId));
    }
  };
  return (
    <>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <Card key={comment._id} className="mb-2">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {comment.user.username}
                </Card.Subtitle>
                <Card.Text>{comment.body}</Card.Text>
                <Card.Footer>
                  {" "}
                  {moment(comment.createdAt).format("MMMM D, YYYY h:mm A")}
                </Card.Footer>
              </Card.Body>
              {/* Only the author can see */}
              {userId === comment.user._id && (
                <button onClick={() => handleDelete(comment._id)}>
                  <MdDelete /> Delete
                </button>
              )}
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default ShowComments;
