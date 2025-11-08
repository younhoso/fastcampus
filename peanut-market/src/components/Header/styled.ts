"use client";

import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item {
      font-size: ${(props) => props.theme.fontSizes.font16};
      font-weight: ${(props) => props.theme.fontWeight.medium};
      &.active {
        color: ${(props) => props.theme.colors.main3F2};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        border-bottom: 1px solid ${(props) => props.theme.colors.main3F2};
      }
    }
  }
`;
