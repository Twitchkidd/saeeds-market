import styled from 'styled-components';
import DoorDash from 'src/assets/svg/doorDash.svg';
import grubHub from 'src/assets/images/grubHub.png';
import UberEats from 'src/assets/svg/uberEats.svg';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const GrubHub = styled.img`
  width: 90px;
  height: auto;
`;

const DeliveryButtons = () => (
  <ButtonsWrapper>
    <DoorDash />
    <GrubHub src={grubHub} alt="Order from GrubHub" />
    <UberEats style={{ width: '90px', height: 'auto' }} />
  </ButtonsWrapper>
);

export default DeliveryButtons;
