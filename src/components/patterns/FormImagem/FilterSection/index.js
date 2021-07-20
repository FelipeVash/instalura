/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { FILTERS } from './filters';
import { FilterPlaceholder } from './FilterPlaceHolder';

export function FilterSection({ photoUrl, setSelectedFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        columnGap: '16px',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      {FILTERS.map((filterOption) => (
        <FilterPlaceholder
          filter={filterOption}
          photoUrl={photoUrl}
          setSelectedFilter={setSelectedFilter}
          key={filterOption}
        />
      ))}
    </div>
    // <FilterPlaceholder filter="" />
  );
}

FilterSection.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};
