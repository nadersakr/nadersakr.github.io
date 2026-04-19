
INSERT INTO public.profiles (user_id, display_name)
VALUES ('d1c2b262-60a3-41a2-89e1-825634c05200', 'nadersakr.dev@gmail.com')
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.credits (user_id, balance)
VALUES ('d1c2b262-60a3-41a2-89e1-825634c05200', 3)
ON CONFLICT (user_id) DO NOTHING;
