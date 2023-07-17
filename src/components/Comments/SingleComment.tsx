import React from 'react';
import { Avatar } from 'antd';

type SingleCommentProps = {
  comment: string;
  avatarUrl: string;
  type: 'sending' | 'receiving';
};

export const SingleComment: React.FC<SingleCommentProps> = ({ comment, avatarUrl, type }) => {
  const containerClassName = type === 'sending' ? 'sending-comment' : 'receiving-comment';

  const commentStyle: React.CSSProperties = {
    backgroundColor: type === 'sending' ? '#FFD099' : '#F5F5F5',
    borderRadius: type === 'sending' ? '10px 0 10px 10px' : '0 10px 10px 10px',
    textAlign: type === 'sending' ? 'right' : 'left',
    width: type === 'sending' ? 'fit-content' : '100%',
  };

  return (
    <div className={containerClassName}>
      {type !== 'sending' && (
        <div className="avatar">
          <Avatar src={avatarUrl} size={40} style={{background:'#d5f5d5'}} />
        </div>
      )}
      <div className="comment" style={commentStyle}>
        {comment}
      </div>
      {type === 'sending' && (
        <div className="avatar">
          <Avatar src={avatarUrl} size={40} style={{background:'#dcccdc'}} />
        </div>
      )}
    </div>
  );
};
