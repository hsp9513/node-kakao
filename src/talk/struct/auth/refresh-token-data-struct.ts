import { NameMapping, ObjectMapper } from "json-proxy-mapper";
import { AuthApiStruct } from "./auth-api-struct";

export interface RefreshTokenDataStruct extends AuthApiStruct {

    message: string,
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    tokenType: string,

}

export namespace RefreshTokenDataStruct {

    let mappings: NameMapping = {

        status: 'status',
        message: 'message',
        accessToken: 'access_token',
        refreshToken: 'refresh_token',
        expiresIn: 'expires_in',
        tokenType: 'token_type'

    }

    export const MAPPER = new ObjectMapper(mappings);

}