import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'zzb38ny6',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false
})

export default client;