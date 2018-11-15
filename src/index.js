import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail 
          author="sam" 
          timeAgo="Today at 4:45PM" 
          commentText="nice blog post!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="sam" 
          timeAgo="Today at 4:45PM" 
          commentText="nice blog post!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="sam" 
          timeAgo="Today at 4:45PM" 
          commentText="nice blog post!" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));



