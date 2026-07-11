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

export async function createEditCabin({ data: newCabinData, id }) {
  console.log(newCabinData);
  console.log(id);

  const hasImage = newCabinData.image?.startsWith?.(supabaseUrl) ? true : false;
  const imageName = `${Math.random()}-${newCabinData.image[0].name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImage
    ? newCabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create cabin
  let query = supabase.from("cabin");

  if (!id) query = query.insert([{ ...newCabinData, image: imagePath }]);
  if (id)
    query = query.update({ ...newCabinData, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    await supabase.storage.from("cabin-images").remove([imageName]);
    console.error(error);
    throw new Error("Cabin couldnt be created");
  }
  // image upload
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabinData.image[0]);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}
