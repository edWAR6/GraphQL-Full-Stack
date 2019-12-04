import '../styles/style.css';

import { Col, Container, Row } from 'reactstrap';
import { PostForm, PostList } from '../components';
import React, { Component } from 'react';

import { withPosts } from '../providers';

@withPosts
export default class PostRoot extends Component {
  render() {
    const { posts, postsLoading } = this.props;

    return (
      <Container>
        <h2 className="posts-title">Posts Module</h2>
        <hr />
        <Row>
          <Col>
            <PostList postsLoading={postsLoading} posts={posts}/>
          </Col>
          <Col>
            <PostForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
