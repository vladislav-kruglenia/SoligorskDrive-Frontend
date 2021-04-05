import React, {FC} from 'react';
import {DisplayingDifferentDataPropsType} from "./Types/DisplayingDifferentDataTypes";

export let DisplayingDifferentData: FC<DisplayingDifferentDataPropsType> = (props)=>{
    return <div>
        {props.displayComponent}
    </div>
};

