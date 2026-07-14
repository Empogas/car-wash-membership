const AppConfig = {
    supabaseUrl: "https://yqrgleruaxcjqvgnetam.supabase.co",
    supabaseKey: "sb_publishable_vI4waNrvpVZ_iz65H4ZxXw_VKGSnhMF",
    appName: "Emporium Car Wash",
    membershipLengthDays: 31
};

const supabaseClient = supabase.createClient(
    AppConfig.supabaseUrl,
    AppConfig.supabaseKey
);