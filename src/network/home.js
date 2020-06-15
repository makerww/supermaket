import { request } from 'network/request';


export function getHomeMutidata() {

    return request({

        url: "/home/multidata"

    })
}