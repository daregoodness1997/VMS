import { Box, useStyleConfig } from '@chakra-ui/react';
interface Props {
  variant?: string;
  ps?: any;
  pe?: any;
  mb?: any;
  position?: any;
}

const CardBody: React.FC<Props> = ({
  variant,
  children,
  ps,
  pe,
  mb,
  position,
  ...rest
}) => {
  const styles = useStyleConfig('CardBody', { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} ps={ps} pe={pe} mb={mb} position={position} {...rest}>
      {children}
    </Box>
  );
};

export default CardBody;
