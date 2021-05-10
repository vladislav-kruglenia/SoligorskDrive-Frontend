import React, {FC} from "react";
import {OutlinedButton} from "../MaterialButtons";
import {DeleteOrderButtonContainerProps} from "./DeleteOrderButtonContainer.types";
import {RemoveOrderArgs} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.var.types";
import {RemoveOrderCache} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Cache/RemoveOrder.cache";

export const DeleteOrderButtonContainer:FC<DeleteOrderButtonContainerProps> = (props) => {
    const {mainOrderData, mutationData, removeOrderMutation, orderId} = props;
    const {loading, error} = mutationData;
    const removeOrderData: RemoveOrderArgs = {mainOrderData, orderId, userId:"1"};


    return <OutlinedButton
        buttonText={'Отменить заказ'}
        disabled={loading}
        size={"small"}
        color={error && "secondary"}
        onClickFunc={() => removeOrderMutation({
            variables: {removeOrderData},
            update: (cache) => {
                new RemoveOrderCache().updateCache(cache, orderId);
            },
        })}
    />
};


