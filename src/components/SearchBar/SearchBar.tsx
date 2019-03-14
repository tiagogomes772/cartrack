import React from 'react';

import './SearchBar.scss';

interface SearchBarProps {
    value: string;
    handleChange: (e: any) => void;
    toggleFilter: (index: number) => void;
    filters: any[];
}

export const SearchBar = ({value, handleChange, filters, toggleFilter}: SearchBarProps) => (
    <div className="search-bar">
        <div className="search-bar-input">
            <input placeholder="Search ..." type="text" value={value} onChange={handleChange} />
            <button className="search-bar-button" type="submit"><i className="fa fa-search" /></button>            
        </div>
        <div className="search-bar__filters">
        <h4>Filter by:</h4>
        {filters && filters.map((filter: any, index: number) => {
            const handleFilter = () => toggleFilter(index);
            return (
                <button 
                    key={filter.label} 
                    className={filter.enabled ? 'button button--enabled' : 'button button--disabled'} 
                    onClick={handleFilter}
                    tabIndex={0}
                >
                    {filter.label}
                </button>
            )
        })}
        </div>
    </div>
)