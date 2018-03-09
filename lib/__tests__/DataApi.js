import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articlesId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const articles = api.getArticles();
    const articlesId = data.articles[0].id;
    const articleFirstName = data.articles[0].firstName;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].firstName).toBe(articleFirstName);
  });
});