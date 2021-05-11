import {UserPersonalDataServiceCache} from "../../../Queryes/UserPersonalData/Cache/UserPersonalData.service.cache";
import {UpdateUserDataRes} from "../Types/UpdateUserData.res.types";
import {ApolloCache} from "@apollo/client";
import {MainUserProfileData} from "../../../../Components/AppComponents/Body/Components/UserProfile/Components/UserProfileData/UserProfileData.types";
import {
    UserPersonalDataRes,
    UserPersonalDataType
} from "../../../Queryes/UserPersonalData/Types/UserPersonalDataRes.types";
import produce, {Draft} from "immer";

export class UpdateUserDataCache {
    private cache: ApolloCache<UpdateUserDataRes>;
    private userDataCacheService: UserPersonalDataServiceCache<UpdateUserDataRes>;

    constructor(cache: ApolloCache<UpdateUserDataRes>){
        this.cache = cache;
        this.userDataCacheService = new UserPersonalDataServiceCache()
    }

    updateCache(newUserData: UserPersonalDataType){
        const currentCache = this.userDataCacheService.readQuery(this.cache);
        if(!currentCache) return;

        const newCacheData = this._getNewCacheData(currentCache, newUserData);
        this.userDataCacheService.writeQuery(this.cache, newCacheData)
    }

    private _getNewCacheData(currentCache: UserPersonalDataRes, newUserData: MainUserProfileData): UserPersonalDataRes {
        return  produce(currentCache, (draft: Draft<UserPersonalDataRes>) => {
            draft.UserPersonalData = newUserData
        })
    }
}