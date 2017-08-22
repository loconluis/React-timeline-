import React, { PropTypes } from 'react';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`}>
      <div>
        by: <a href={`mailto:${props.email}`}>{props.name}</a>
      </div>

      <p>
        {props.body}
      </p>
    </article>
  );
}

Comment.defaultProps = {
  id: 0,
  email: '',
  name: '',
  body: '',
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
