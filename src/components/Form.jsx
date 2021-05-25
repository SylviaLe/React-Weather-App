//documentation: https://www.npmjs.com/package/react-places-autocomplete

import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
        }
    
        handleChange = address => {
        this.setState({ address });
        };
    
    
    render() {
        return (
            <div className="wrapper">
                <div>{this.props.error ? error():null}</div>
            <form action="" onSubmit={this.props.getWeather}>
                <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                    <input
                        {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                        id: 'search'
                        })}
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                        const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                            <div
                            {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                            })}
                            >
                            <span>{suggestion.description}</span>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                )}
                </PlacesAutocomplete>
                <button className="btn btn-outline-dark">Get Weather</button>
            </form>
            </div>
        );
        }
    }



function error(){
    return(
        <div className="alert alert-danger" role='alert'>
            Please enter something
        </div>
    )
}

export default Form
