import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const {branding}=props;
    // noinspection JSAnnotator
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">

            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}</a>
            </div>
        </nav>
    )
};
Header.defaultProps = {
    branding :"Students List"
};
Header.propTypes = {
    branding : PropTypes.string.isRequired
};

export default Header;