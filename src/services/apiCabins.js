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

export async function createEditCabin({ data: cabinData, image }) {
  if (!image) throw new Error("Please select a cabin image");

  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, image);

  if (storageError) {
    console.error(storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  const { data, error } = await supabase
    .from("cabin")
    .insert([
      {
        ...cabinData,
        maxCapacity: Number(cabinData.maxCapacity),
        regularPrice: Number(cabinData.regularPrice),
        discount: Number(cabinData.discount),
        descreption: cabinData.descreption ?? "",
        image: imagePath,
      },
    ])
    .select()
    .single();

  if (error) {
    await supabase.storage.from("cabin-images").remove([imageName]);
    console.error(error);
    throw new Error("Cabin couldnt be created");
  }

  return data;
}
