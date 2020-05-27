import React, { Component } from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import SharedButton from './components/button/Button';
import ListItem from './components/myListItem/myListItem';
import { connect } from 'react-redux';
import { fetchPosts } from './redux/actions';
import './App.scss';

const tempArr = [{
  fName: 'Ninfa',
  lName: 'Blogs',
  email: 'ninfa_sys@hotmail.com',
  age:32,
  onlineStatus: true
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    }
    return (
      <div className="App">
        <Header/>
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={post.id} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
