import axios from 'axios'

export const api = axios.create({
    baseURL:  'https://nvquoudevwivtdlsqfmb.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52cXVvdWRldndpdnRkbHNxZm1iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzQ2NzQ5MywiZXhwIjoxOTkzMDQzNDkzfQ.K8EWbRS080t0MfOBFw1f2GCMmuPV62xLdRI2IYvVieU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52cXVvdWRldndpdnRkbHNxZm1iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzQ2NzQ5MywiZXhwIjoxOTkzMDQzNDkzfQ.K8EWbRS080t0MfOBFw1f2GCMmuPV62xLdRI2IYvVieU"
    }
})