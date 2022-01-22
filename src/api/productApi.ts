import { typeDataAll } from './../model/Model';
import request from "./api";

const productApi = {
    async get(page:number, auth: string) {
        const url = `/product/list?page=${page}&size=20`
        const config = {
            headers: {
                'authorization': auth
            },
        }

        const data = {
            company: "",
            created_date: "",
            drug_barcode: "",
            drug_group: "",
            drug_kind: "",
            drug_name: "",
            sort_field: "",
            sort_type: "",
            status: "",
        }
        const res = await request.post(url, data, config)
        
        return res
    },

    add(data: typeDataAll|any, auth: string) {
        const url = `/product/create`
        const config = {
            headers: {
                'authorization': auth
            },
        }
        return request.post(url, data, config)
    },

    
    remove(id:number,auth:string) {
        const url = `/product/delete?drug_id=${id}`;
        const config = {
            headers: {
                'authorization': auth
            },
        }
        return request.get(url,config);
    },
    
    update(data:typeDataAll,auth:string) {
        const url = `/product/update/info`;
        const config = {
            headers: {
                'authorization': auth
            },
        }
        return request.put(url, data,config);
    },
}

export default productApi