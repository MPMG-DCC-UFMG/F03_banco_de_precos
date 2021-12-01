import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import CheckboxOption from './CheckboxOption';
import CheckboxGroup, { CheckboxGroupHeading } from './CheckboxGroup';
import { groupedOptions } from './data';
import DropdownButton from './DropdownButton';
import Dropdown from './Dropdown';
import DropdownIndicator from './DropdownIndicator';
import ChevronDown from './ChevronDown';

const selectStyles = {
  control: (provided) => ({ ...provided, minWidth: 240, margin: 8 }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
};

const defaultComponents = {
  Dropdown,
  DropdownButton,
  DropdownButtonIcon: ChevronDown,
};

export default class PopoutExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Dropdown: PropTypes.func,
      DropdownButton: PropTypes.func,
      DropdownButtonIcon: PropTypes.func,
    }),
  };
  static defaultProps = {
    components: {},
  };

  state = { isOpen: false, value: undefined };

  onSelectChange = (value) => {
    // this.toggleOpen();
    this.setState({ value });
  };

  toggleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const components = {...defaultComponents, ...this.props.components};
    const { isOpen, value } = this.state;
    return (
      <components.Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        target={
          <components.DropdownButton
            iconAfter={<components.ChevronDown />}
            onPress={this.toggleOpen}
            isSelected={isOpen}
          >
            {value ? `State: ${value.label}` : 'Select a State'}
          </components.DropdownButton>
        }
      >
        <Select
          autoFocus
          isMulti
          closeMenuOnSelect={false}
          backspaceRemovesValue={false}
          components={{
            DropdownIndicator,
            IndicatorSeparator: null,
            Option: CheckboxOption,
            GroupHeading: CheckboxGroupHeading,
            Group: CheckboxGroup,
          }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={this.onSelectChange}
          options={groupedOptions}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
    );
  }
}
