import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';
    
export const Header = ({Hello}) => (
    <Button Hello={Hello}></Button>

    <section>
        <div>
            <div>
                <h3>This is index page</h3>
            </div>
            <div className="index-content">
                <div>
                    content
                    <ul>
                        <li>subcontent1</li>
                        <li>subcontent2</li>
                        <li>subcontent3</li>
                        <li>subcontent4</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
  
Header.propTypes = {

};

Header.defaultProps = {
    user: null,
  };
  