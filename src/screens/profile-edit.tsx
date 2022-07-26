import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, View, VStack } from 'native-base';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native';
import { z } from 'zod';
import { InputField } from '../components/input-field';

const schema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().min(1, 'Campo obrigatório'),
  gender: z.string().min(1, 'Campo obrigatório'),
  birthday: z.string().min(1, 'Campo obrigatório'),
  phone: z.string().min(1, 'Campo obrigatório'),
  email: z.string().min(1, 'Campo obrigatório'),
});

export const ProfileEditScreen: FC = () => {
  const form = useForm<any>({
    defaultValues: {
      name: 'Natasha Henderson',
      cpf: '02104156068',
      gender: 'female',
      birthday: '2022-12-02',
      phone: '11988776655',
      email: 'natasha.henderson@mail.com',
    },
    resolver: zodResolver(schema),
  });
  const handleSubmit = (data: typeof schema['_input']) => {
    console.log(data);
  };
  return (
    <SafeAreaView>
      <View h="100%" px={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Editar Perfil
        </Text>
        <VStack space={4}>
          <InputField control={form.control} name="name" size="lg" placeholder="Nome" />
          <InputField control={form.control} name="cpf" size="lg" placeholder="CPF" />
          <InputField control={form.control} name="gender" size="lg" placeholder="Gênero" />
          <InputField
            control={form.control}
            name="birthday"
            size="lg"
            placeholder="Data de Nascimento"
          />
          <InputField control={form.control} name="phone" size="lg" placeholder="Telefone" />
          <InputField control={form.control} name="email" size="lg" placeholder="Email" />
          <Button variant="ghost" size="lg" colorScheme="gray">
            Alterar Senha
          </Button>
          <Button size="lg" onPress={form.handleSubmit(handleSubmit)}>
            Salvar
          </Button>
        </VStack>
      </View>
    </SafeAreaView>
  );
};
