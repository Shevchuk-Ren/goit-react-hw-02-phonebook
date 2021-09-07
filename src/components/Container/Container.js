import React from 'react';
import { Wrapper } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;


Container.propTypes = {
    children: PropTypes.array.isRequired
};


export default Container;
