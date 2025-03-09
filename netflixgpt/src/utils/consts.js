export const LOGO_NTEFLIX="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
export const LOGIN_BG ="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"

export const API_OPTIONS ={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KET
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/"

export const SUPPORTED_LANGUAGE = [
  {identifier:"english",name:"English"},
  {identifier:"hindi",name:"Hindi"}, 
  {identifier:"spanish",name:"Spanish"},
]
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY