import React from 'react';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

// import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'a'}, 
      b:{id: 'b'},
    },
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}/>
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });
});