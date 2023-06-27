import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from './NextChakraLink';
import Text from './Text';
import FieldForm from './Forms/FieldForm';
import useAuth from '../hooks/useAuth';
import useStyle from '../hooks/useStyle';
import modifyEnv from '../../../modifyEnv';
import { setStorageItem } from '../../utils';
import ModalInfo from '../../js_modules/moduleMap/modalInfo';

const ShowOnSignUp = ({ headContent, title, description, subContent, readOnly, children, ...rest }) => {
  const BREATHECODE_HOST = modifyEnv({ queryString: 'host', env: process.env.BREATHECODE_HOST });
  const { isAuthenticated, user, logout } = useAuth();
  const { backgroundColor, featuredColor } = useStyle();
  const [showAlreadyMember, setShowAlreadyMember] = useState(false);
  const { t } = useTranslation('workshops');
  const router = useRouter();
  const [formProps, setFormProps] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const subscriptionValidation = Yup.object().shape({
    first_name: Yup.string().min(2, t('common:validators.short-input')).max(50, t('common:validators.long-input')).required(t('common:validators.first-name-required')),
    last_name: Yup.string().min(2, t('common:validators.short-input')).max(50, t('common:validators.long-input')).required(t('common:validators.last-name-required')),
    email: Yup.string().email(t('common:validators.invalid-email')).required(t('common:validators.email-required')),
  });

  const commonBorderColor = useColorModeValue('gray.250', 'gray.700');

  const handleSubmit = async (actions, allValues) => {
    const resp = await fetch(`${BREATHECODE_HOST}/v1/auth/subscribe/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': router?.locale || 'en',
      },
      body: JSON.stringify({
        ...allValues,
        plan: '4geeks-standard',
      }),
    });

    const data = await resp.json();

    // if (data?.access_token && data?.is_email_validated === false) {
    //   toast({
    //     position: 'top',
    //     status: 'warning',
    //     title: t('signup:alert-message-validate-email.title'),
    //     description: (
    //       <Box>
    //         {t('signup:alert-message-validate-email.description')}
    //         {' '}
    //         <Link variant="default" color="blue.200" href="/">4Geeks.com</Link>
    //         .
    //         <br />
    //         {t('signup:alert-message-validate-email.description2')}
    //       </Box>
    //     ),
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
    if (data?.access_token) {
      setStorageItem('redirect-after-register', router?.asPath);
      router.push({
        pathname: '/checkout',
        query: {
          plan: '4geeks-standard',
          token: data.access_token,
        },
      });
    }

    if (typeof resp?.status === 'number' && data?.access_token === null) {
      actions.setSubmitting(false);
      if (resp.status < 400 && typeof data?.id === 'number') {
        setStorageItem('subscriptionId', data.id);
        router.push('/thank-you');
      }
      if (resp.status === 400) {
        setShowAlreadyMember(true);
      }
    }
  };
  const isAuth = isAuthenticated && user?.id;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="10px"
      borderRadius="17px"
      border={1}
      borderStyle="solid"
      borderColor={commonBorderColor}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {headContent}
      {subContent}

      <Box display="flex" flexDirection="column" gridGap="10px" padding="0 18px 18px">
        <Text size="21px" fontWeight={700} lineHeight="25px">
          {title}
        </Text>
        <Text size="14px" fontWeight={700} lineHeight="18px">
          {description}
        </Text>
        {isAuth && (
          <>
            {children}

            <Text size="13px" padding="4px 8px" borderRadius="4px" background={featuredColor}>
              {t('switch-user-connector', { name: user.first_name })}
              {' '}
              <Button
                variant="link"
                fontSize="13px"
                height="auto"
                onClick={() => {
                  setStorageItem('redirect', router?.asPath);
                  setTimeout(() => {
                    logout(() => {
                      router.push('/login');
                    });
                  }, 150);
                }}
              >
                {`${t('common:logout-and-switch-user')}.`}
              </Button>
            </Text>
          </>
        )}

        {!isAuth && (
          <Box>
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
              }}
              onSubmit={(values, actions) => {
                handleSubmit(actions, values);
              }}
              validationSchema={subscriptionValidation}
            >
              {({ isSubmitting }) => (
                <Form
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gridGap: '10px',
                    padding: '10px 0 0 0',
                  }}
                >
                  <FieldForm
                    type="text"
                    name="first_name"
                    label={t('common:first-name')}
                    required
                    formProps={formProps}
                    setFormProps={setFormProps}
                    readOnly={readOnly}
                  />
                  <FieldForm
                    type="text"
                    name="last_name"
                    label={t('common:last-name')}
                    required
                    formProps={formProps}
                    setFormProps={setFormProps}
                    readOnly={readOnly}
                  />
                  <FieldForm
                    type="text"
                    name="email"
                    label={t('common:email')}
                    required
                    formProps={formProps}
                    setFormProps={setFormProps}
                    readOnly={readOnly}
                  />

                  <Button
                    mt="10px"
                    type="submit"
                    variant="default"
                    isLoading={isSubmitting}
                    title={t('join-workshop')}
                    disabled={readOnly}
                  >
                    {t('join-workshop')}
                  </Button>
                  <Text size="13px" padding="4px 8px" borderRadius="4px" background={featuredColor}>
                    {t('signup:already-have-account')}
                    {' '}
                    <Link redirectAfterLogin variant="default" href="/login" fontSize="13px">
                      {t('signup:login-here')}
                    </Link>
                  </Text>
                </Form>
              )}
            </Formik>
          </Box>
        )}
      </Box>

      <ModalInfo
        isOpen={showAlreadyMember}
        headerStyles={{ textAlign: 'center' }}
        onClose={() => setShowAlreadyMember(false)}
        title={t('signup:alert-message.title')}
        childrenDescription={(
          <Box textAlign="center">
            {t('signup:alert-message.message1')}
            {' '}
            <Link variant="default" href="/">4Geeks.com</Link>
            .
            <br />
            {t('signup:alert-message.message2')}
            .
          </Box>
        )}
        disableCloseButton
        actionHandler={() => {
          setStorageItem('redirect', router?.asPath);
          router.push('/login');
          setShowAlreadyMember(false);
        }}
        handlerText={t('common:login')}
      />
    </Box>
  );
};

ShowOnSignUp.propTypes = {
  headContent: PropTypes.node,
  subContent: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  readOnly: PropTypes.bool,
  children: PropTypes.node,
};

ShowOnSignUp.defaultProps = {
  headContent: null,
  subContent: null,
  title: '',
  description: '',
  readOnly: false,
  children: null,
};

export default ShowOnSignUp;