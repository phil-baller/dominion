// const response = await axios.post("/api/post", postData);

// const requestBody = {
//   imageUrl: "",
//   title: "",
//   desc: "",
// };

// if (response.data) {
//   toast.success("Successfully uploaded portfolio");
//   setPostData(requestBody);
// } else {
//   const checkBody: any = { ...requestBody };

//   for (let key of Object.keys(checkBody)) {
//     if (!Boolean(checkBody[key])) {
//       toast.error(`${key} is required`);
//     }
//   }
// }