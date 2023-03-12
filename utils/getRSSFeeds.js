import { QUERY_URL, config } from '@/utils/config'
import axios from 'axios'

export const getRSSFeeds = async () => {
  const result = await axios.get(QUERY_URL, config)
  return result.data.records;
}