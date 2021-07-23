import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../../../foundation/Text';

function formatNumber(number) {
  if (number < 1000) return number;
  if (number < 1000000) return `${(number / 1000).toFixed(0)}k`;
  return `${(number / 1000000).toFixed(0)}mi`;
}

const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: fit-content;
  padding: 10px;
`;

const StatWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  margin-right: 10px;
  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

StatsBox.Stat = ({ statName, statValue }) => (
  <StatWrapper>
    <Text
      tag="h2"
      color="tertiary.main"
      variant={{ xs: 'paragraph1Bold', md: 'subTitle' }}
    >
      {formatNumber(statValue)}
    </Text>
    <Text
      tag="p"
      color="tertiary.main"
      variant={{ xs: 'smallestException', md: 'paragraph1' }}
    >
      {statName}
    </Text>
  </StatWrapper>
);

StatsBox.Stat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};

export default StatsBox;
