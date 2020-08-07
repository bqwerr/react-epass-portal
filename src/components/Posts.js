import React, { Component } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get("");
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post("", obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    const originalPost = { ...post };
    post.title = "UPDATED";
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });

    try {
      await axios.put("" + "/" + post.id, post);
    } catch (ex) {
      console.log("Reverting failed update for post:" + post.id);
      posts[index] = { ...originalPost };
      this.setState({ posts });
    }
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete("" + "/" + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    const { posts } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        <ToastContainer />
        {user && (
          <button
            className="btn btn-success float-right"
            onClick={this.handleAdd}
          >
            New Post
          </button>
        )}
        <br />
        {!user ? (
          <h4 className="text-primary text-center">Latest Announcements</h4>
        ) : (
          <p className="text-primary">Your Posts</p>
        )}
        <br />
        <div className="col table-responsive-md">
          <table className={"table table-dark  text-white table-striped"}>
            <tbody></tbody>
          </table>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Posts;
