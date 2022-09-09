const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
const download = require('node-image-downloader')  
// We can also use 'puppeteer' package to download the images


// Create a Write Stream 
var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");
//let arr  =[]
let link = 'https://www.growpital.com/'
 
request(link, (err, res, html)=>{

    if(!err && res.statusCode == 200){
        console.log("Links Stored in ImagesLink.txt ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);
        
        $("img").each((index, image)=>{

            var img = $(image).attr('src');
            var baseUrl = 'https://www.growpital.com';
             
            var Links = baseUrl + img;
            WriteStream.write(Links);
            WriteStream.write("\n");
          //  arr.push(Links)
        })
        //console.log(arr)
// download images in downloads folder
          download({
            imgs:[
                {
                   uri:  'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/89ce1a80-f292-403b-b47a-235fc98c8e94.png'
                
                   },
                   {
                    uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/89ce1a80-f292-403b-b47a-235fc98c8e94.png'
                   },
                   {
                    uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/4f417e75-19cb-4d4e-992b-ea7bcf71f093.png'
                   },
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/8a2b6bf0-dcd7-4001-bbf2-a3089f8397d8.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/bd018669-eeb2-4a1b-9a8a-a9159b0a5a78.jpeg'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/c3a53f7a-58a5-4488-ae20-1343d5b3f168.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/2446adb4-9683-4475-a879-4e392a3663e3.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/b87c13e4-6f61-462c-9ad2-a0d9b35ba24b.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/5b59457b-a71c-4bb1-b564-9e67dc9f5aa0.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/7432ba5f-6956-4499-8f6b-2105575ef5e0.png'},
                   {uri:'https://softr-prod.imgix.net/applications/2a86f301-7f60-496a-880a-7ac6ca1aa172/assets/9b53ad62-daad-4772-945f-41ab2e0d9102.png'},
                   {uri:'https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/illustrations/undraw/group_selfie_ijc6.svg'}
            ],
            dest:'./downloads'
        }).then((info)=>{
            console.log("download")
            process.exit(1)
        }) 
    }else if(link!='https://www.growpital.com/'){
        console.log("Incorrect url")
    } 
    
})
