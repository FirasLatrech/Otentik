import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { SupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";


export const getResturant = async function() {
    try {
        const { data, error } = await supabaseAdmin.from('restaurants').select('*');

        if (error) {
            console.error('Error fetching restaurants:', error.message);
            // Handle the error as needed, for example, by returning an empty array or throwing an error
            return [];
        }

        return data;
    } catch (err :any) {
        console.error('Unexpected error:', err.message);
        // Handle the unexpected error as needed
        return [];
    }
}
