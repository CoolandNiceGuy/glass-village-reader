export const config = {
  headers:{
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_AIR_TABLE_TOKEN,
  }
};

export const QUERY_URL = 'https://api.airtable.com/v0/appV97kbcvrhhuPol/tblswZy4JJWqPaLpo'