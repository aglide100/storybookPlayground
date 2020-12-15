import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NameList from './components/list/NameList';

    
export function PureInboxScreen({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon=face=sad"></span>
                    <div>There's have some error!</div>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Namebox</span>
                </h1>
                <NameList />
            </nav>
        </div>
    );
}

PureInboxScreen.propTypes = {
    error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
    error: null,
};

export default connect(({error}) => ({error}))(PureInboxScreen);