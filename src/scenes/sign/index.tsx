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
import { actions as toast } from '../../actions/toast';
import { SignUpForm, SignInForm, SignUpValidationSchema, SignInValidationSchema } from '../../utils/constants';
import { UserForm } from '../../types/user';
import { validateForm } from '../../utils/functions';

type SignProp = NativeStackNavigationProp<RootStackParamList, 'Sign'>;
type SignRouteProp = RouteProp<RootStackParamList, 'Sign'>;

type Props = {
  navigation: SignProp;
  route: SignRouteProp;
};

const SignScreen = ({ route }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [values, setValues] = useState<Record<string, string | boolean>>({});
    const [type, setType] = useState<('signUp'|'signIn')>(route.params.type);

    const formFields = useMemo(() => (type === 'signUp' ? SignUpForm : SignInForm), [type]);
    const validationSchema = useMemo(() => (type === 'signUp' ? SignUpValidationSchema : SignInValidationSchema), [type]);

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

    const onFormSubmit = () => {
        const validation = validateForm(values, validationSchema);
        if (validation) {
            dispatch(toast.setToast(validation));
            dispatch(userActions.error());
        } else {
            if (type === 'signIn')
                dispatch(userActions.performAuth(values.username as string, values.password as string));
            else if (type === 'signUp')
                dispatch(userActions.signUp(values as UserForm));
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={Logo} style={styles.logo} />

            <Form
                fields={formFields}
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
