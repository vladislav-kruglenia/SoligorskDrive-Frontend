import {gql} from "@apollo/client/core";

export const TravelInfoQuery = gql`
    query TravelInfoQuery($travelInfoData: TravelInfoArgs!){
        TravelInfo(travelInfoData: $travelInfoData){
            priceTravel, remainingNumberSeats, startHourTravel,
        }
    }
`;