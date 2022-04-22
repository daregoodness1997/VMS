import { Box, useStyleConfig } from '@chakra-ui/react';
interface Props {
  variant?: string;
  ps?: any;
  pe?: any;
  mb?: any;
  p?: any;
  position?: any;
  overflowY?: any;
  h?: any;
}

const CardBody: React.FC<Props> = ({
  variant,
  children,
  ps,
  pe,
  mb,
  p,
  position,
  overflowY,
  h,
  ...rest
}) => {
  const styles = useStyleConfig('CardBody', { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box
      __css={styles}
      ps={ps}
      pe={pe}
      p={p}
      mb={mb}
      position={position}
      overflowY={overflowY}
      h={h}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CardBody;
