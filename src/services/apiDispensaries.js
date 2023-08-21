import supabase from "./supabase"

export async function getDispensaries() {

	const { data, error } = await supabase.from('dispensaries').select('*')

	if (error) {
		console.log(error)
		throw new Error("Dispensaries could not be loaded")
	}
	return data
}