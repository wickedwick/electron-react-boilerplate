// @flow
import React, { Component } from 'react';
import List from '@civicplus/preamble/lib/List';
import ListItem from '@civicplus/preamble/lib/ListItem';
import ExpansionPanel from '@civicplus/preamble/lib/ExpansionPanel';
import styles from './ContentList.css'; // eslint-disable-line

type Props = {
  contentItems: object
};

export default class ContentList extends Component<Props> {
  props: Props;

  render() {
    const { contentItems } = this.props;
    const itemPanels = contentItems.items.map(item => (
      <ListItem
        key={`list-item-${item.id}`}
        id={`list-item-${item.id}`}
        divider
      >
        <ExpansionPanel
          key={`list-item-expansion-${item.id}`}
          id={`list-item-expansion-${item.id}`}
          expandSummary={item.data.name.en}
          expandDetails={item.data.article.en}
        />
      </ListItem>
    ));
    return (
      <div>
        {contentItems.items.map(item => (
          <ExpansionPanel
            key={`list-item-expansion-${item.id}`}
            id={`list-item-expansion-${item.id}`}
            expandSummary={item.data.name.en}
            expandDetails={item.data.article.en}
          />
        ))}

        <List id="list" listItems={itemPanels} />
      </div>
    );
  }
}
