import { TextField } from '@mui/material';
import { format } from 'date-fns'
import React, { useState } from 'react'

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    text: '',
    username: 'Anonymous', // Default username
    timestamp: new Date().toISOString(), // Default timestamp
  });
  const [commentError, setCommentError] = useState('');

  const handleCommentChange = (event) => {
    setNewComment({

      ...newComment,
      text: event.target.value,
    }
    );
  };

  const handleAddComment = () => {
    if (newComment.text.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment((prevComment) => ({
        text: '',
        username: 'Anonymous', // Reset username if needed
        timestamp: new Date().toISOString(),
      }));
    }
  };
  return (
    <>
      <div className="comments-section">
        <h3>Comments</h3>
        <ul className="comments-list">
          {comments.map((comment, commentIndex) => (
            <li className="comment" key={commentIndex}>
              <strong>{comment.username}:</strong> {comment.text} - <em>Date: {format(new Date(comment.timestamp), 'yyyy-MM-dd')}</em>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-comment-section">
        <TextField
          label="Add a comment"
          variant="outlined"
          fullWidth
          value={newComment.text}
          sx={{ width: '100%', maxWidth: '500px' }}
          onChange={handleCommentChange}
          error={commentError !== ''}
          helperText={commentError}
        />
        <button className='commentbutton' variant="contained" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>
    </>
  )
}

export default Comments