import styled from 'styled-components'

import bannerPath from '../../assets/images/banner.jpg'



export const Container = styled.header`
  background: url(${bannerPath}) no-repeat;
  background-size: cover;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 600px;
  padding: 16px;
`;

export const TopContent = styled.div`
`;

export const BottomContent = styled.div`
    margin-top: 300px;
    color: white;
    font-size: 25px;
`;

export const Title = styled.div``;

export const SubTitle = styled.div``;