import supabase, { supabaseUrl } from "./supabase";
//
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    if (error.message.includes("Auth session missing")) return null;
    throw new Error(error.message);
  }

  return data?.user ?? null;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  // TODO: update user fullName or password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // TODO: upload avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: avatarStorageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (avatarStorageError) throw new Error(avatarStorageError.message);

  // TODO: update avatar in the db
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
}
