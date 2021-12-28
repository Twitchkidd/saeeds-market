import styled from 'styled-components';
import UberEats from 'src/assets/uberEats.svg';
import DoorDash from 'src/Icons/DoorDash';
import grubHub from '../../../assets/grubHub.png';

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const DeliveryButtons = () => (
  <ButtonsWrapper>
    <DoorDash />
    <img src={grubHub} alt="Order from GrubHub" width="90px" height="auto" />
    <UberEats style={{ width: '90px', height: 'auto' }} />
  </ButtonsWrapper>
);

export default DeliveryButtons;
