export const fetchJSON = async ({ method, url, data }) => {
   console.log(method,url,data)
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : void 0
    });
    console.log(res,"response")
    return await res.json();
  };