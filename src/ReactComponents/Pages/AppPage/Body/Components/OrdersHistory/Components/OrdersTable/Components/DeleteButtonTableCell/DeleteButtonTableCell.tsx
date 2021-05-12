import React, {FC} from "react";
import TableCell from "@material-ui/core/TableCell";
import {DeleteOrderButtonContainer} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/DeleteOrderButtonContainer/DeleteOrderButtonContainer";
import {DeleteButtonTableCellProps} from "./DeleteButtonTableCell.types";
import {useMutationRemoveOrder} from "../../../../../../Body.hooks";
import {RemoveOrderCacheType} from "../../../../../../../../../../GraphQLServer/Mutations/RemoveOrder/Cache/RemoveOrder.cache.types";

export const DeleteButtonTableCell: FC<DeleteButtonTableCellProps> = (props) => {
    const {isCurrentOrdersTable, mainOrderData, orderId, userId} = props;
    const {mutationData, mutationCallback} = useMutationRemoveOrder();

    const RenderComponent = isCurrentOrdersTable &&
        <TableCell>
            <DeleteOrderButtonContainer
                orderId={orderId}
                userId={userId}
                mutationType={RemoveOrderCacheType.Client}
                mainOrderData={mainOrderData}
                mutationData={mutationData}
                removeOrderMutation={mutationCallback}
            />
        </TableCell>;

    return <React.Fragment>
        {RenderComponent}
    </React.Fragment>
};