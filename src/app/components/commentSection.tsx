'use client'
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const CommentSection: React.FC = () => {
  // State for storing the list of comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment } // Adding a new comment with a unique id
      ]);
      setNewComment(''); // Reset the input field
    }
  };

  // Function to handle deleting a comment
  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  // Function to handle updating a comment
  const handleUpdateComment = (id: number, newText: string) => {
    setComments(
      comments.map(comment =>
        comment.id === id ? { ...comment, text: newText } : comment
      )
    );
  };

  return (
    <div className="comment-section mt-8 p-4 bg-gray-100 rounded-md shadow-lg">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      
      <div className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="comment p-4 mb-2 bg-white rounded-md shadow-md"
          >
            <p>{comment.text}</p>
            <div className="comment-actions mt-2">
              <button
                onClick={() => {
                  const updatedText = prompt(
                    'Edit your comment:',
                    comment.text
                  );
                  if (updatedText) {
                    handleUpdateComment(comment.id, updatedText);
                  }
                }}
                className="mr-2 text-yellow-500 hover:text-yellow-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
