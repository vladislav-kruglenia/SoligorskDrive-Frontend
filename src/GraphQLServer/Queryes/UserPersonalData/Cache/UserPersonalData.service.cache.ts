import {ApolloCache, DocumentNode} from "@apollo/client";
import {UserPersonalDataRes} from "../Types/UserPersonalDataRes.types";
import {UserPersonalData} from "../UserPersonalData.gql";

export class UserPersonalDataServiceCache<MutRes> {
    private UserPersonalDataDocument:DocumentNode = UserPersonalData;

    readQuery(cache: ApolloCache<MutRes>){
        return cache.readQuery<UserPersonalDataRes>({
            query: this.UserPersonalDataDocument
        })
    }

    writeQuery(cache: ApolloCache<MutRes>, newData: UserPersonalDataRes){
        cache.writeQuery<UserPersonalDataRes>({
            query: this.UserPersonalDataDocument,
            data: newData,
        })
    }


}