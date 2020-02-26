import React from 'react';
import PropTypes from 'prop-types';
import { Repositem } from './Repositem';
export const Repos = ({ repos }) => {
  return repos.map(repo => <Repositem repo={repo} key={repo.id} />);
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
