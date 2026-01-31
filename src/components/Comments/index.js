import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const appStartDateTime = new Date()

class CommentsApp extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  onChangeNameInput = event => {
    const nameInput = event.target.value
    this.setState({nameInput})
  }

  onChangeCommentInput = event => {
    const commentInput = event.target.value
    this.setState({commentInput})
  }

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    if (nameInput !== '' && commentInput !== '') {
      const newComment = {
        id: uuidv4(),
        name: nameInput,
        comment: commentInput,
        timeDistance: formatDistanceToNow(appStartDateTime),
        isLike: false,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        nameInput: '',
        commentInput: '',
      }))
    }
  }

  toggleCommentLike = id => {
    this.setState(prevState => {
      const updatedList = prevState.commentsList.map(comment => {
        if (comment.id === id) {
          return {...comment, isLike: !comment.isLike}
        } else {
          return comment
        }
      })
      return {
        commentsList: updatedList,
      }
    })
  }

  deleteComment = id => {
    this.setState(prevState => {
      const updatedList = prevState.commentsList.filter(
        comment => comment.id !== id,
      )
      return {
        commentsList: updatedList,
      }
    })
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    const totalComments = commentsList.length

    return (
      <div className="app-container">
        <div className="comments-app-container">
          <h1 className="heading">Comments</h1>
          <div className="mid-container">
            <img
              src="/Comments-App/images/comments-img.png"
              alt="comments"
              className="comments-img"
            />
            <form className="form-container">
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
              ></textarea>
              <button className="add-comment-btn" onClick={this.addComment}>
                Add Comment
              </button>
            </form>
          </div>
          <hr className="line" />
          <p className="comments-counter">
            <span className="comments-count">{totalComments}</span>Comments
          </p>
          <ul className="comments-container">
            {commentsList.map((eachComment, index) => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleCommentLike={this.toggleCommentLike}
                deleteComment={this.deleteComment}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                commentIndex={index}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CommentsApp
