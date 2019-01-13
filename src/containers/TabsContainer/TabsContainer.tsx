import { connect } from 'react-redux';
import Tabs from '../../components/Tabs';
import { RootState } from '../../reducers';
import { fetchArticles } from '../../actions/articlesActions';
import { ThunkDispatch } from 'redux-thunk';
import { ArticleActions } from '../../store/types/articles';

const mapStateToProps = (state: RootState) => ({
    activeTab: state.articles.activeTab,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, ArticleActions>) => ({
    onTabChange: (tab: string) => dispatch(fetchArticles(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);