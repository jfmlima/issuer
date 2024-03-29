import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import './Issue.css';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  render() {

    const issue = this.props.issue;
    const noImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmph60IV4crXtipTBXvZ4MW5giOLNy2EEhFRMotmorQuTl2iKRh8PEWk';
    return (
      <Card className="Issue" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={`${issue.title}`}
          subtitle={`@${issue.author.login} - ${issue.createdAt}`}
          avatar={issue.author.avatarUrl ? issue.author.avatarUrl : noImage}
        />
        <Divider />
        <CardHeader
          style={{ "backgroundColor": "currentColor" }}
        >
          <div className="Repository">
            <a href={issue.repository.url}>@{issue.repository.owner.login}/{issue.repository.name}</a>
          </div>
        </CardHeader>
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label={this.state.expanded ? 'Less' : 'More'}
          />
        </CardText>
        <CardText expandable={true}>
          {issue.body !== '' ? issue.body : 'No contents'}
        </CardText>
      </Card>
    );
  }
}

export default Issue;