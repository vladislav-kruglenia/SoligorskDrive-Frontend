import React, {FC, memo} from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ListItemFragmentProps} from "./ListItemFragment.types";

export const ListItemFragment:FC<ListItemFragmentProps> = (props) => {
    const {page, indexCurrentPage, index, editCurrentPageAction, itemsIcons} = props;
    const {pageHeaderName, pageLink, pageLinkName} = page;

    return <React.Fragment>
        <ListItem key={pageLinkName} button component={Link} to={pageLink}
                  selected={index === indexCurrentPage}
                  onClick={() => editCurrentPageAction({currentPageName: pageHeaderName, indexCurrentPage: index})}
        >
            <ListItemIcon>{itemsIcons[index]}  </ListItemIcon>
            <ListItemText primary={pageLinkName}/>
        </ListItem>
    </React.Fragment>
};

export const ListItemFragmentMemo = memo(ListItemFragment);