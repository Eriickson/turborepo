"use server";
export async function createProduct(formData: FormData) {
  console.log(formData);
  
  await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Object.fromEntries(formData))
  })
  
}