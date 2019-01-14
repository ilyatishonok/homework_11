import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FiltersBar from '../../components/FiltersBar';
import { RootState } from '../../reducers';
import { setSearchQuery, setFilters, setSort } from '../../actions/filtersActions';
import getFilters from '../../selectors/getFilters';

const mapStateToProps = (state: RootState) => ({
    searchQuery: state.filters.search,
    selectedSourceFilters: state.filters.sourceFilters,
    sort: state.filters.sort,
    sourceFilters: getFilters(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
    setSourceFilters: (sourceFilters: string[]) => dispatch(setFilters(sourceFilters)),
    setSort: (sort: string) => dispatch(setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);