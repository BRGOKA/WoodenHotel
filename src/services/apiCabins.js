import supabase, { supabaseKey, supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins couldnt be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabin").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin couldnt be deleted");
  }
}
export async function addCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabin")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("Cabin couldnt be created");
  }
  // image uploading
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) await supabase.from("cabin").delete().eq("id", data.id);
}
// export async function editCabin(cabinData) {
//   const { data, error } = await supabase
//     .from("cabin")
//     .insert([newCabin])
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin couldnt be created");
//   }
// }
