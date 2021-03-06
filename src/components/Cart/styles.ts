import styled, { css } from 'styled-components';

import { hexToRgb } from '../../utils';
import { BLACK, LOCHMARA } from '../../styles/colors';
import { row, flexAlign, round } from '../../styles/mixins';

const buttonCss = css`
  ${round('24px')}
  ${row}
  ${flexAlign('center')}
  padding: 8px;
  box-shadow: 0 0 8px ${hexToRgb(BLACK, '.24')};
  transition: box-shadow .2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 16px ${hexToRgb(BLACK, '.24')};
  }
`;

export const TRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 64px;
  box-shadow: 0 1px 1px 0 ${hexToRgb(BLACK, '.24')};

  ${(props: { header?: boolean }) => props.header && `
    background-color: ${hexToRgb(LOCHMARA, '.24')};
    box-shadow:
      inset 0 -1px 0 0 ${BLACK},
      inset 0 1px 0 0 ${BLACK},
      inset -1px 0 0 0 ${BLACK},
      inset 1px 0px 0 0 ${BLACK};
  `}

  &.table-item-enter {
    opacity: 0;
  }

  &.table-item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  &.table-item-exit {
    opacity: 1;
  }

  &.table-item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

export const TCell = styled.div`
  ${row}
  ${flexAlign('flex-start', 'center')}
  padding: 8px 12px;
  transition: background-color .2s;

  ${(props: { header?: boolean }) => props.header && `
    &:hover {
      background-color: ${hexToRgb(LOCHMARA, '.32')};
      cursor: pointer;
    }
  `}
`;

export const TCellInner = styled.div`
  ${row}
  ${flexAlign('space-between', 'center')}
  width: 100%;
`;

export const IncrementButton = styled.div`
  ${buttonCss}
  margin-left: 8px;
`;

export const DecrementButton = styled.div`
  ${buttonCss}
  margin-right: 8px;
`;

export const Total = styled.div`
  margin-top: 16px;
  font-weight: 700;
`;

export const CartIconWrapper = styled.div`
  ${row}
  ${flexAlign('center')}
  ${round('32px')}
  padding: 8px;
  transition: background-color .2s;

  &:hover {
    background-color: ${hexToRgb(LOCHMARA, '.12')};
    cursor: pointer;
  }
`;
