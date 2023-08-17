export default function Page({ params }) {
    console.log(params,"this is params")
    return <div>My Post: {params.dynamic1}</div>
}

export const getStaticPaths=()=>{
    return({
        paths:[
            {
             params:{
                dynamic:"fulgid",
                dynamic1:"home"
             }
            }
        ], fallback:true
    })
}

export const getStaticProps=(context)=>{
    const {params}=context
    console.log(params,context)
    return {props:{params}}
}