import styled from 'styled-components'

import bannerPath from '../../assets/images/rodape.jpg'

export const Container = styled.header`
  background: url(${bannerPath}) no-repeat;
  background-size: cover;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div``;

export const FormControl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
`;