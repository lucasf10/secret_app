import React, { useMemo, useState } from 'react';
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/WelcomeStack';

import styles from './style';
import { Logo } from '../../assets/images';
import Form from '../../components/organisms/Form';
import { actions as userActions } from '../../actions/user';
import { SignUpForm, SignInForm } from '../../utils/constants';

type SignProp = NativeStackNavigationProp<RootStackParamList, 'Sign'>;
type SignRouteProp = RouteProp<RootStackParamList, 'Sign'>;

type Props = {
  navigation: SignProp;
  route: SignRouteProp;
};

const SignScreen = ({ navigation, route }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<Record<string, string | boolean>>({});
    const [type, setType] = useState<('signUp'|'signIn')>(route.params.type);

    const form = useMemo(() => (type === 'signUp' ? SignUpForm : SignInForm), [type]);

    const onFormSubmit = () => {
        dispatch(userActions.performAuth(values.username as string, values.password as string));
    };

    const switchForm = () => {
        const toType = (type === 'signUp') ? 'signIn' : 'signUp';
        setType(toType);
        setValues({});
    };

    const onValueChange = (name: string, value: string | boolean) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={Logo} style={styles.logo} />

            <Form
                fields={form}
                onFormSubmit={onFormSubmit}
                onValueChange={onValueChange}
                submitLabel={`Sign ${type === 'signUp' ? 'Up' : 'In'}`}
                values={values}
            />

            <TouchableOpacity onPress={switchForm}>
                <Text style={styles.loginButton}>
                    { type === 'signUp' && 'Already have an account?' }
                    { type === 'signIn' && 'Still don\'t have an account?' }
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default SignScreen;
