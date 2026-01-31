import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    toggleCommentLike,
    deleteComment,
    initialContainerBackgroundClassNames,
    commentIndex,
  } = props
  const {id, name, comment, timeDistance, isLike} = commentDetails
  const commentLikeIconUrl = isLike
    ? '/images/liked-img.png'
    : '/images/like-img.png'
  const commentLikeClassName = isLike
    ? 'comment-like-text comment-liked'
    : 'comment-like-text'
  const commentUsernameInitialContainer = `comment-username-initial-container ${
    initialContainerBackgroundClassNames[
      commentIndex % initialContainerBackgroundClassNames.length
    ]
  }`
  const commentUsernameInitialLetter = name[0].toUpperCase()
  const onClickLike = () => {
    toggleCommentLike(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-card-container">
      <div className="comment-content-container">
        <p className={commentUsernameInitialContainer}>
          {commentUsernameInitialLetter}
        </p>
        <div className="comment-container">
          <div className="comment-username-container">
            <h1 className="comment-username capitalize">{name}</h1>
            <div className="comment-time-distance">{timeDistance}</div>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="comment-actions-container">
        <button className="comment-action-button" onClick={onClickLike}>
          <img
            src={commentLikeIconUrl}
            alt="Like"
            className="comment-like-icon"
          />
          <p className={commentLikeClassName}>Like</p>
        </button>
        <button
          className="comment-action-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="/images/delete-img.png "
            alt="delete"
            className="comment-delete-icon"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
