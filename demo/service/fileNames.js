import { fetchJSON } from "../../helpers/crud";
import { getBaseUrl } from "../../helpers/url";

export const getPageNames =async ()=>{
        const baseUrl=getBaseUrl(false)
        const resp = await fetchJSON({
            method: "get",
            url: `${baseUrl}/api/builder/handle?type=file`,
          });
          console.log(resp,"resp")
        const data = resp
        console.log(data.pageList,"data")
        return data.pageList
}
