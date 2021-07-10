import axios from "axios";
import { SPEC } from "../util/endpoints";
import { API_URL } from "../util/secrets";

export default async function fetchSpec() {
  return (await axios.get(API_URL + SPEC)).data
}
