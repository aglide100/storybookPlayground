import React from 'react';

import Name from '../text/Name';

export default function NameList({ loading, names, onPinName, onArchiveName}) {
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
            <Name key={"test"} name={name} {...events} />
        ))}
        </div>
    );
};