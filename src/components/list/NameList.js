import React from 'react';
import PropTypes from 'prop-types';


import Name from '../text/Name';
import { connect } from 'react-redux';
import { archiveName, pinName} from '../../lib/redux';

export function NameList({ loading, names, onPinName, onArchiveName}) {
    const events = {
        onPinName,
        onArchiveName,
    };

    const LoadingRow = (
        <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
        <div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>
        );
    }

    if (names.length === 0) {
        return (
        <div className="list-items">
            <div className="wrapper-message">
                <span className="icon-check"/>
                <div className="title-message">You have no names</div>
                <div className="subtitle-message">subtitle message</div>
            </div>
        </div>
        );
    }

    const namesInOrder = [
        ...names.filter(n => n.state === 'NAME_PINNED'),
        ...names.filter(n => n.state !== 'NAME_PINNED'),
    ];

    return (
        <div className="list-items">
        {namesInOrder.map(name => (
            <Name key={name.id} name={name} {...events} />
        ))}
        </div>
    );
};

PureNameList.propTypes = {
    loading: PropTypes.bool,
    names: PropTypes.arrayOf(Name.prototype.name).isRequired,
    onPinName: PropTypes.func.isRequired,
    onArchiveName: PropTypes.func.isRequired,
};

PureNameList.defaultProps = {
    loading: false,
};

export default connect(
    ({ names }) => ({
        names: names.filter(n => n.state === 'NAME_INBOX' || n.state === 'NAME_PINNED' ),
    }),
    dispatch => ({
        onArchiveName: id => dispatch(archiveName(id)),
        onPinName: id => dispatch(pinName(id)),
    })
)(PureNameList);