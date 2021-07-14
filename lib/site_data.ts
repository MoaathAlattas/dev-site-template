import fs from 'fs'
import path from 'path'

async function fetchData() {
    const API_URL = process.env.API_URL
    const API_KEY = process.env.API_KEY
    const API_SITE_ID = process.env.API_SITE_ID
    const res = await fetch(`${API_URL}/sites/${API_SITE_ID}/data?api_key=${API_KEY}`)
    return await res.json()
}

const DATA_CACHE_PATH = './.data'

export default async function siteData() {
    let cachedData

    try {
        cachedData = JSON.parse(fs.readFileSync(DATA_CACHE_PATH, 'utf8'))
    } catch (error) {
        console.log('data cache not initialized')
    }

    if (!cachedData) {
        const data = await fetchData()

        try {
            fs.writeFileSync(DATA_CACHE_PATH,JSON.stringify(data),'utf8')
            console.log('Wrote to data cache')
        } catch (error) {
            console.log('ERROR WRITING DATA CACHE TO FILE')
            console.log(error)
        }

        cachedData = data
    }

    return cachedData
}