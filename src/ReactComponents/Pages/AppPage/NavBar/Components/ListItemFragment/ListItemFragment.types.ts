import {AppPage} from "../../../../../../Redux/App/Types/App.types";
import {EditCurrentPagePayload} from "../../../../../../Redux/App/Types/Actions.types";
import {ReactNodeArray} from "react";

export type ListItemFragmentProps = {
    page: AppPage,
    index: number,
    indexCurrentPage: number,
    itemsIcons: ReactNodeArray,

    editCurrentPageAction: (dto: EditCurrentPagePayload) => void
}