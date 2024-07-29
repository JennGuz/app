/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {
  Box, Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Heading from './Heading';
import Text from './Text';
import { currenciesSymbols } from '../../utils/variables';
import useStyle from '../hooks/useStyle';

function PlanCard({ item, i, handleSelect, selectedIndex, isCouponAvailable }) {
  const { hexColor, backgroundColor2 } = useStyle();

  return (
    <Box
      key={`${item.title} ${item?.price}`}
      display="flex"
      onClick={() => handleSelect(i, item)}
      width="100%"
      alignItems={item?.isFreeTier && 'center'}
      justifyContent="space-between"
      p="22px 18px"
      gridGap="24px"
      cursor="pointer"
      background={backgroundColor2}
      border="4px solid"
      borderColor={selectedIndex === i ? '#0097CD' : 'transparent'}
      borderRadius="8px"
    >
      <Box display="flex" flexDirection="column" width="100%" gridGap="12px" minWidth={{ base: 'none', md: 'auto' }} height="fit-content" fontWeight="400">
        {!item?.isFreeTier && (
        <Box fontSize="18px" fontWeight="700">
          {item?.title}
        </Box>
        )}
        <Text
          size="md"
          fontWeight="500"
          mb="6px"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        />
      </Box>

      <Box textAlign="right" display="flex" minWidth={item.period !== 'FINANCING' && 'auto'} justifyContent="center" flexDirection="column" gridGap="10px">
        <Heading as="span" size={{ base: 'var(--heading-m)', md: 'clamp(0.875rem, 0.3rem + 1.8vw, 2rem)' }} width={item.period === 'FINANCING' && 'max-content'} lineHeight="1" textTransform="uppercase" color={isCouponAvailable ? hexColor.green : 'blue.default'}>
          {item?.priceText || item?.price}
        </Heading>
        {item?.lastPrice && (
        <Text lineHeight="21px" fontSize="21px" fontWeight="500" color="#A9A9A9">
          <s>
            {item?.lastPrice}
          </s>
        </Text>
        )}
      </Box>
    </Box>
  );
}

function ShowPrices({
  data,
  title,
  secondSectionTitle,
  notReady,
  list,
  finance,
  onSelect,
  defaultIndex,
  defaultFinanceIndex,
  externalSelection,
  outOfConsumables,
  handleUpgrade,
  isTotallyFree,
  coupon,
  couponExpired,
}) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [selectedFinanceIndex, setSelectedFinanceIndex] = useState(defaultFinanceIndex);
  const { t } = useTranslation('profile');
  const { hexColor, fontColor, disabledColor, featuredColor } = useStyle();
  const router = useRouter();

  const isCouponAvailable = coupon && !couponExpired;

  const applyDiscountCoupons = (pricingList) => {
    if (isCouponAvailable) {
      return pricingList.map((item) => {
        const { price } = item;
        if (price > 0) {
          const discountValue = coupon?.discount_value;
          const discountType = coupon?.discount_type;

          const discountPrice = discountType === 'PERCENT_OFF' || discountType === 'HAGGLING' ? Math.round(((price - (price * discountValue)) + Number.EPSILON) * 100) / 100 : discountValue;
          return {
            ...item,
            price: discountPrice,
            priceText: `${currenciesSymbols[item.currency.code]}${discountPrice}`,
            lastPrice: `${currenciesSymbols[item.currency.code]}${price}`,
          };
        }
        return item;
      });
    }
    return pricingList;
  };

  const financeSelected = {
    0: applyDiscountCoupons(list) || data?.pricing.list,
    1: finance || data?.pricing.finance,
  };

  const dataList = financeSelected?.[selectedFinanceIndex] || [];
  const selectedItem = selectedIndex !== null && financeSelected[selectedFinanceIndex][selectedIndex];

  const handleSelect = (index, item) => {
    setSelectedIndex(index);
    if (onSelect) onSelect(item);
  };

  useEffect(() => {
    if (dataList.length === 1) {
      handleSelect(0, dataList[0]);
    }
  }, []);

  const handleSelectFinance = (index) => {
    setSelectedFinanceIndex(index);
    setSelectedIndex(0);
    onSelect(financeSelected[defaultFinanceIndex][defaultIndex || 0]);
  };

  const getTabColor = (index, tabIsAvailable = true) => {
    if (selectedFinanceIndex === index) {
      return {
        borderBottom: '4px solid',
        borderColor: isCouponAvailable ? 'white' : 'blue.default',
        color: isCouponAvailable ? 'white' : 'blue.default',
        cursor: 'pointer',
        fontWeight: '700',
      };
    }
    return {
      borderBottom: '4px solid',
      borderColor: 'gray.400',
      color: tabIsAvailable ? fontColor : disabledColor,
      cursor: tabIsAvailable ? 'pointer' : 'not-allowed',
      fontWeight: '400',
    };
  };

  const paymentTabStyle = getTabColor(0, list?.length > 0);
  const financeTabStyle = getTabColor(1, finance?.length > 0);
  const existMoreThanOne = dataList.length > 1;
  const isOnlyOneItem = [...finance, ...list].length === 1;

  useEffect(() => {
    const tabSelected = financeSelected?.[externalSelection?.selectedFinanceIndex];
    const financeFound = tabSelected?.[externalSelection?.selectedIndex] || tabSelected?.[0];
    if (externalSelection?.selectedIndex >= 0 && externalSelection?.selectedFinanceIndex >= 0 && tabSelected?.length > 0) {
      handleSelectFinance(externalSelection.selectedFinanceIndex);
      handleSelect(externalSelection.selectedIndex, financeFound);
    }
  }, [externalSelection]);

  const getDiscountText = () => {
    const discountValue = coupon?.discount_value;
    const discountType = coupon?.discount_type;

    return discountType === 'PERCENT_OFF' ? `${discountValue * 100}%` : discountValue;
  };

  return (
    <>
      <Box position="relative" borderRadius="12px" padding="16px" background={isCouponAvailable ? hexColor.green : featuredColor} display="flex" flex={0.5} flexDirection="column" gridGap="20px">
        {isCouponAvailable && (
          <Box position="absolute" right="20px" top="-20px">
            <Box
              borderRadius="55px"
              background={hexColor.greenLight2}
              padding="2px 8px"
              position="relative"
            >
              <Box
                top="-9px"
                left="-37px"
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                width="44px"
                height="44px"
                fontSize="24px"
                position="absolute"
                borderRadius="41px"
                padding="10px"
                border="2px solid"
                borderColor={hexColor.greenLight2}
                background={hexColor.green}
              >
                🔥
              </Box>
              <Text fontSize="15px" color={hexColor.green}>
                {t('subscription.discount', { discount: getDiscountText() })}
              </Text>
            </Box>
          </Box>
        )}
        <Box width="100%" display="flex" flexWrap="wrap" gridGap="5px 10px" justifyContent={{ base: 'center', sm: 'space-between' }} alignItems="center" mb="6px">
          <Heading color={isCouponAvailable && 'white'} as="h2" size="sm">
            {title || data?.pricing['choose-plan']}
          </Heading>
          {!isTotallyFree && financeSelected[1] && !isOnlyOneItem && (
            <Box display="flex">
              <Box
                p={{ base: '10px 7px', md: '15px 10px', lg: '15px 10px' }}
                onClick={() => {
                  if (list?.length > 0) {
                    handleSelectFinance(0);
                  }
                }}
                {...paymentTabStyle}
              >
                {finance?.length > 0
                  ? t('subscription.upgrade-modal.one_payment')
                  : t('subscription.upgrade-modal.subscription')}
              </Box>

              <Box
                display={finance?.length > 0 ? 'block' : 'none'}
                p={{ base: '10px 7px', md: '15px 10px', lg: '15px 10px' }}
                disabled={finance?.length > 0}
                onClick={() => {
                  if (finance?.length > 0) {
                    handleSelectFinance(1);
                  }
                }}
                {...financeTabStyle}
              >
                {secondSectionTitle || data?.pricing['finance-text']}
              </Box>
            </Box>
          )}
        </Box>
        {dataList?.length > 0 && dataList.filter((l) => l.show === true).map((item, i) => (!item.isFreeTier) && (
          <PlanCard key={item?.plan_id} isCouponAvailable={isCouponAvailable} item={item} i={i} handleSelect={handleSelect} selectedIndex={selectedIndex} />
        ))}
      </Box>
      <Box mt="20px" display="flex" flex={0.5} flexDirection="column" gridGap="20px">
        {existMoreThanOne && dataList.some((item) => item.isFreeTier) && (
          <Box display="flex" alignItems="center">
            <Box as="hr" color="gray.500" width="100%" />
            <Text size="md" textAlign="center" width="100%" margin="0">
              {notReady || data?.pricing?.['not-ready']}
            </Text>
            <Box as="hr" color="gray.500" width="100%" />
          </Box>
        )}
        {dataList?.length > 0 && dataList.filter((l) => l.show === true && l?.isFreeTier).map((item, i) => (
          <PlanCard key={item?.plan_id} item={item} i={i} handleSelect={handleSelect} selectedIndex={selectedIndex} />
        ))}
        <Box mt="38px">
          {process.env.VERCEL_ENV !== 'production' && outOfConsumables && (
            <Button
              variant="default"
              isDisabled={!selectedItem && true}
            >
              {t('common:upgrade-plan.button')}
            </Button>
          )}
          <Button
            display={outOfConsumables && 'none'}
            variant="default"
            isDisabled={!selectedItem && true}
            onClick={() => {
              if (handleUpgrade === false) {
                router.push(`/checkout?syllabus=coding-introduction&plan=${selectedItem?.type?.toLowerCase()?.includes('trial') ? 'coding-introduction-free-trial' : 'coding-introduction-financing-options-one-payment'}`);
              } else {
                handleUpgrade(selectedItem);
              }
            }}
          >
            {t('common:enroll')}
          </Button>
        </Box>
      </Box>
    </>
  );
}

ShowPrices.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  title: PropTypes.string,
  secondSectionTitle: PropTypes.string,
  notReady: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any])),
  finance: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any])),
  onSelect: PropTypes.func,
  defaultIndex: PropTypes.number,
  defaultFinanceIndex: PropTypes.number,
  outOfConsumables: PropTypes.bool,
  handleUpgrade: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  isTotallyFree: PropTypes.bool,
  externalSelection: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  coupon: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])),
  couponExpired: PropTypes.bool,
};

ShowPrices.defaultProps = {
  data: null,
  title: null,
  secondSectionTitle: null,
  notReady: null,
  list: null,
  finance: null,
  onSelect: () => {},
  defaultIndex: null,
  defaultFinanceIndex: 0,
  outOfConsumables: false,
  handleUpgrade: false,
  isTotallyFree: false,
  externalSelection: {},
  coupon: null,
  couponExpired: false,
};

export default ShowPrices;
