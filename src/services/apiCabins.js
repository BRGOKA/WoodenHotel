import supabase, { supabaseUrl } from "./supabase";

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

export async function createEditCabin({ data: cabinData, id }) {
  console.log(cabinData);
  const hasImage = cabinData.image?.startsWith?.(supabaseUrl) ? true : false;
  console.log(hasImage);
  const imageName = `${Math.random()}-${cabinData.image[0].name}`.replaceAll(
    "/",
    "",
  );
  console.log(imageName);
  const imagePath = hasImage
    ? cabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // image upload
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image[0]);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  // create cabin
  let query = supabase.from("cabin");

  if (!id) query = query.insert([{ ...cabinData, image: imagePath }]);
  if (id) query = query.update({ ...cabinData, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    await supabase.storage.from("cabin-images").remove([imageName]);
    console.error(error);
    throw new Error("Cabin couldnt be created");
  }

  return data;
}
