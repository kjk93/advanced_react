import React from 'React';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = this.props.store.getState();

  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId],
  // };

  render() {
    return (
      <ArticleList 
        articles={this.state.articles}
        store={this.props.store}
      />
    );
  }
}

export default App;