import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail 
        author="sam" 
        timeAgo="Today at 4:45PM" 
        commentText="nice blog post!" 
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));



