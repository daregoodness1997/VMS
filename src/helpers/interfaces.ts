import {
  chakra,
  forwardRef,
  SystemStyleObject,
  SystemProps,
  HTMLChakraProps,
} from '@chakra-ui/system';

export interface BoxProps extends HTMLChakraProps<'div'> {}

export interface FlexOptions {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: SystemProps['alignItems'];

  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: SystemProps['justifyContent'];

  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: SystemProps['flexWrap'];

  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   */
  direction?: SystemProps['flexDirection'];

  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: SystemProps['flexBasis'];

  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: SystemProps['flexGrow'];

  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: SystemProps['flexShrink'];
}
export interface FlexProps extends HTMLChakraProps<'div'>, FlexOptions {}
