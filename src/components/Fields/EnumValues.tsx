import * as React from 'react';
import { ExampleValue, FieldLabel } from '../../common-elements/fields';

export interface EnumValuesProps {
  values: string[];
  type: string;
}

export class EnumValues extends React.PureComponent<EnumValuesProps> {
  render() {
    const { values, type } = this.props;
    if (!values.length) {
      return null;
    }

    return (
      <div>
        <FieldLabel>
          {type === 'array' ? 'Items' : ''} {values.length === 1 ? 'Value' : 'Enum'}:
        </FieldLabel>
        {values.map((value, idx) => (
          <span style={{ whiteSpace: 'nowrap' }}>
            <ExampleValue key={idx} style={{ marginRight: 0 }}>
              {JSON.stringify(value)}
            </ExampleValue>
            {idx !== values.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
    );
  }
}
