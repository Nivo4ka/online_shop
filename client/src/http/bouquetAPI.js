import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createFlower = async (flower) => {
    const {data} = await $authHost.post('api/flower', flower)
    return data
}

export const fetchFlowers = async () => {
    const {data} = await $host.get('api/flower', )
    return data
}

export const createBouquet = async (bouquet) => {
    const {data} = await $authHost.post('api/bouquet', bouquet)
    return data
}

export const fetchBouquets = async (typeId, flowerId, page, limit= 5) => {
    const {data} = await $host.get('api/bouquet', {params: {
            typeId, flowerId, page, limit
        }})
    return data
}

export const fetchOneBouquet = async (id) => {
    const {data} = await $host.get('api/bouquet/' + id)
    return data
}