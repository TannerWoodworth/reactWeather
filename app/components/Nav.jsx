var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return (
		<div>
			<strong>Nav Component</strong>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);
}

module.exports = Nav;