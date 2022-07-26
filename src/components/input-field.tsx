import { IInputProps, Input, Text, View } from 'native-base';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

export interface InputFieldProps extends IInputProps {
  name: string;
  control: Control<any, any>;
}

export const InputField: FC<InputFieldProps> = ({ control, name, ...inputProps }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState }) => (
        <View>
          <Input {...inputProps} onBlur={onBlur} onChangeText={onChange} value={value} />
          {fieldState.error != null && <Text color="danger.500">{fieldState.error?.message}</Text>}
        </View>
      )}
    />
  );
};
