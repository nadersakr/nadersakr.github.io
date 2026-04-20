
INSERT INTO public.profiles (user_id, display_name)
SELECT u.id, COALESCE(u.email, 'nadersakr.dev@gmail.com')
FROM auth.users u
WHERE u.id = 'd1c2b262-60a3-41a2-89e1-825634c05200'
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.credits (user_id, balance)
SELECT u.id, 3
FROM auth.users u
WHERE u.id = 'd1c2b262-60a3-41a2-89e1-825634c05200'
ON CONFLICT (user_id) DO NOTHING;
