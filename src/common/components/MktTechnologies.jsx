import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Img, Button, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import Icon from './Icon';

const MktTechnologies = ({ endpoint }) => {
  const carousel = useRef(null);
  const background = useColorModeValue('featuredLight', 'featuredDark');
  const [technologies, setTechnologies] = useState([]);
  const [index, setIndex] = useState(0);
  const limit = 15;
  useEffect(() => {
    if (typeof endpoint === 'string' && endpoint?.length > 8) {
      axios.get(`${process.env.BREATHECODE_HOST}${endpoint}`)
        .then((response) => {
          setTechnologies(response.data?.filter((tech) => tech.icon_url));
        });
    }
  }, []);

  return (
    <Box
      background={background}
      width="100%"
      marginTop="20px"
      position="relative"
      padding={{ base: '5px 10px', lg: '5px 20px' }}
    >
      <Button
        zIndex="10"
        transform="rotate(180deg)"
        padding="0 5px"
        width="20px"
        height="25px"
        position="absolute"
        top="50%"
        marginTop="-12.5px"
        left={{ base: '5px', md: '15px' }}
        minWidth="none"
        onClick={() => {
          setIndex(index >= technologies.length - 1 ? 0 : index + 1);
          carousel.current.scrollBy(-200, 0);
        }}
      >
        <Icon icon="arrowRight" width="5px" height="10px" />
      </Button>
      <Button
        zIndex="10"
        padding="0 5px"
        width="20px"
        height="25px"
        position="absolute"
        top="50%"
        marginTop="-12.5px"
        right={{ base: '5px', md: '15px' }}
        minWidth="none"
        onClick={() => {
          setIndex(index >= technologies.length - 1 ? 0 : index + 1);
          carousel.current.scrollBy(200, 0);
        }}
      >
        <Icon icon="arrowRight" width="5px" height="10px" />
      </Button>
      <Box
        ref={carousel}
        width="100%"
        display="flex"
        justifyContent={{ base: 'space-between', lg: 'space-around' }}
        overflowX="hidden"
        gridGap="15px"
        style={{ scrollBehavior: 'smooth' }}
      >
        {technologies.map((tech, i) => i < limit && (
          <Img
            // opacity={i === index ? '1' : '0.3'}
            key={tech.id}
            src={tech.icon_url}
            height="60px"
            width="60px"
          />
        ))}
      </Box>
    </Box>
  );
};

MktTechnologies.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

MktTechnologies.defaultProps = {};

export default MktTechnologies;