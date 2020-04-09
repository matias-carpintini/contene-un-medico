import styled from "styled-components/native";
import colors from "./colors";

export const AreaSafe = styled.SafeAreaView`
  background-color: ${colors.white};
  height: 100%;
`;

export const TitleBarMenuIcons = styled.View`
  flex-direction: row;
  margin-right: 10px;
`;

export const TitleBar = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ProfileImg = styled.View`
  width: 200px;
  background-color: ${colors.lightWhite};
  align-self: center;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
`;

export const IconView = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;

export const CardMenu = styled.View`
  background-color: ${colors.smoke};
  width: 340px;
  height: 160px;
  border-radius: 12px;
  margin-right: 8px;
  margin-left: 18px;
`;

export const CardEventsUp = styled.View`
  background-color: ${colors.smoke};
  width: 340px;
  height: 360px;
  border-radius: 30px;
  margin-right: 8px;
  margin-left: 18px;
`;

export const BtnPlus = styled.View`
  background-color: ${colors.lightWhite};
  width: 70px;
  height: 70px;
  margin: 8px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const BtnPlust = styled.View`
  background-color: ${colors.lightBlue};
  width: 70px;
  height: 70px;
  margin: 8px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const BtnDown = styled.View`
  background-color: ${colors.red};
  width: 70px;
  height: 70px;
  margin: 8px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const BtnDownt = styled.View`
  background-color: ${colors.blue};
  width: 70px;
  height: 70px;
  margin: 8px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const IconIndicator = styled.View`
  background-color: ${colors.lightBlue};
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const IndicatorRound = styled.View`
  background-color: ${colors.green};
  width: 30px;
  height: 30px;
  margin: 8px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const IconIndicatorC = styled.View`
  background-color: ${colors.lightRed};
  width: 80px;
  height: 80px;
  margin: 8px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const TitleBarPosition = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
  margin-bottom: 10px;
`;