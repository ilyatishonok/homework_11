import { connect } from 'react-redux';
import ArticlesList from '../../components/ArticleList';
import { RootState } from '../../reducers';
import getFilteredArticles from '../../selectors/getFilteredArticles';

const mapStateToProps = (state: RootState) => ({
    articles: getFilteredArticles(state),
    isFetching: state.articles.isFetching,
    error: state.articles.error,
    activeTab: state.articles.activeTab,
});

export default connect(mapStateToProps)(ArticlesList);