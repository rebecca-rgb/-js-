import {MODE_TYPE} from './enum'
const BASE_URL_BEF=''
const BASE_URL_PRO='XXX'
const BASE_URL_DEV='PPPP'
const MODE=MODE_TYPE.BEF
export const BASE_URL = [BASE_URL_BEF,BASE_URL_PRO,BASE_URL_DEV][MODE]

