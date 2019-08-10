import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commentsService from "../services/commentsService";
import { isLogged, getUser } from "../services/loginService";

class CommentsBlock extends Component {
  constructor(props) {
    super(props);

    this.isLogged = isLogged();
    this.user = getUser();
    this.state = {
      comments: [],
      comment: ""
    };
  }

  componentDidMount() {
    const recipeSlug = this.props.match.params.title;
    this.setState({ comments: commentsService.get(recipeSlug) });
  }

  handleComment = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const recipeSlug = this.props.match.params.title;
    const comment = { comment: this.state.comment };

    try {
      commentsService.insert(recipeSlug, comment);

      this.setState({
        comments: commentsService.get(recipeSlug),
        comment: ""
      });
    } catch (e) {
      alert(e);
    }
  };

  handleDelete = comment => {
    const recipeSlug = this.props.match.params.title;

    try {
      commentsService.delete(recipeSlug, comment);
      this.setState({
        comments: commentsService.get(recipeSlug)
      });
    } catch (e) {
      alert(e);
    }
  };

  renderComment = comment => (
    <div key={comment.comment} className="Comment media text-muted pt-3">
      <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle" />
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">{comment.author}</strong>
        {comment.comment}
      </p>
      {/* Icone deve aparecer somente quando o comentario for do usuario logado */}
      {this.user && this.user.username === comment.author ? (
        <FontAwesomeIcon
          icon="trash"
          onClick={() => this.handleDelete(comment)}
        />
      ) : null}
    </div>
  );

  render() {
    return (
      <div className="text-left">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>
          {this.state.comments.map(comment => this.renderComment(comment))}
        </div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Comment</label>
            <textarea
              disabled={!this.isLogged}
              value={this.state.comment}
              onChange={event => this.handleComment(event)}
              required="required"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Insert your comment here"
            />
          </div>
          <button
            disabled={!this.isLogged}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CommentsBlock);
