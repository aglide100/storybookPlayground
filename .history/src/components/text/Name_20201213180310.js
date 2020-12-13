import React from 'react';
import PropTypes from 'prop-types';

export default function Name({ Name: { id, title, state }, onArchiveName, onPinTask }) {
    return (
      <div className={'list-item ${state}'}>
          <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={state === 'NAME_ARCHIVED'}
                disabled={true}
                name="checked"
            />
            <span className="checkbox-custom" onClick={() => onArchiveName(id)} />
          </label>
          <div className="title">
              <input type="text" value={title} readOnly={true} placeholder="Input title" />
          </div>

          <div className="actions" onClick={event => event.stopPropagation()}>
              {state !== 'NAME_ARCHIVED' && (
                  <a onClick={() => onPinTask(id)}>
                      <span className={'icon-star'} />
                  </a>
              )}
          </div>
      </div>
    );
  }

  // Name이라는 propType 선언 
  Name.propTypes = {
      name: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
      }),
      onArchiveName: PropTypes.func,
      onPinTask: PropTypes.func,
  }