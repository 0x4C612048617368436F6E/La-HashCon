/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"static.files.bbci.co.uk",
            pathname:"**"
        },
        {
            protocol:"https",
            hostname:"news.ycombinator.com",
            pathname:"**"
        },
        {
            protocol:"https",
            hostname:"techcrunch.com",
            pathname:"**"
        },
        {
            protocol:"https",
            hostname:"www.theverge.com",
            pathname:"**"
        },
        {
            protocol:"https",
            hostname:"cdn.arstechnica.net",
            pathname:"**"
        }
    ]
}
};

module.exports = nextConfig;
