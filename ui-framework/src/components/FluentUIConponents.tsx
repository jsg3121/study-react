import { Announced, DetailsList, Fabric, DetailsListLayoutMode, Selection, IColumn, ITextFieldStyles, MarqueeSelection, mergeStyles, Text, TextField } from '@fluentui/react';
import React, { FormEvent, useState } from 'react';

const exampleChildClass = mergeStyles({
  display: 'block',
  marginBottom: '10px',
});

const textFieldStyles: Partial<ITextFieldStyles> = { root: { maxWidth: '300px' } };

interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}

const FluentUIConponents = () => {

  const _selection = new Selection({
    onSelectionChanged: () => {
      return setSelectionDetail(_getSelectionDetails());
    }
  });

  const _allItems: IDetailsListBasicExampleItem[] = [];
  for (let i = 0; i < 200; i++) {
    _allItems.push({
      key: i,
      name: 'Item ' + i,
      value: i,
    });
  }

  const [selectionDetail, setSelectionDetail] = useState(_getSelectionDetails());
  const [items, setItems] = useState(_allItems);


  const _columns: IColumn[] = [
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
  ];


  function _getSelectionDetails(): string {
    const selectionCount = _selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (_selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
      default:
        return `${selectionCount} items selected`;
    }
  }

  const _onFilter = (ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    const itemFilter = text ? items.filter(i => i.name.toLowerCase().indexOf(text) > -1) : items;
    setItems(itemFilter);
  };

  const _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };

  return (
    <Fabric>
      <div className={exampleChildClass}>{selectionDetail}</div>
      <Text>
        Fluent UI Test Components
      </Text>
      <Announced message={selectionDetail}></Announced>
      <TextField
        className={exampleChildClass}
        label="Filter by name :"
        styles={textFieldStyles}
      >
      </TextField>
      <Announced message={`Number of items after filter applied: ${items.length}.`} />
      <MarqueeSelection selection={_selection}>
        <DetailsList
          items={items}
          columns={_columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          selection={_selection}
          selectionPreservedOnEmptyClick={true}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"
          onItemInvoked={_onItemInvoked}
        />
      </MarqueeSelection>
    </Fabric>
  );

};

export default FluentUIConponents;;