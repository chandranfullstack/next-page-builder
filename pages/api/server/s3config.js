const AWS=require("aws-sdk")

// AWS.config.update({
//     accessKeyId:`XS91ZL5K3DBQ3PAKYDPY`,
//     secretAccessKey:`AVnlD076BKrg3uoQO3L7u0l8hrPDD4nj7S5HeGjt`,
//     region:"ap-south-1"
// })

// export const config1=new AWS.S3({
//     accessKeyId:`XS91ZL5K3DBQ3PAKYDPY`,
//     secretAccessKey:`AVnlD076BKrg3uoQO3L7u0l8hrPDD4nj7S5HeGjt`
// })

const config={
    accessKeyId:process.env.ACCESSKEY,
    secretAccessKey:process.env.SECRETKEY,
    endpoint:process.env.URL,
    s3ForcePathStyle: true,
}

export const s3=new AWS.S3(config)

