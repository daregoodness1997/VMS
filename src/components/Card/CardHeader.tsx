import { Box, useStyleConfig } from '@chakra-ui/react';


interface Props {
  variant?: string;
  p?: string;
}

const CardHeader: React.FC<Props> = ({ variant, children, p, ...rest }) => {
  const styles = useStyleConfig('CardHeader', { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} p={p} {...rest}>
      {children}
    </Box>
  );
};

export default CardHeader;
