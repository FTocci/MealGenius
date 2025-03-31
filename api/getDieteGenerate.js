import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
    try {
        const { user } = req.query;         
        const { data, error } = await supabase
            .from("test_table")
            .select("*")
            .eq("user", user);

        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Errore API Supabase:", error.message);
        res.status(500).json({ error: error.message });
    }
}