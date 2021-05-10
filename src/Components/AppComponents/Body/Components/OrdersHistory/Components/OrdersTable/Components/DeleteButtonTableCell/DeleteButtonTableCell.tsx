import React, {FC} from "react";
import TableCell from "@material-ui/core/TableCell";
import {DeleteOrderButtonContainer} from "../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/DeleteOrderButtonContainer/DeleteOrderButtonContainer";
import {DeleteButtonTableCellProps} from "./DeleteButtonTableCell.types";
import {useMutationRemoveOrder} from "../../../../../../Body.hooks";

export const DeleteButtonTableCell: FC<DeleteButtonTableCellProps> = (props) => {
    const {isCurrentOrdersTable, mainOrderData, orderId} = props;
    const {mutationData, mutationCallback} = useMutationRemoveOrder();

    const RenderComponent = isCurrentOrdersTable &&
        <TableCell>
            <DeleteOrderButtonContainer
                orderId={orderId}
                mainOrderData={mainOrderData}
                mutationData={mutationData}
                removeOrderMutation={mutationCallback}
            />
        </TableCell>;

    return <React.Fragment>
        {RenderComponent}
    </React.Fragment>
};