export { removePerson } from "../reducers/personSlice";

import axios from "../../utils/axios";
import { loadPerson } from "../reducers/personSlice";

export const asyncloadPerson = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    let theUltimateData = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };

    dispatch(loadPerson(theUltimateData));
    console.log(theUltimateData);
  } catch (e) {
    console.log(e);
  }
};
