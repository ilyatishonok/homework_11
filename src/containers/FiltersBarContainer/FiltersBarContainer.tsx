import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FiltersBar from '../../components/FiltersBar';
import { RootState } from '../../reducers';
import { setSearchQuery, setFilters, setSort } from '../../actions/filtersActions';
import getFilters from '../../selectors/getFilters';

const mapStateToProps = (state: RootState) => ({
    searchQuery: state.filters.search,
    filterValues: state.filters.filters,
    sort: state.filters.sort,
    filters: getFilters(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
    setFilters: (filters: string[]) => dispatch(setFilters(filters)),
    setSort: (sort: string) => dispatch(setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);