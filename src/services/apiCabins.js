import supabase from "./supabase";

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
export async function addCabin(cabinData) {
  const { data, error } = await supabase
    .from("cabin")
    .insert([{ id: "someValue", other_column: "otherValue" }])
    .select();
}
