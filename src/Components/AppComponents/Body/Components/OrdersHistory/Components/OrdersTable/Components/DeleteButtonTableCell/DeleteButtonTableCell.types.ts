import {MainOrderData} from "../../../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";

export type DeleteButtonTableCellProps = {
    orderId: string,
    isCurrentOrdersTable: boolean,
    mainOrderData: MainOrderData,
}