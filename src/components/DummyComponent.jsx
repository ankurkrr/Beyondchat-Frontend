import React from 'react';
import PropTypes from 'prop-types';

const DummyComponent = ({ data }) => {
    return (
        <div className="dummy-component">
            <h2>Dummy Data</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

DummyComponent.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DummyComponent;