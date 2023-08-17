export const fetchWeb=async(ownerId,query="getweb")=>{
    const data={action:"getweb",ownerId:ownerId}
    const websites=await fetch("/api/auth/middleware?type=getweb",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({data})})
    .then((res)=>res.json())
    return websites
}