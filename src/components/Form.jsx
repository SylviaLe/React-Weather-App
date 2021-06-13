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
    
    //turn on the cors Chrome extension in order to run
    render() {
        return (
            <div className="wrapper">
                <h1 className="display-3 my-4 text-center text-light">How's the weather today?</h1>
                <div>{this.props.error ? error():null}</div>
                <form action="" onSubmit={this.props.getWeather} class='text-center'>
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
                    <button className="btn btn-light text-info d-block mx-auto mt-3">Get Weather</button>
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
