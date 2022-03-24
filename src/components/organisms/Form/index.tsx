import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './style';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { State } from '../../../types/common';
import Loader from '../../atoms/Loader';

export interface Field {
  name: string;
  placeholder: string;
  type?: string;
  onBlur?: () => void;
}

export interface Props {
  fields: Array<Field>;
  values: Record<string, any>;
  submitLabel: string;
  onValueChange: (name: string, value: string | boolean) => void;
  onFormSubmit: () => void;
}

const Form = (props: Props): React.ReactElement => {
  const { fields, onValueChange, values, onFormSubmit, submitLabel } = props;
  const isLoading = useSelector((state: State) => state.user.isFetching);

  const renderField = (item: Field) => {
    return (
      <Input
        key={item.name}
        onBlur={item.onBlur}
        value={values[item.name]}
        onChange={(value: string) => onValueChange(item.name, value)}
        placeholder={item.placeholder}
        style={styles.inputStyle}
        secureTextEntry={item.type === 'password'}
      />
    );
  }

  return (
    <View style={styles.container}>
      {fields.map((item) => renderField(item))}

      { isLoading ? (
        <Loader style={styles.loading}/>
      ) : (
        <Button
          onClick={onFormSubmit}
          title={submitLabel}
          viewStyle={styles.sendButtonStyle}
        />
      )}
    </View>
  );
};

export default Form;
