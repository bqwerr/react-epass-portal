import React, { Component } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, Form } from "react-bootstrap";

class Posts extends Component {
  state = {
    posts: [],
  };
  title = React.createRef();
  description = React.createRef();
  componentDidMount() {
    var data = "";
    var config = {
      method: "get",
      url: "http://localhost:8080/api/posts/all",
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.data != null) {
          this.setState({ posts: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleAdd = () => {
    const { user } = this.props;
    if (user && user.authToken) {
      const data = {
        title: this.title.value,
        description: this.description.value,
      };
      const authToken = user.authToken;
      var config = {
        method: "post",
        url: "http://localhost:8080/api/posts/add",
        headers: {
          Authorization: "Bearer " + authToken,
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.data != null) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.title.value = "";
      this.description.value = "";
    }
  };

  //   handleDelete = async (post) => {
  //     const originalPosts = this.state.posts;

  //     const posts = this.state.posts.filter((p) => p.id !== post.id);
  //     this.setState({ posts });

  //     try {
  //       await axios.delete("" + "/" + post.id);
  //     } catch (ex) {
  //       if (ex.response && ex.response.status === 404)
  //         alert("This post has already been deleted.");
  //       this.setState({ posts: originalPosts });
  //     }
  //   };

  render() {
    const { posts } = this.state;
    const { user } = this.props;

    return (
      <React.Fragment>
        <ToastContainer />

        <br />
        {!user ? (
          <h4 className="text-primary text-center">Latest Announcements</h4>
        ) : (
          <h4 className="text-primary text-center">Your Announcements</h4>
        )}
        <br />
        <div className="col table-responsive-md">
          <table className={"table table-dark  text-white table-striped"}>
            <tbody>
              {posts

                .reverse()
                .slice(0, 4)
                .map((post) => (
                  <tr key={post.id}>
                    <td className="bg-dark text-white">
                      <strong>
                        {" "}
                        <p className="text-warning">{post.title}</p>
                      </strong>

                      <p>{post.description}</p>
                      {user && (
                        <div className="float-right">
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Button variant="danger" className="btn-sm">
                            Delete
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <br />
        {user && (
          <div className="col-md-8">
            <Card className={"border border-dark bg-dark text-white"}>
              <Card.Body>
                <Card.Title className="text-white">
                  New Announcement
                  <Button
                    variant="success"
                    onClick={this.handleAdd}
                    className="float-right"
                  >
                    Post
                  </Button>
                </Card.Title>
                <br />
                <div>
                  <Form.Control
                    className={"bg-dark text-white"}
                    ref={(input) => (this.title = input)}
                    placeholder="Title"
                  />
                  <br />
                  <Form.Control
                    as="textarea"
                    className={"bg-dark text-white"}
                    ref={(input) => (this.description = input)}
                    placeholder="Description"
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Posts;
