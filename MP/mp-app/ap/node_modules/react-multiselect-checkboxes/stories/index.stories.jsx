// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactMultiSelectCheckboxes from '../lib';
import { colourOptions, duplicateGroupOptions, groupedOptions } from './data';

storiesOf('ReactMultiselectCheckboxes', module)
  .add('Basic usage', () => <ReactMultiSelectCheckboxes options={colourOptions} />)
  .add('With groups', () => (
    <ReactMultiSelectCheckboxes options={groupedOptions} onChange={action('onChange')} />
  ))
  .add('Duplicate groups', () => (
    <ReactMultiSelectCheckboxes
      options={duplicateGroupOptions}
      getOptionValue={(o) => `${o.value} ${o.group}`}
      onChange={action('onChange')}
    />
  ))
  .add('with width', () => <ReactMultiSelectCheckboxes width={300} options={groupedOptions} />)
  .add('right-aligned', () => (
    <div
      style={{
        width: 500,
        position: 'relative',
        padding: 48,
        height: 40,
        border: '1px dashed black',
      }}
    >
      <div style={{ position: 'absolute', right: 0 }}>
        <ReactMultiSelectCheckboxes rightAligned options={groupedOptions} />
      </div>
    </div>
  ))
  .add('Custom placeholder button label', () => (
    <ReactMultiSelectCheckboxes
      options={groupedOptions}
      getDropdownButtonLabel={(args) => {
        const { placeholderButtonLabel, value: vals } = args;
        if (!vals || vals.length === 0) return placeholderButtonLabel;
        if (vals.length === 1) return `${vals[0].label}: ${vals[0].value}`;
        return `Selected bois: (${vals.length})`;
      }}
    />
  ))
  .add('max menu height', () => (
    <ReactMultiSelectCheckboxes options={groupedOptions} maxMenuHeight={600} />
  ))
  .add('hidden search', () => <ReactMultiSelectCheckboxes options={colourOptions} hideSearch />)
  .add('minItemsForSearch', () => (
    <ReactMultiSelectCheckboxes options={colourOptions} minItemsForSearch={100} />
  ))
  .add('min width', () => (
    <div>
      <h2>These selects have a min width of 200, but can go over that limit.</h2>
      <ReactMultiSelectCheckboxes
        options={[
          {
            value: 44,
            label: 'A very long label that is very long and will cause the text to wrap',
          },
        ].concat(colourOptions)}
        minWidth={200}
      />
    </div>
  ))
  .add('max width', () => (
    <div>
      <h2>These selects have a max width of 200, and will ellipsis after that limit.</h2>
      <ReactMultiSelectCheckboxes
        options={[
          {
            value: 44,
            label: 'A very long label that is very long and will cause the text to wrap',
          },
        ].concat(colourOptions)}
        maxWidth={200}
        onInputChange={action('InputChange')}
        name="max width"
      />
    </div>
  ));
