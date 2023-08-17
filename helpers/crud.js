export const fetchJSON = async ({ method, url, data }) => {
   console.log(method,url,data,"method and url and json",data?"data true ":"data false")
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : void 0
    });
    console.log(res,"response")
    return await res.json();
  };