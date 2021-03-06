import React, {Component} from 'react';

export default class IssueLabels extends Component {
	render() {
		var labels = this.props.labels;

		var labelItems;

		if (labels.length) {
			labelItems = labels.map(
				function(item, index) {
					var style = {
						backgroundColor: `#${item.color}`
					};

					return <span key={item.name} className="label label-sm" style={style}>{item.name}</span>;
				}
			);
		}
		else {
			labelItems = <span className="label label-sm label-info">Issue</span>;
		}

		return <span className="issue-labels">
			{labelItems}
		</span>;
	}
}

IssueLabels.defaultProps = {
	labels: []
};