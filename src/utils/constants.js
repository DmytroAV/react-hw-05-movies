export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const PLACEHOLDER = 'https://via.placeholder.com/182x273';


export const breakpoints = {
  xs: "320px",
  msm: "639px",
  sm: "640px",
  mmd: "767px",
  md: "768px",
  lg: "1024px",
  mlg: "1100px",
  xl: "1280px",
}

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  msm: `(max-width: ${breakpoints.msm})`,
  mmd: `(max-width: ${breakpoints.mmd})`,
  mlg: `(max-width: ${breakpoints.mlg})`,
}
