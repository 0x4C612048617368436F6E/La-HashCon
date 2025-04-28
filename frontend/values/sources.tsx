import { DATASOURCES } from "@/types"
//https://static.files.bbci.co.uk/core/website/assets/static/icons/touch/bbc/touch-icon-512.8ff92996d8.png
const DataSources:DATASOURCES[] = [
    {
        id:1,
        name:"BBC",
        URL:"https://www.bbc.com/aboutthebbc/",
        image:"https://static.files.bbci.co.uk/core/website/assets/static/icons/touch/bbc/touch-icon-512.8ff92996d8.png"
    },
    {
        id:2,
        name:"Hacker News",
        URL:"https://news.ycombinator.com/",
        image:"https://news.ycombinator.com/y18.svg"
    },
    {
        id:3,
        name:"Tech Cruch",
        URL:"https://techcrunch.com/",
        image:"https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=192"
    },
    {
        id:4,
        name:"The Verge",
        URL:"https://www.theverge.com/",
        image:"https://www.theverge.com/static-assets/icons/favicon.ico"
    },
    {
        id:5,
        name:"Ars Technica",
        URL:"https://arstechnica.com/",
        image:"https://cdn.arstechnica.net/wp-content/uploads/2016/10/cropped-ars-logo-512_480-60x60.png"
    }
]

export default DataSources;