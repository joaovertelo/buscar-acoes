import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import AsyncSelect from 'react-select/lib/Async';
import Select from 'react-select';

PropTypes.props = {};

class AutoComplete extends Component {
	render() {
        console.log(this.props)
		return <Select isMulti options={this.props.options} />;
	}
}

export default AutoComplete;
