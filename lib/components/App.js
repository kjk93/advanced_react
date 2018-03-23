import React from 'React';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickBy';
import TimeStamp from './TimeStamp';

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState());
  }

  componentDidMount() {
    this.subsciptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subsciptionId);
  }

  render() {
    let {articles, searchTerm} = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
          || value.body.match(searchRE);
      });
    }

    return (
      <div>
        <TimeStamp />
        <SearchBar />
        <ArticleList 
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;