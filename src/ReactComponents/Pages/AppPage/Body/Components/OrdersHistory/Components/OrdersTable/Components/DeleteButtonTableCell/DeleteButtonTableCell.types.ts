import {MainOrderData} from "../../../../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";

export type DeleteButtonTableCellProps = {
    orderId: string,
    userId: string,
    isCurrentOrdersTable: boolean,
    mainOrderData: MainOrderData,
}