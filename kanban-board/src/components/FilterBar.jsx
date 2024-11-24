import PropTypes from "prop-types";
import kanbanBoardStyles from "./KanbanBoardStyles";

const FilterBar = ({ filters, setFilters }) => (
  <div style={kanbanBoardStyles.filterBar}>
    <input
      type="text"
      name="date"
      placeholder="Filter by date"
      value={filters.date}
      onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      style={kanbanBoardStyles.filterInput}
    />
    <input
      type="text"
      name="member"
      placeholder="Filter by member"
      value={filters.member}
      onChange={(e) => setFilters({ ...filters, member: e.target.value })}
      style={kanbanBoardStyles.filterInput}
    />
    <input
      type="text"
      name="tag"
      placeholder="Filter by tag"
      value={filters.tag}
      onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
      style={kanbanBoardStyles.filterInput}
    />
  </div>
);

FilterBar.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterBar;
