import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Avatar, Box, Button, Checkbox, useToast,
  Spinner,
  InputGroup,
  InputRightElement,
  Flex,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import NextChakraLink from '../NextChakraLink';
import FieldForm from './FieldForm';
import { email as emailRe } from '../../../utils/regex';
import useEmailValidation from './useEmailValidation';
import PhoneInput from '../PhoneInput';
import Text from '../Text';
import useStyle from '../../hooks/useStyle';
import useSession from '../../hooks/useSession';
import { BASE_PLAN } from '../../../utils/variables';
import { SILENT_CODE } from '../../../lib/types';
import { getStorageItem, setStorageItem, getQueryString } from '../../../utils';
import { reportDatalayer } from '../../../utils/requests';
import useSignup from '../../store/actions/signupAction';
import ModalInfo from '../../../js_modules/moduleMap/modalInfo';
import bc from '../../services/breathecode';
import modifyEnv from '../../../../modifyEnv';

function SignupForm({
  planSlug, courseChoosed, showVerifyEmail, formProps, setFormProps, subscribeValues, buttonStyles,
  onHandleSubmit, containerGap, extraFields, columnLayout, conversionTechnologies, showLoginLink,
  invertHandlerPosition, formContainerStyle, ...rest
}) {
  const { userSession } = useSession();
  const { t, lang } = useTranslation('signup');
  const BREATHECODE_HOST = modifyEnv({ queryString: 'host', env: process.env.BREATHECODE_HOST });
  const { emailValidation, thriggerValidation } = useEmailValidation();
  const { hexColor, featuredColor } = useStyle();
  const plan = getQueryString('plan') || planSlug;
  const planFormated = plan ? encodeURIComponent(plan) : BASE_PLAN;
  const [verifyEmailProps, setVerifyEmailProps] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [showAlreadyMember, setShowAlreadyMember] = useState(false);
  const redirectStorage = getStorageItem('redirect');
  const redirectStorageAlreadyExists = typeof redirectStorage === 'string' && redirectStorage.length > 0;
  const {
    state,
  } = useSignup();
  const { dateProps, location } = state;
  const toast = useToast();
  const router = useRouter();

  const { syllabus } = router.query;

  // const defaultPlanSlug = planSlug || BASE_PLAN;
  const signupValidation = Yup.object().shape({
    first_name: Yup.string()
      .min(2, t('validators.short-input'))
      .max(50, t('validators.long-input'))
      .required(t('validators.first-name-required')),
    last_name: Yup.string()
      .min(2, t('validators.short-input'))
      .max(50, t('validators.long-input'))
      .required(t('validators.last-name-required')),
    email: Yup.string()
      .matches(emailRe, t('validators.invalid-email'))
      .required(t('validators.email-required')),
    phone: Yup.string()
      .required(t('validators.invalid-phone')),
  });

  const handleSubmit = async (actions, allValues) => {
    try {
      const resp = await fetch(`${BREATHECODE_HOST}/v1/auth/subscribe/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': router?.locale || 'en',
        },
        body: JSON.stringify({ ...allValues, ...subscribeValues, conversion_info: userSession }),
      });
      const data = await resp.json();
      if (data.silent_code === SILENT_CODE.USER_EXISTS) {
        setShowAlreadyMember(true);
      } else if (resp?.status >= 400 && data.silent_code !== SILENT_CODE.USER_EXISTS) {
        toast({
          position: 'top',
          title: data?.detail,
          status: 'error',
          isClosable: true,
          duration: 6000,
        });
      } else {
        reportDatalayer({
          dataLayer: {
            event: 'sign_up',
            method: 'native',
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            plan: planFormated,
            user_id: data.user,
            course: allValues.course,
            country: allValues.country,
            city: data.city,
            syllabus: allValues.syllabus,
            cohort: allValues.cohort,
            conversion_info: userSession,
            conversion_technologies: conversionTechnologies,
          },
        });
      }
      setStorageItem('subscriptionId', data?.id);

      const respPlan = await bc.payment().getPlan(planFormated);
      const dataOfPlan = respPlan?.data;
      if (resp.status < 400 && typeof data?.id === 'number') {
        if (dataOfPlan?.has_waiting_list === true || data?.status === 'WAITING_LIST') {
          setStorageItem('subscriptionId', data.id);
          router.push('/thank-you');
        }
        if (data?.access_token && !dataOfPlan?.has_waiting_list) {
          setVerifyEmailProps({
            data: {
              ...allValues,
              ...data,
            },
            state: true,
          });
          router.push({
            query: {
              ...router.query,
              token: data.access_token,
            },
          });
          onHandleSubmit({
            ...allValues,
            ...data,
          });
        }
      }

      if (resp.status >= 400 && data?.phone) {
        toast({
          position: 'top',
          title: data?.phone[0],
          status: 'warning',
          duration: 6000,
          isClosable: true,
        });
      }
      actions.setSubmitting(false);
    } catch (e) {
      console.log(e);
      actions.setSubmitting(false);
      toast({
        position: 'top',
        title: e.message,
        status: 'error',
        isClosable: true,
        duration: 6000,
      });
    }
  };

  const isDisabled = !isChecked || emailValidation.loading || !emailValidation.valid;

  return (
    <>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
        }}
        onSubmit={(values, actions) => {
          const allValues = {
            ...values,
            phone: values?.phone.includes('undefined') ? '' : values?.phone,
            course: courseChoosed,
            country: location?.country,
            cohort: dateProps?.id,
            syllabus,
            city: location?.city,
            plan: planFormated,
            language: lang,
          };
          handleSubmit(actions, allValues);
        }}
        validationSchema={signupValidation}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gridGap: containerGap,
              ...formContainerStyle,
            }}
          >
            <Box display="flex" flexDirection="column" maxWidth="430px" margin="0 auto" gridGap={columnLayout ? '18px' : '24px'} {...rest}>
              <Box display="flex" gridGap="18px" flexDirection={{ base: 'column', md: 'row' }}>
                <Box display="flex" flexDirection={{ base: 'column', sm: columnLayout ? 'column' : 'row' }} gridGap="18px" flex={1}>
                  <FieldForm
                    type="text"
                    name="first_name"
                    label={t('common:first-name')}
                    formProps={formProps}
                    setFormProps={setFormProps}
                  />
                  <FieldForm
                    type="text"
                    name="last_name"
                    label={t('common:last-name')}
                    formProps={formProps}
                    setFormProps={setFormProps}
                  />
                </Box>
              </Box>
              {extraFields.includes('phone') && (
                <Box
                  display="flex"
                  flex={1}
                  flexDirection="column"
                  fontSize="12px"
                  color="blue.default2"
                  gridGap="4px"
                >
                  <PhoneInput
                    inputStyle={{ height: '50px' }}
                    setVal={setFormProps}
                    placeholder={t('common:phone')}
                    formData={formProps}
                    required
                  />
                  {t('phone-info')}
                </Box>
              )}
              <Box display="flex" flexDirection={{ base: 'column', sm: 'row' }} gridGap="18px">
                <Box
                  display="flex"
                  flex={1}
                  flexDirection="column"
                  fontSize="12px"
                  gridGap="4px"
                >
                  <InputGroup>
                    <FieldForm
                      type="email"
                      name="email"
                      label={t('common:email')}
                      formProps={formProps}
                      setFormProps={setFormProps}
                      handleOnChange={thriggerValidation}
                    />
                    <InputRightElement top="50%" transform="translate(0,-50%)">
                      {emailValidation.loading && <Spinner color={hexColor.blueDefault} />}
                    </InputRightElement>
                  </InputGroup>
                  {emailValidation.loading && <Box>{t('validating-email')}</Box>}
                  {emailValidation.valid && <Box color={hexColor.green}>{t('email-validated')}</Box>}
                  {emailValidation.error && <Box color={hexColor.danger}>{emailValidation.error}</Box>}
                  <Box color="blue.default2">{t('email-info')}</Box>
                </Box>
              </Box>
              <Checkbox size="md" spacing="8px" colorScheme="green" isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>
                <Text size="10px" textAlign="left">
                  {t('validators.termns-and-conditions-required')}
                  {' '}
                  <NextChakraLink variant="default" fontSize="10px" href="/privacy-policy" target="_blank">
                    {t('common:privacy-policy')}
                  </NextChakraLink>
                  .
                </Text>
              </Checkbox>
              {!invertHandlerPosition && showLoginLink && (
                <Flex fontSize="13px" backgroundColor={featuredColor} justifyContent="center" alignItems="center" borderRadius="4px" gridGap="6px">
                  {t('already-have-account')}
                  {' '}
                  <NextChakraLink onClick={() => setStorageItem('redirect', router?.asPath)} href="/login" redirectAfterLogin={!redirectStorageAlreadyExists} fontSize="13px" variant="default">{t('login-here')}</NextChakraLink>
                </Flex>
              )}
            </Box>
            <Button
              width="100%"
              type="submit"
              variant="default"
              isDisabled={isDisabled}
              isLoading={isSubmitting}
              alignSelf="flex-end"
              {...buttonStyles}
            >
              {t('create-account')}
            </Button>
            {invertHandlerPosition && showLoginLink && (
              <Flex fontSize="13px" backgroundColor={featuredColor} justifyContent="center" alignItems="center" borderRadius="4px" gridGap="6px">
                {t('already-have-account')}
                {' '}
                <NextChakraLink onClick={() => setStorageItem('redirect', router?.asPath)} href="/login" redirectAfterLogin={!redirectStorageAlreadyExists} fontSize="13px" variant="default">{t('login-here')}</NextChakraLink>
              </Flex>
            )}
          </Form>
        )}
      </Formik>

      <ModalInfo
        isOpen={showAlreadyMember}
        headerStyles={{ textAlign: 'center' }}
        onClose={() => setShowAlreadyMember(false)}
        title={t('signup:alert-message.title')}
        childrenDescription={(
          <Box display="flex" flexDirection="column" alignItems="center" gridGap="17px">
            <Avatar src={`${BREATHECODE_HOST}/static/img/avatar-7.png`} border="3px solid #0097CD" width="91px" height="91px" borderRadius="50px" />
            <Text
              size="14px"
              textAlign="center"
              dangerouslySetInnerHTML={{ __html: t('signup:alert-message.description') }}
            />
          </Box>
        )}
        closeButtonVariant="outline"
        closeButtonStyles={{ borderRadius: '3px', color: '#0097CD', borderColor: '#0097CD' }}
        buttonHandlerStyles={{ variant: 'default' }}
        actionHandler={() => {
          setStorageItem('redirect', router?.asPath);
          router.push('/login');
          setShowAlreadyMember(false);
        }}
        handlerText={t('common:login')}
      />

      {showVerifyEmail && (
        <ModalInfo
          headerStyles={{ textAlign: 'center' }}
          title={t('signup:alert-message.validate-email-title')}
          footerStyle={{ flexDirection: 'row-reverse' }}
          closeButtonVariant="outline"
          closeButtonStyles={{ borderRadius: '3px', color: '#0097CD', borderColor: '#0097CD' }}
          childrenDescription={(
            <Box display="flex" flexDirection="column" alignItems="center" gridGap="17px">
              <Avatar src={`${BREATHECODE_HOST}/static/img/avatar-1.png`} border="3px solid #0097CD" width="91px" height="91px" borderRadius="50px" />
              <Text
                size="14px"
                textAlign="center"
                dangerouslySetInnerHTML={{ __html: t('signup:alert-message.validate-email-description', { email: verifyEmailProps?.data?.email }) }}
              />
            </Box>
          )}
          isOpen={verifyEmailProps.state}
          buttonHandlerStyles={{ variant: 'default' }}
          actionHandler={() => {
            const inviteId = verifyEmailProps?.data?.id;
            bc.auth().resendConfirmationEmail(inviteId)
              .then((resp) => {
                const data = resp?.data;
                if (data === undefined) {
                  toast({
                    position: 'top',
                    status: 'info',
                    title: t('signup:alert-message.email-already-sent'),
                    isClosable: true,
                    duration: 6000,
                  });
                } else {
                  toast({
                    position: 'top',
                    status: 'success',
                    title: t('signup:alert-message.email-sent-to', { email: data?.email }),
                    isClosable: true,
                    duration: 6000,
                  });
                }
              });
          }}
          handlerText={t('signup:resend')}
          forceHandlerAndClose
          onClose={() => {
            setVerifyEmailProps({
              ...verifyEmailProps,
              state: false,
            });
          }}
        />
      )}
    </>
  );
}

SignupForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  planSlug: PropTypes.string,
  courseChoosed: PropTypes.string,
  formProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
  setFormProps: PropTypes.func,
  showVerifyEmail: PropTypes.bool,
  containerGap: PropTypes.string,
  extraFields: PropTypes.arrayOf(PropTypes.string),
  conversionTechnologies: PropTypes.string,
  columnLayout: PropTypes.bool,
  subscribeValues: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  showLoginLink: PropTypes.bool,
  buttonStyles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  invertHandlerPosition: PropTypes.bool,
  formContainerStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
};
SignupForm.defaultProps = {
  onHandleSubmit: () => {},
  planSlug: null,
  courseChoosed: '',
  setFormProps: () => {},
  showVerifyEmail: true,
  containerGap: '24px',
  extraFields: [],
  columnLayout: false,
  subscribeValues: {},
  conversionTechnologies: null,
  showLoginLink: false,
  buttonStyles: {},
  invertHandlerPosition: false,
  formContainerStyle: {},
};

export default SignupForm;
