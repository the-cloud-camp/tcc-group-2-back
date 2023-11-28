GRANT ALL PRIVILEGES on ALL TABLES IN SCHEMA public to "postgres";
GRANT ALL PRIVILEGES on ALL SEQUENCES IN SCHEMA public to "postgres";
GRANT ALL PRIVILEGES on ALL FUNCTIONS IN SCHEMA public to "postgres";
GRANT ALL PRIVILEGES on ALL TABLES IN SCHEMA public TO "full_access";
GRANT ALL PRIVILEGES on ALL SEQUENCES IN SCHEMA public TO "full_access";
GRANT ALL PRIVILEGES on ALL FUNCTIONS IN SCHEMA public TO "full_access";
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO "read_write";
GRANT ALL PRIVILEGES on ALL SEQUENCES IN SCHEMA public TO "read_write";
GRANT ALL PRIVILEGES on ALL FUNCTIONS IN SCHEMA public TO "read_write";
GRANT SELECT ON ALL TABLES IN SCHEMA public TO "read_only";
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO "read_only";
GRANT ALL PRIVILEGES on ALL FUNCTIONS IN SCHEMA public TO "read_only";

-- Grant access to developers for newly created table
-- https://tripetch.atlassian.net/wiki/spaces/DGE/pages/3141894315/Database+Migrations#Grant-access-to-developers-for-newly-created-table
