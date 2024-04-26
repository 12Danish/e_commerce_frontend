import axios from "axios";

export async function getProductList(
  type?: string | null,
  typeName?: string | null,
  multiplePages?: boolean | null,
  link?: string | null
) {
  try {
    let response;
    // By default, fetch the latest products only if type is not specified
    if (link) {
      response = await axios.get(link);
      multiplePages = true;
    } else if (type == null) {
      response = await axios.get("http://127.0.0.1:8000/api/");
      console.log(response.data);
    } else if (type.toLowerCase() == "sale") {
      response = await axios.get("http://127.0.0.1:8000/api/?sale=True");
    } else if (type.toLowerCase() == "category") {
      response = await axios.get(
        `http://127.0.0.1:8000/api/?category=${typeName}`
      );
    } else if (type.toLowerCase() == "search") {
      response = await axios.get(
        `http://127.0.0.1:8000/api/?search=${typeName}`
      );
    } else if (type.toLowerCase() == "popular") {
      response = await axios.get(`http://127.0.0.1:8000/api/?popular=True`);
    } else {
      throw new Error(`Invalid type: ${type}`);
    }
    if (multiplePages) {
      return {
        data: response.data.results,
        previous: response.data.previous,
        next: response.data.next,
      };
    }
    return response.data.results;

    // Handle other cases if needed
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error; // Rethrow the error for handling in the caller
  }
}
