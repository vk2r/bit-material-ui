import React from 'react';
import styled from 'styled-components';
import { Avatar as MaterialAvatar } from '@material-ui/core';

// Styles
const StyledMaterialAvatar = styled(MaterialAvatar)`
  text-align: center;
  display: inline-flex !important;
  width: 40px;
  height: 40px;
  &.large {
    width: 76px;
    height: 76px;
  }
  &.small {
    width: 32px;
    height: 32px;
  }
  &.primary {
    width: 36px;
    height: 36px;
    border: 2px solid #3f51b5;
    &.small {
      width: 28px;
      height: 28px;
      border: 2px solid #3f51b5;
    }
    &.large {
      width: 68px;
      height: 68px;
      border: 4px solid #3f51b5;
    }
  }
  &.success {
    width: 36px;
    height: 36px;
    border: 2px solid #a4d200;
    &.small {
      width: 28px;
      height: 28px;
      border: 2px solid #a4d200;
    }
    &.large {
      width: 68px;
      height: 68px;
      border: 4px solid #a4d200;
    }
  }
  &.warning {
    width: 36px;
    height: 36px;
    border: 2px solid #ffb100;
    &.small {
      width: 28px;
      height: 28px;
      border: 2px solid #ffb100;
    }
    &.large {
      width: 68px;
      height: 68px;
      border: 4px solid #ffb100;
    }
  }
  &.error {
    width: 36px;
    height: 36px;
    border: 2px solid #ff602d;
    &.small {
      width: 28px;
      height: 28px;
      border: 2px solid #ff602d;
    }
    &.large {
      width: 68px;
      height: 68px;
      border: 4px solid #ff602d;
    }
  }
`;

const AvatarContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  &.underHeader {
    margin: -22.5px 0 0 0;
    &.small {
      margin: -16px 0 0 0;
    }
    &.large {
      margin: -42px 0 0 0;
    }
  }
`;

export enum Variant {
  circle = 'circle',
  rounded = 'rounded',
  square = 'square',
}

export enum Size {
  normal = '',
  small = 'small',
  large = 'large',
}

export enum BorderStyle {
  none = '',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export type Props = {
  src?: string;
  alt?: string;
  underHeader?: boolean;
  size?: Size;
  variant?: Variant;
  borderStyle?: BorderStyle;
  style?: React.CSSProperties;
  styleContainer?: React.CSSProperties;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  icon?: JSX.Element | false;
  children?: any;
};

const Avatar = (props: Props) => {
  const {
    src,
    icon,
    variant = Variant.circle,
    alt,
    style,
    styleContainer,
    imgProps,
    underHeader = false,
    size,
    borderStyle,
    children,
  } = props;

  const methods = {
    getAvatarClass: () => {
      let classStyle = '';
      if (size) classStyle += `${size} `;
      if (borderStyle) classStyle += `${borderStyle} `;
      return classStyle;
    },
    getContainerClass: () => {
      let classStyle = '';
      if (underHeader) classStyle += `underHeader `;
      if (size) classStyle += `${size} `;
      return classStyle;
    },
  };

  return (
    <AvatarContainer
      style={styleContainer}
      className={methods.getContainerClass()}>
      <StyledMaterialAvatar
        alt={alt}
        src={icon ? undefined : src}
        style={style}
        imgProps={imgProps}
        variant={variant}
        className={methods.getAvatarClass()}>
        {icon || children}
      </StyledMaterialAvatar>
    </AvatarContainer>
  );
};

export default Avatar;
