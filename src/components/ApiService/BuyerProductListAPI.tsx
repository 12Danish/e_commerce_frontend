import axios from "axios";

export async function getProductList(
  type?: string | null,
  typeName?: string | null,
  multiplePages?: boolean | null,
  link?: string | null
) {
  try {
    let response;
    let apiUrl = "http://127.0.0.1:8000/api/";

    if (link) {
      console.log(link);
      response = await axios.get(link);
      multiplePages = true;
    } else if (type == null) {
      response = await axios.get(apiUrl);
      console.log(response.data);
    } else {
      if (type.toLowerCase() == "sale") {
        apiUrl += "?sale=True";
      } else if (type.toLowerCase() == "category") {
        apiUrl += `?category=${typeName}`;
        console.log(typeName);
      } else if (type.toLowerCase() == "search") {
        apiUrl += `?search=${typeName}`;
      } else if (type.toLowerCase() == "popular") {
        apiUrl += "?popular=True";
      } else {
        throw new Error(`Invalid type: ${type}`);
      }
      response = await axios.get(apiUrl);
    }

    if (multiplePages) {
      return {
        data: response.data.results,
        previous: response.data.previous,
        next: response.data.next,
        link: link || apiUrl, // Use link if available, otherwise use apiUrl
      };
    }
    return response.data.results;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
}
