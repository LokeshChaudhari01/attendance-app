import supabase from "./supabase";

export async function  getAllData() {
  const { data, error } = await supabase
    .from("Subjects")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;
  return data;
}

export async function updateTotalLectures({ id, totalLecs, delta }) {
  return supabase
    .from("Subjects")
    .update({ totalLecs: totalLecs + delta })
    .eq("id", id)
    .select()
    .single();
}


export async function updateAttendedLectures({ id, attendedLecs, delta  }) {
  const { data, error } = await supabase
    .from("Subjects")
    .update({ attendedLecs: attendedLecs + delta })
    .eq("id", Number(id))
    .select()
    .single();

  if (error) throw error;

  return data;
}
