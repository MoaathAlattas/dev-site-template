import fs from 'fs'

const DATA_CACHE_PATH = './.data'

export default async function siteData() {
    let cachedData

    try {
        cachedData = JSON.parse(fs.readFileSync(DATA_CACHE_PATH, 'utf8'))
    } catch (error) {
        console.log('data cache not initialized')
    }

    if (!cachedData) {
        const API_URL = process.env.API_URL
        const API_KEY = process.env.API_KEY
        const SITE_ID = process.env.SITE_ID
        let data
        // TODO: build should fail
        try {
            const res = await fetch(`${API_URL}/sites/${SITE_ID}/data?api_key=${API_KEY}`)
            data = await res.json()
        } catch (error) {
            data = {
                "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                "created_at": "2021-07-20T10:36:18.254-07:00",
                "updated_at": "2021-07-20T13:26:08.053-07:00",
                "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                "name": "Site 1",
                "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                "template_id": "65ff6770-9849-4400-932b-4803dbb12b29",
                "posts": [
                    {
                        "id": "00b8412a-015e-46bc-be3e-3a35ff97de10",
                        "created_at": "2021-07-20T10:36:18.284-07:00",
                        "updated_at": "2021-07-31T19:44:04.462-07:00",
                        "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                        "title": "Post 1",
                        "content": "<p>Post 1 <strong><s>Content</s></strong></p>",
                        "siteContent": {
                            "id": "1b191de2-a9fb-4439-8703-a201025b4eeb",
                            "created_at": "2021-07-31T14:42:43.852-07:00",
                            "updated_at": "2021-07-31T14:42:43.852-07:00",
                            "site_id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "content_type": 0,
                            "content_id": "00b8412a-015e-46bc-be3e-3a35ff97de10",
                            "site": {
                                "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                                "created_at": "2021-07-20T10:36:18.254-07:00",
                                "updated_at": "2021-07-20T13:26:08.053-07:00",
                                "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                                "name": "Site 1",
                                "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                                "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                                "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                            }
                        },
                        "site": {
                            "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "created_at": "2021-07-20T10:36:18.254-07:00",
                            "updated_at": "2021-07-20T13:26:08.053-07:00",
                            "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                            "name": "Site 1",
                            "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                            "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                            "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                        }
                    },
                    {
                        "id": "f8b6a029-a7ef-4b79-9ae5-b79c4368bfda",
                        "created_at": "2021-07-20T10:36:18.287-07:00",
                        "updated_at": "2021-07-31T14:41:54.830-07:00",
                        "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                        "title": "Post 2",
                        "content": "Post 2 Content",
                        "siteContent": {
                            "id": "9fd2b534-a791-44f1-82f2-9b02e511dfd1",
                            "created_at": "2021-07-31T14:42:43.855-07:00",
                            "updated_at": "2021-07-31T14:42:43.855-07:00",
                            "site_id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "content_type": 0,
                            "content_id": "f8b6a029-a7ef-4b79-9ae5-b79c4368bfda",
                            "site": {
                                "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                                "created_at": "2021-07-20T10:36:18.254-07:00",
                                "updated_at": "2021-07-20T13:26:08.053-07:00",
                                "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                                "name": "Site 1",
                                "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                                "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                                "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                            }
                        },
                        "site": {
                            "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "created_at": "2021-07-20T10:36:18.254-07:00",
                            "updated_at": "2021-07-20T13:26:08.053-07:00",
                            "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                            "name": "Site 1",
                            "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                            "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                            "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                        }
                    },
                    {
                        "id": "4545b290-91de-49bf-a704-eaa77e222c79",
                        "created_at": "2021-07-31T20:01:39.103-07:00",
                        "updated_at": "2021-08-02T08:52:49.006-07:00",
                        "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                        "title": "new y",
                        "content": "<p><em>ybo</em>!?</p>",
                        "siteContent": {
                            "id": "facfd7b3-ad83-4ba4-9bdb-b54de5960560",
                            "created_at": "2021-07-31T20:01:39.123-07:00",
                            "updated_at": "2021-07-31T20:01:39.123-07:00",
                            "site_id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "content_type": 0,
                            "content_id": "4545b290-91de-49bf-a704-eaa77e222c79",
                            "site": {
                                "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                                "created_at": "2021-07-20T10:36:18.254-07:00",
                                "updated_at": "2021-07-20T13:26:08.053-07:00",
                                "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                                "name": "Site 1",
                                "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                                "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                                "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                            }
                        },
                        "site": {
                            "id": "d07b7626-ac53-47af-8f94-023eb7940192",
                            "created_at": "2021-07-20T10:36:18.254-07:00",
                            "updated_at": "2021-07-20T13:26:08.053-07:00",
                            "user_id": "f50eb83a-8c7b-47d1-a4a6-3bdd789fc9a5",
                            "name": "Site 1",
                            "domain": "https://site-1-d07b7626-ac53-47af-8f94-023eb7940192.netlify.app",
                            "hosting_id": "e1b2b8e2-c213-4915-8c1f-94dd025f7052",
                            "template_id": "65ff6770-9849-4400-932b-4803dbb12b29"
                        }
                    }
                ]
            }
        }


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