import {createClient} from '@sanity/client'
import { fetchQuery } from './utils/supports'

 const client = createClient({
    projectId: 'ye80h2g5',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-08-31', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })


  export const fetchFeeds = async() =>{
    let data = await client.fetch(fetchQuery).then((feeds)=>{
      return feeds;
    });
    return data;
  }