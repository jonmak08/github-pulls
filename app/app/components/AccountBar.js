import React, {Component} from 'react';
import ExternalLink from './ExternalLink';
import Icon from './Icon';
import ManagementBar from './ManagementBar';
import PureRender from '../containers/PureRender';

@PureRender
class AccountBar extends Component {
	render() {
		var props = this.props;

		return <div className="account-bar" id="accountBar">
			<div className="app-column container-fluid-1280">
				<span className="user-info">
					<ExternalLink className="user-icon" href={'http://github.com/' + props.username}>
						<img className="img-responsive" src={props.avatar} />
					</ExternalLink> {' '}
					<ExternalLink href={'http://github.com/' + props.username} title={props.username} />
					{' '}
					<a href="javascript:;" onClick={() => props.openConfig()}>
						<Icon name="cog" />
					</a>
				</span>

				<span className="app-title">Github Pulls <span className="badge badge-primary badge-sm pull-count">{props.total}</span></span>

				<a className="logout" href="javascript:;" onClick={() => props.logoutAndRedirect()}>
					<Icon name="logout" /> Logout
				</a>
			</div>

			<div className="loading-bar">
				<div className="loading-effect"></div>
				<div className="loading-dots">
					<div className="loading-dot"></div>
					<div className="loading-dot"></div>
					<div className="loading-dot"></div>
				</div>
			</div>

			<ManagementBar {...props} />
		</div>;
	}
}

export default AccountBar;